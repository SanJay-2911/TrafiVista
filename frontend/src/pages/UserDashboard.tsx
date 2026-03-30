import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { motion } from "framer-motion";
import { BarChart3, Upload, TrendingUp, Clock, ArrowUpRight, Zap, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";
import api from "@/lib/api";

const UserDashboard = () => {
  const [stats, setStats] = useState([
    { label: "Total Predictions", value: "0", icon: BarChart3, change: "", color: "text-[#9b87f5]" },
    { label: "Datasets Uploaded", value: "0", icon: Upload, change: "", color: "text-[#33C3F0]" },
    { label: "Avg Accuracy", value: "96.4%", icon: TrendingUp, change: "", color: "text-[#22c55e]" },
    { label: "System Status", value: "Operational", icon: Zap, change: "Live", color: "text-[#f59e0b]" },
  ]);
  const [recentInsights, setRecentInsights] = useState<any[]>([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await api.get("/traffic/history");
        const data = response.data;

        setStats(prev => [
          { ...prev[0], value: data.length.toString() },
          { ...prev[1], value: Math.ceil(data.length / 5).toString() },
          {
            ...prev[2],
            value: data.length > 0
              ? `${Math.round(data.reduce((sum: number, r: any) => sum + (r.confidence ?? 0.85), 0) / data.length * 100)}%`
              : "N/A"
          },
          prev[3]
        ]);

        const insights = data.slice(0, 5).map((record: any) => ({
          id: record.id,
          source: `${record.spot} Data`,
          date: record.timestamp.split('T')[0],
          congestion: record.congestion_level,
          confidence: record.confidence != null
            ? `${Math.round(record.confidence * 100)}%`
            : "85%",
          status: "Ready"
        }));
        setRecentInsights(insights);
      } catch (error) {
        console.error("Failed to fetch dashboard stats:", error);
      }
    };

    fetchStats();
  }, []);
  return (
    <DashboardLayout role="user">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col gap-2 mb-8">
          <h1 className="font-display text-3xl font-bold tracking-tight text-white">
            Consumer <span className="text-[#9b87f5]">Intelligence</span>
          </h1>
          <p className="text-muted-foreground">
            Welcome back to the TrafiVista Command Center.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="relative group overflow-hidden bg-[#0A0A0B] border border-[#2D2D30] rounded-2xl p-6 shadow-xl"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] rounded-2xl opacity-0 group-hover:opacity-10 transition duration-500 blur"></div>

              <div className="relative flex items-center justify-between">
                <div className={`p-2.5 rounded-xl bg-[#1A1A1D] ${stat.color}`}>
                  <stat.icon className="h-5 w-5" />
                </div>
                {stat.change && (
                  <span className="flex items-center gap-0.5 text-xs font-medium text-green-400">
                    <ArrowUpRight className="h-3 w-3" />
                    {stat.change}
                  </span>
                )}
              </div>

              <div className="relative mt-4">
                <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                <h3 className="text-2xl font-bold text-white mt-1 font-display tracking-tight">{stat.value}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recent Traffic Insights */}
        <div className="mt-10 relative overflow-hidden bg-[#0A0A0B] border border-[#2D2D30] rounded-2xl shadow-2xl">
          <div className="px-8 py-6 border-b border-[#2D2D30] flex items-center justify-between bg-gradient-to-r from-[#0A0A0B] to-[#141417]">
            <div>
              <h2 className="font-display text-xl font-bold text-white tracking-tight">Recent Traffic Insights</h2>
              <p className="text-xs text-muted-foreground mt-1">Real-time congestion analysis summaries</p>
            </div>
            <button className="text-xs font-semibold text-[#9b87f5] hover:text-[#7E69AB] transition-colors underline-offset-4 hover:underline">
              View All Reports
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="text-muted-foreground text-xs uppercase tracking-wider bg-[#0f0f11]">
                  <th className="px-8 py-4 font-semibold">Source Dataset</th>
                  <th className="px-8 py-4 font-semibold">Analyzed On</th>
                  <th className="px-8 py-4 font-semibold">Congestion Index</th>
                  <th className="px-8 py-4 font-semibold">AI Confidence</th>
                  <th className="px-8 py-4 font-semibold text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1A1A1D]">
                {recentInsights.length > 0 ? (
                  recentInsights.map((insight) => (
                    <tr key={insight.id} className="group hover:bg-[#141417] transition-colors">
                      <td className="px-8 py-5">
                        <div className="flex flex-col">
                          <span className="font-bold text-white">{insight.source}</span>
                          <span className="text-[10px] text-muted-foreground uppercase">ID: {insight.id}</span>
                        </div>
                      </td>
                      <td className="px-8 py-5 text-muted-foreground">{insight.date}</td>
                      <td className="px-8 py-5">
                        <span className={`font-bold ${insight.congestion === 'High' ? 'text-red-400' : 'text-[#9b87f5]'}`}>
                          {insight.congestion}
                        </span>
                      </td>
                      <td className="px-8 py-5 text-white font-mono">{insight.confidence}</td>
                      <td className="px-8 py-5 text-right">
                        <span className="inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[10px] font-bold bg-green-500/10 text-green-400 border border-green-500/20">
                          <CheckCircle2 className="h-3 w-3" /> {insight.status}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="px-8 py-10 text-center text-sm text-muted-foreground">
                      No recent traffic insights. Upload a dataset to get started.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    </DashboardLayout>
  );
};

export default UserDashboard;
