import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, AreaChart, Area } from "recharts";
import { Activity, ShieldCheck, Map, Clock } from "lucide-react";

const areaData: any[] = [];

const pieData: any[] = [];

const predictions: any[] = [];

const UserPredictions = () => {
  return (
    <DashboardLayout role="user">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <h1 className="font-display text-3xl font-bold tracking-tight text-white">
              Forecast <span className="text-[#9b87f5]">Analytics</span>
            </h1>
            <p className="text-muted-foreground mt-1">
              Deep-learning insights based on your recent traffic data.
            </p>
          </div>
          <div className="flex gap-3">
            <div className="flex items-center gap-2 px-4 py-2 bg-[#1A1A1D] border border-[#2D2D30] rounded-xl text-xs font-semibold text-white">
              <ShieldCheck className="h-4 w-4 text-[#9b87f5]" />
              AI Verified
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main Forecast Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 bg-[#0A0A0B] border border-[#2D2D30] rounded-2xl p-6 shadow-xl"
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-lg font-bold text-white font-display uppercase tracking-widest text-[10px] opacity-50">Temporal Forecast</h3>
                <p className="text-2xl font-bold text-white mt-1">24h Congestion Flow</p>
              </div>
              <div className="p-2 bg-[#1A1A1D] rounded-lg">
                <Activity className="h-5 w-5 text-[#9b87f5]" />
              </div>
            </div>

            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={areaData}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#9b87f5" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#9b87f5" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1A1A1D" vertical={false} />
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#666', fontSize: 10 }}
                    dy={10}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#666', fontSize: 10 }}
                  />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#0A0A0B', border: '1px solid #2D2D30', borderRadius: '12px' }}
                    itemStyle={{ color: '#9b87f5' }}
                  />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#9b87f5"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorValue)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Distribution Circle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-[#0A0A0B] border border-[#2D2D30] rounded-2xl p-6 shadow-xl flex flex-col items-center justify-center text-center"
          >
            <h3 className="text-lg font-bold text-white font-display uppercase tracking-widest text-[10px] opacity-50 mb-6">Severity Mix</h3>
            <div className="relative h-48 w-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    innerRadius={65}
                    outerRadius={85}
                    paddingAngle={8}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-3xl font-bold text-white">100%</span>
                <span className="text-[10px] text-muted-foreground uppercase">Stability</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-8 w-full">
              {pieData.map((d, i) => (
                <div key={i} className="flex flex-col items-center gap-1">
                  <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: d.color }}></div>
                  <span className="text-[10px] font-bold text-white uppercase">{d.name}</span>
                  <span className="text-xs text-muted-foreground">{d.value}%</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Prediction Table Overlay */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 bg-[#0A0A0B] border border-[#2D2D30] rounded-2xl overflow-hidden shadow-2xl"
        >
          <div className="px-8 py-6 border-b border-[#2D2D30] flex items-center gap-3">
            <div className="p-2 bg-[#1A1A1D] rounded-lg">
              <Map className="h-5 w-5 text-[#9b87f5]" />
            </div>
            <h2 className="font-display text-xl font-bold text-white tracking-tight">Geo-Spatial Predictions</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="text-muted-foreground text-xs uppercase tracking-wider bg-[#0f0f11]">
                  <th className="px-8 py-4 font-semibold">Location Cluster</th>
                  <th className="px-8 py-4 font-semibold">Peak Window</th>
                  <th className="px-8 py-4 font-semibold">Projected Volume</th>
                  <th className="px-8 py-4 font-semibold">Impact Level</th>
                  <th className="px-8 py-4 font-semibold text-right">Model Accuracy</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1A1A1D]">
                {predictions.length > 0 ? (
                  predictions.map((p, i) => (
                    <tr key={i} className="group hover:bg-[#141417] transition-colors">
                      <td className="px-8 py-5">
                        <div className="flex flex-col">
                          <span className="font-bold text-white">{p.location}</span>
                          <span className="text-[10px] text-muted-foreground uppercase">Sector ID: {(Math.random() * 1000).toFixed(0)}</span>
                        </div>
                      </td>
                      <td className="px-8 py-5">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          {p.time}
                        </div>
                      </td>
                      <td className="px-8 py-5">
                        <span className="font-bold text-white">{p.vehicles.toLocaleString()} units</span>
                      </td>
                      <td className="px-8 py-5">
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-[10px] font-black uppercase ring-1 ${p.level === "Critical"
                            ? "bg-red-500/10 text-red-400 ring-red-500/20"
                            : p.level === "Moderate"
                              ? "bg-amber-500/10 text-amber-400 ring-amber-500/20"
                              : "bg-green-500/10 text-green-400 ring-green-500/20"
                            }`}
                        >
                          {p.level}
                        </span>
                      </td>
                      <td className="px-8 py-5 text-right">
                        <span className="text-xs font-black text-white px-2 py-1 rounded bg-[#1A1A1D]">
                          {p.confidence}.00%
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="px-8 py-10 text-center text-sm text-muted-foreground">
                      No geo-spatial predictions available. Analyze a dataset to see results.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </motion.div>
      </motion.div>
    </DashboardLayout>
  );
};

export default UserPredictions;
