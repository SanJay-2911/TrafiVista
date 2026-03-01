import { useState, useEffect } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { motion } from "framer-motion";
import { Database, Users, Cpu, Activity } from "lucide-react";
import api from "@/lib/api";

interface Dataset {
  id: string;
  name: string;
  uploaded: string;
  status: string;
}

const AdminDashboard = () => {
  const [datasets, setDatasets] = useState<Dataset[]>([]);
  const [stats, setStats] = useState([
    { label: "Total Datasets", value: "0", icon: Database, change: "" },
    { label: "Active Users", value: "0", icon: Users, change: "" },
    { label: "Models Trained", value: "0", icon: Cpu, change: "" },
    { label: "System Uptime", value: "99.9%", icon: Activity, change: "" },
  ]);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const response = await api.get("/traffic/history");
      const records = response.data || [];
      setDatasets(records);

      // Update stats based on fetched data
      setStats((prevStats) => [
        { ...prevStats[0], value: records.length.toString() },
        { ...prevStats[1], value: "1" }, // Current admin user
        { ...prevStats[2], value: "1" }, // At least one model version
        { ...prevStats[3], value: "99.9%" },
      ]);
    } catch (error) {
      console.error("Failed to fetch dashboard data:", error);
    }
  };

  const recentActivity = datasets.slice(0, 5).map((d) => ({
    id: d.id,
    action: `Uploaded: ${d.name}`,
    timestamp: d.uploaded,
    status: d.status,
  }));

  return (
    <DashboardLayout role="admin">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1 className="font-display text-2xl font-bold text-foreground">Admin Dashboard</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          System overview and dataset management.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="surface-card p-5"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{stat.label}</span>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="mt-2 flex items-end gap-2">
                <span className="font-display text-2xl font-bold text-foreground">{stat.value}</span>
                {stat.change && (
                  <span className="mb-0.5 text-xs font-medium text-accent">{stat.change}</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 surface-card p-6">
          <h2 className="font-display text-lg font-semibold text-foreground">Recent Activity</h2>
          <div className="mt-4 space-y-3">
            {recentActivity.length > 0 ? (
              recentActivity.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-center justify-between border-b border-border pb-3 last:border-b-0"
                >
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
                  </div>
                  <span className="text-xs font-medium text-accent capitalize">{activity.status}</span>
                </div>
              ))
            ) : (
              <div className="mt-4 flex flex-col items-center justify-center py-10 text-center">
                <p className="text-sm text-muted-foreground">No recent activity found.</p>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
