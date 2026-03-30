import { useState, useCallback, useEffect } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, FileText, Trash2, Download, Search, RotateCcw, CheckCircle2, Cpu, History, AlertCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import api from "@/lib/api";

interface Dataset {
  id: string;
  name: string;
  rows: number;
  size: string;
  uploaded: string;
  status: "ready" | "training" | "completed" | "failed";
}

interface ModelVersion {
  id: string;
  version: string;
  accuracy: string;
  trainedAt: string;
  dataset: string;
  isActive: boolean;
}

const initialDatasets: Dataset[] = [];

const initialVersions: ModelVersion[] = [];

const AdminDatasets = () => {
  const [datasets, setDatasets] = useState<Dataset[]>(initialDatasets);
  const [versions, setVersions] = useState<ModelVersion[]>(initialVersions);
  const [search, setSearch] = useState("");
  const [isTraining, setIsTraining] = useState(false);
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const response = await api.get("/traffic/history");
      const mapped: Dataset[] = response.data.map((record: any) => ({
        id: record.id.toString(),
        name: `${record.spot} - ${record.city}`,
        rows: record.vehicle_count || 0,
        size: "N/A",
        uploaded: record.timestamp.split('T')[0],
        status: "ready"
      }));
      setDatasets(mapped);

      // Create dummy version history for demo
      const versionList: ModelVersion[] = response.data.slice(0, 3).map((record: any, idx: number) => ({
        id: `V${record.id}`,
        version: `2.${idx + 1}.0`,
        accuracy: `${(95 + Math.random() * 3).toFixed(1)}%`,
        trainedAt: new Date(record.created_at).toLocaleString(),
        dataset: `${record.spot} Traffic Data`,
        isActive: idx === 0
      }));
      setVersions(versionList);
    } catch (error) {
      console.error("Failed to fetch history:", error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await api.delete(`/traffic/record/${id}`);
      setDatasets((prev) => prev.filter((d) => d.id !== id));
      toast.success("Dataset record removed (Undo successful).");
    } catch (error) {
      toast.error("Failed to delete record.");
    }
  };

  const processUpload = (file: File) => {
    if (!file.name.endsWith(".csv") && !file.name.endsWith(".pdf")) {
      toast.error("Please upload only .csv or .pdf files.");
      return;
    }

    const newDataset: Dataset = {
      id: `D${Date.now()}`,
      name: file.name,
      rows: Math.floor(Math.random() * 10000) + 5000,
      size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
      uploaded: new Date().toISOString().split('T')[0],
      status: "training"
    };

    setDatasets(prev => [newDataset, ...prev]);
    setIsTraining(true);
    setIsUploadOpen(false);
    toast.success("Dataset uploaded! Automatic training started.");

    // Simulate training process
    setTimeout(() => {
      setDatasets(prev => prev.map(d => d.id === newDataset.id ? { ...d, status: "completed" } : d));

      const newVersion: ModelVersion = {
        id: `V${Date.now()}`,
        version: `2.${versions.length + 1}.0`,
        accuracy: `${(95 + Math.random() * 3).toFixed(1)}%`,
        trainedAt: new Date().toLocaleString(),
        dataset: newDataset.name,
        isActive: true
      };

      setVersions(prev => [newVersion, ...prev.map(v => ({ ...v, isActive: false }))]);
      setIsTraining(false);
      toast.success("Model trained successfully! New version active.");
    }, 5000);
  };

  const handleRestore = (id: string) => {
    setVersions(prev => prev.map(v => ({
      ...v,
      isActive: v.id === id
    })));
    toast.success("Model version restored successfully.");
  };

  return (
    <DashboardLayout role="admin">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="font-display text-4xl font-bold text-white tracking-tight">Dataset Training</h1>
            <p className="mt-2 text-sm text-muted-foreground text-lg">
              Manage training data and monitor automatic model retraining.
            </p>
          </div>

          <Dialog open={isUploadOpen} onOpenChange={setIsUploadOpen}>
            <DialogTrigger asChild>
              <Button
                disabled={isTraining}
                className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white h-12 px-6 rounded-xl shadow-lg shadow-[#8B5CF6]/20 transition-all font-bold"
              >
                <Upload className="mr-2 h-4 w-4" />
                Upload & Train
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-[#0A0A0B] border-[#2D2D30] text-white sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold tracking-tight">Upload Dataset</DialogTitle>
              </DialogHeader>
              <div
                onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
                onDragLeave={() => setDragging(false)}
                onDrop={(e) => {
                  e.preventDefault();
                  setDragging(false);
                  const f = e.dataTransfer.files[0];
                  if (f) processUpload(f);
                }}
                className={cn(
                  "mt-4 min-h-[200px] border-2 border-dashed rounded-2xl flex flex-col items-center justify-center transition-all cursor-pointer relative",
                  dragging ? "border-[#8B5CF6] bg-[#1A1A1D]" : "border-[#2D2D30] hover:border-[#4A4A4D] bg-transparent"
                )}
              >
                <input
                  type="file"
                  accept=".csv,.pdf"
                  onChange={(e) => {
                    const f = e.target.files?.[0];
                    if (f) processUpload(f);
                  }}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <Upload className="h-10 w-10 text-[#8B5CF6] mb-4" />
                <p className="text-sm font-medium text-white">Drag & drop or click to browse</p>
                <p className="text-xs text-muted-foreground mt-2">Only .csv or .pdf files accepted</p>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Datasets Table */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <FileText className="h-5 w-5 text-[#9b87f5]" />
                Recent Datasets
              </h2>
              <div className="relative w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search datasets…"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-10 bg-[#0A0A0B] border-[#2D2D30] text-white h-10 rounded-lg"
                />
              </div>
            </div>

            <div className="bg-[#0A0A0B] border border-[#2D2D30] rounded-3xl overflow-hidden shadow-2xl">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#2D2D30] bg-[#111114] text-left">
                    <th className="px-6 py-4 font-bold text-white uppercase tracking-wider text-xs">Dataset Name</th>
                    <th className="px-6 py-4 font-bold text-white uppercase tracking-wider text-xs">Records</th>
                    <th className="px-6 py-4 font-bold text-white uppercase tracking-wider text-xs">Status</th>
                    <th className="px-6 py-4 font-bold text-white uppercase tracking-wider text-xs text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#2D2D30]">
                  {datasets.filter(d => d.name.toLowerCase().includes(search.toLowerCase())).map((d) => (
                    <tr key={d.id} className="hover:bg-white/[0.02] transition-colors">
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-[#1A1A1D]">
                            <FileText className="h-4 w-4 text-[#8B5CF6]" />
                          </div>
                          <div>
                            <p className="font-bold text-white">{d.name}</p>
                            <p className="text-[10px] text-muted-foreground">{d.size} • Uploaded {d.uploaded}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-muted-foreground font-mono">{d.rows.toLocaleString()}</td>
                      <td className="px-6 py-5">
                        {d.status === "training" ? (
                          <div className="flex items-center gap-2 text-[#8B5CF6]">
                            <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }}>
                              <Cpu className="h-4 w-4" />
                            </motion.div>
                            <span className="text-xs font-bold animate-pulse">Training...</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2 text-green-400">
                            <CheckCircle2 className="h-4 w-4" />
                            <span className="text-xs font-bold">Ready</span>
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-5 text-right">
                        <div className="flex gap-2 justify-end">
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-white hover:bg-white/10 rounded-lg">
                            <Download className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleDelete(d.id)}
                            className="h-8 w-8 text-muted-foreground hover:text-red-400 hover:bg-red-400/10 rounded-lg"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {datasets.filter(d => d.name.toLowerCase().includes(search.toLowerCase())).length === 0 && (
                <div className="py-20 text-center text-muted-foreground">
                  <AlertCircle className="mx-auto h-12 w-12 mb-4 opacity-20" />
                  No datasets found. Start by uploading a file.
                </div>
              )}
            </div>
          </div>

          {/* Version History Sidebar */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <History className="h-5 w-5 text-[#9b87f5]" />
              Model History
            </h2>

            <div className="space-y-4">
              {versions.map((v) => (
                <motion.div
                  key={v.id}
                  layout
                  className={cn(
                    "p-5 rounded-3xl border transition-all relative overflow-hidden group",
                    v.isActive
                      ? "bg-[#1A1A1D]/100 border-[#8B5CF6]/50 shadow-lg shadow-[#8B5CF6]/10"
                      : "bg-[#0A0A0B] border-[#2D2D30] hover:border-[#4A4A4D]"
                  )}
                >
                  {v.isActive && (
                    <div className="absolute top-0 right-0 p-3">
                      <Badge className="bg-[#8B5CF6] hover:bg-[#8B5CF6] text-white">Active</Badge>
                    </div>
                  )}

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Cpu className={cn("h-4 w-4", v.isActive ? "text-[#8B5CF6]" : "text-muted-foreground")} />
                      <span className="text-sm font-bold text-white">v{v.version}</span>
                    </div>

                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-black text-white">{v.accuracy}</span>
                        <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-tighter">Accuracy</span>
                      </div>
                      <p className="text-[10px] text-muted-foreground mt-1">Trained: {v.trainedAt}</p>
                      <p className="text-[10px] text-muted-foreground truncate italic">Source: {v.dataset}</p>
                    </div>

                    {!v.isActive && (
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleRestore(v.id)}
                        className="w-full mt-2 h-9 border border-[#2D2D30] text-muted-foreground hover:text-white hover:bg-[#8B5CF6] hover:border-[#8B5CF6] rounded-xl transition-all"
                      >
                        <RotateCcw className="h-3 w-3 mr-2" />
                        Undo Training
                      </Button>
                    )}
                  </div>
                </motion.div>
              ))}
              {versions.length === 0 && (
                <div className="p-10 text-center border-2 border-dashed border-[#2D2D30] rounded-3xl opacity-30">
                  <p className="text-xs font-bold text-muted-foreground">Version history will appear here</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </DashboardLayout>
  );
};

export default AdminDatasets;
