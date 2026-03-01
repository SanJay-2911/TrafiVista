import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { motion } from "framer-motion";
import { Database, Users, Cpu, Activity } from "lucide-react";

const stats = [
  { label: "Total Datasets", value: "0", icon: Database, change: "" },
  { label: "Active Users", value: "0", icon: Users, change: "" },
  { label: "Models Trained", value: "0", icon: Cpu, change: "" },
  { label: "System Uptime", value: "0.0%", icon: Activity, change: "" },
];

const AdminDashboard = () => {
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
            <div className="mt-4 flex flex-col items-center justify-center py-10 text-center">
              <p className="text-sm text-muted-foreground">No recent activity found.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
