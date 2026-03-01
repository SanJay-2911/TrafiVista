import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { motion } from "framer-motion";
import { History, MapPin, Calendar, Clock, AlertTriangle, CheckCircle2, Info } from "lucide-react";
import { useState, useEffect } from "react";
import api from "@/lib/api";

const UserPredictions = () => {
  const [history, setHistory] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await api.get("/traffic/history");
        setHistory(response.data);
      } catch (error) {
        console.error("Failed to fetch prediction history:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  const congestionColor = (level: string) => {
    if (level === "High") return "bg-red-500/10 text-red-400 border border-red-500/20";
    if (level === "Medium") return "bg-amber-500/10 text-amber-400 border border-amber-500/20";
    return "bg-green-500/10 text-green-400 border border-green-500/20";
  };

  const congestionIcon = (level: string) => {
    if (level === "High") return <AlertTriangle className="h-3 w-3" />;
    if (level === "Medium") return <Info className="h-3 w-3" />;
    return <CheckCircle2 className="h-3 w-3" />;
  };

  return (
    <DashboardLayout role="user">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto"
      >
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-display text-3xl font-bold tracking-tight text-white flex items-center gap-3">
            <History className="h-7 w-7 text-[#9b87f5]" />
            Prediction <span className="text-[#9b87f5]">History</span>
          </h1>
          <p className="text-muted-foreground mt-2">
            All congestion forecasts you have run so far.
          </p>
        </div>

        {/* Table */}
        <div className="bg-[#0A0A0B] border border-[#2D2D30] rounded-2xl overflow-hidden shadow-2xl">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="text-muted-foreground text-xs uppercase tracking-wider bg-[#111114] border-b border-[#2D2D30]">
                <th className="px-6 py-4 font-semibold">#</th>
                <th className="px-6 py-4 font-semibold">
                  <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> Location</span>
                </th>
                <th className="px-6 py-4 font-semibold">
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> Date</span>
                </th>
                <th className="px-6 py-4 font-semibold">
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> Time</span>
                </th>
                <th className="px-6 py-4 font-semibold">Congestion</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#2D2D30]">
              {loading ? (
                <tr>
                  <td colSpan={5} className="px-6 py-16 text-center text-muted-foreground">
                    <motion.div
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      Loading your predictions…
                    </motion.div>
                  </td>
                </tr>
              ) : history.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-20 text-center">
                    <History className="mx-auto h-12 w-12 mb-4 text-[#2D2D30]" />
                    <p className="text-muted-foreground text-sm">No predictions yet.</p>
                    <p className="text-muted-foreground text-xs mt-1">Go to <span className="text-[#9b87f5]">Upload Data</span> and run your first forecast!</p>
                  </td>
                </tr>
              ) : (
                history.map((record: any, i: number) => (
                  <motion.tr
                    key={record.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.03 }}
                    className="hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="px-6 py-4 text-muted-foreground font-mono text-xs">{i + 1}</td>
                    <td className="px-6 py-4">
                      <p className="font-bold text-white">{record.spot}</p>
                      <p className="text-xs text-muted-foreground">{record.city}{record.state ? `, ${record.state}` : ""}</p>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">{record.timestamp?.split("T")[0]}</td>
                    <td className="px-6 py-4 text-muted-foreground">
                      {new Date(record.timestamp + (record.timestamp?.endsWith("Z") ? "" : "Z")).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold ${congestionColor(record.congestion_level)}`}>
                        {congestionIcon(record.congestion_level)}
                        {record.congestion_level || "N/A"}
                      </span>
                    </td>
                  </motion.tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {!loading && history.length > 0 && (
          <p className="text-center text-xs text-muted-foreground mt-4">
            Showing {history.length} prediction{history.length !== 1 ? "s" : ""}
          </p>
        )}
      </motion.div>
    </DashboardLayout>
  );
};

export default UserPredictions;
