import { useLocation, useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Calendar, Clock, AlertTriangle, CheckCircle2, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const PredictionResult = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const params = location.state as {
        spot: string;
        date: string;
        time: string;
    } | null;

    if (!params) {
        return (
            <DashboardLayout role="user">
                <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
                    <AlertTriangle className="h-16 w-16 text-amber-500 mb-4 opacity-50" />
                    <h2 className="text-2xl font-bold text-white">No Prediction Found</h2>
                    <p className="text-muted-foreground mt-2">Please upload data and select parameters first.</p>
                    <Button onClick={() => navigate("/dashboard/upload")} className="mt-6 bg-[#8B5CF6] hover:bg-[#7C3AED]">
                        Go to Upload
                    </Button>
                </div>
            </DashboardLayout>
        );
    }

    // Randomly select a result (High, Medium, Low) for demo purposes
    const results: ("High" | "Medium" | "Low")[] = ["High", "Medium", "Low"];
    const result = results[Math.floor(Math.random() * results.length)];

    const statusColors = {
        High: "text-red-400 border-red-500/20 bg-red-500/10",
        Medium: "text-amber-400 border-amber-500/20 bg-amber-500/10",
        Low: "text-green-400 border-green-500/20 bg-green-500/10",
    };

    const statusIcons = {
        High: <AlertTriangle className="h-12 w-12 text-red-500" />,
        Medium: <Info className="h-12 w-12 text-amber-500" />,
        Low: <CheckCircle2 className="h-12 w-12 text-green-500" />,
    };

    return (
        <DashboardLayout role="user">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto space-y-8 py-8"
            >
                <button
                    onClick={() => navigate("/dashboard/upload")}
                    className="flex items-center gap-2 text-muted-foreground hover:text-white transition-colors"
                >
                    <ArrowLeft className="h-4 w-4" />
                    <span>Back to Predict</span>
                </button>

                <div className="text-center">
                    <h1 className="font-display text-4xl font-bold text-white tracking-tight">Prediction Result</h1>
                    <p className="text-muted-foreground mt-2">Based on your uploaded traffic data and parameters</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                    {/* Result Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                        className={cn(
                            "relative flex flex-col items-center justify-center p-12 rounded-3xl border shadow-2xl overflow-hidden group bg-[#0A0A0B]",
                            statusColors[result]
                        )}
                    >
                        {/* Glow */}
                        <div className={cn(
                            "absolute inset-0 opacity-10 blur-3xl rounded-full translate-y-20",
                            result === "High" ? "bg-red-500" : result === "Medium" ? "bg-amber-500" : "bg-green-500"
                        )} />

                        <div className="relative mb-6 p-6 rounded-3xl bg-[#1A1A1D] border border-white/5">
                            {statusIcons[result]}
                        </div>

                        <div className="relative text-center">
                            <span className="text-xs font-black uppercase tracking-[0.2em] opacity-60">Congestion Level</span>
                            <h2 className="text-7xl font-black mt-2 tracking-tighter">{result}</h2>
                        </div>
                    </motion.div>

                    {/* Details Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-[#0A0A0B] border border-[#2D2D30] rounded-3xl p-8 space-y-8"
                    >
                        <h3 className="text-xl font-bold text-white border-b border-[#2D2D30] pb-4">Forecast Details</h3>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-2xl bg-[#1A1A1D] border border-[#2D2D30]">
                                    <MapPin className="h-5 w-5 text-[#9b87f5]" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-muted-foreground uppercase">Location</p>
                                    <p className="text-lg font-bold text-white mt-1">{params.spot}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-2xl bg-[#1A1A1D] border border-[#2D2D30]">
                                    <Calendar className="h-5 w-5 text-[#9b87f5]" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-muted-foreground uppercase">Target Date</p>
                                    <p className="text-lg font-bold text-white mt-1">{params.date}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-2xl bg-[#1A1A1D] border border-[#2D2D30]">
                                    <Clock className="h-5 w-5 text-[#9b87f5]" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-muted-foreground uppercase">Target Time</p>
                                    <p className="text-lg font-bold text-white mt-1">{params.time}</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4">
                            <Button onClick={() => navigate("/dashboard/upload")} variant="outline" className="w-full border-[#2D2D30] hover:bg-[#1A1A1D] text-white rounded-2xl h-12">
                                Analyze New Site
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </DashboardLayout>
    );
};

export default PredictionResult;
