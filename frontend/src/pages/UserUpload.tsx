import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, FileText, CheckCircle2, X, Send, HelpCircle, Activity, Calendar as CalendarIcon, MapPin, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { indiaLocations, State, District, City, LocationSpot } from "@/data/india-locations";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format, parse, isValid } from "date-fns";
import { Input } from "@/components/ui/input";
import api from "@/lib/api";

const UserUpload = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState<File | null>(null);
  const [dragging, setDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const [isValidTrafficData, setIsValidTrafficData] = useState<boolean | null>(null);

  // Location State
  const [selectedState, setSelectedState] = useState<string>("");
  const [selectedDistrict, setSelectedDistrict] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [selectedSpot, setSelectedSpot] = useState<string>("");

  // Date/Time State
  const [date, setDate] = useState<Date>();
  const [dateInput, setDateInput] = useState<string>("");
  const [time, setTime] = useState<string>("12:00");

  // Sync date text input when calendar date changes
  useEffect(() => {
    if (date) {
      setDateInput(format(date, "yyyy-MM-dd"));
    }
  }, [date]);

  const handleDateTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setDateInput(val);
    const parsedDate = parse(val, "yyyy-MM-dd", new Date());
    if (isValid(parsedDate)) {
      setDate(parsedDate);
    }
  };

  useEffect(() => {
    const hasSeenInstructions = localStorage.getItem("hasSeenInstructions");
    if (!hasSeenInstructions) {
      setShowInstructions(true);
    }
  }, []);

  const handleInstructionsClose = () => {
    setShowInstructions(false);
    localStorage.setItem("hasSeenInstructions", "true");
  };

  const validateFileContent = (fileName: string) => {
    const trafficKeywords = ["traffic", "congestion", "vehicle count", "vehicle", "count", "road", "highway", "speed", "sensor", "gps"];
    const isTraffic = trafficKeywords.some(keyword => fileName.toLowerCase().includes(keyword));
    setIsValidTrafficData(isTraffic);
    if (!isTraffic) {
      toast.error("File does not appear to be traffic-related. Please upload traffic volume or congestion data.");
    } else {
      toast.success("Traffic data verified!");
    }
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const f = e.dataTransfer.files[0];
    if (f && (f.name.endsWith(".csv") || f.name.endsWith(".pdf"))) {
      setFile(f);
      setUploaded(false);
      validateFileContent(f.name);
    } else {
      toast.error("Please upload a CSV or PDF file.");
    }
  }, []);

  const handleSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f && (f.name.endsWith(".csv") || f.name.endsWith(".pdf"))) {
      setFile(f);
      setUploaded(false);
      validateFileContent(f.name);
    } else {
      toast.error("Please upload a CSV or PDF file.");
    }
  };

  const handlePredict = async () => {
    if (!file || !isValidTrafficData || !selectedSpot || !date) {
      toast.error("Please complete all selections and upload valid traffic data.");
      return;
    }

    // Date/Time Validation: Cannot predict for past
    const selectedDateTime = new Date(date);
    const [hours, minutes] = time.split(":").map(Number);
    selectedDateTime.setHours(hours, minutes, 0, 0);

    if (selectedDateTime < new Date()) {
      toast.error("Prediction date and time cannot be in the past. Please select a future time.");
      return;
    }
    setUploading(true);

    try {
      const response = await api.post("/traffic/predict", {
        state: indiaLocations.find(s => s.id === selectedState)?.name || "",
        district: currentState?.districts.find(d => d.id === selectedDistrict)?.name || "",
        city: currentDistrict?.cities.find(c => c.id === selectedCity)?.name || "",
        spot: selectedSpot,
        timestamp: selectedDateTime.toISOString(),
      });

      const { congestion_level, confidence } = response.data;

      toast.success(`Congestion forecasted for ${selectedSpot}!`);

      navigate("/dashboard/result", {
        state: {
          spot: selectedSpot,
          date: format(date, "PPP"),
          time: time,
          congestion: congestion_level,
          confidence: (confidence * 100).toFixed(0) + "%"
        }
      });
    } catch (error: any) {
      toast.error(error.response?.data?.detail || "Prediction failed. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  // Derived location data
  const currentState = indiaLocations.find(s => s.id === selectedState);
  const currentDistrict = currentState?.districts.find(d => d.id === selectedDistrict);
  const currentCity = currentDistrict?.cities.find(c => c.id === selectedCity);

  return (
    <DashboardLayout role="user">
      <div className="flex flex-col items-center justify-center min-h-[85vh] max-w-5xl mx-auto px-4 py-12">
        {/* Title & Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h1 className="font-display text-5xl font-bold tracking-tight">
            <span className="text-[#9b87f5]">TrafiVista</span> <span className="text-white">Predict</span>
          </h1>
          <p className="mt-4 text-muted-foreground text-lg">
            Upload traffic data and select target parameters to forecast congestion
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 w-full max-w-6xl">
          {/* Left Column: File Upload */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4 md:space-y-6"
          >
            <div
              onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
              onDragLeave={() => setDragging(false)}
              onDrop={handleDrop}
              className={`relative group bg-[#0A0A0B] border-2 border-dashed rounded-2xl p-6 md:p-10 transition-all duration-300 min-h-[250px] md:min-h-[300px] flex flex-col items-center justify-center ${dragging ? "border-[#7E69AB] bg-[#1A1A1D]" : "border-[#2D2D30] hover:border-[#4A4A4D]"
                }`}
            >
              <input
                type="file"
                accept=".csv,.pdf"
                onChange={handleSelectFile}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              />

              <div className="flex flex-col items-center justify-center text-center">
                <div className="mb-6 p-4 rounded-full bg-[#1A1A1D] group-hover:bg-[#252529] transition-colors">
                  {file ? (
                    <FileText className={cn("h-12 w-12", isValidTrafficData ? "text-green-400" : "text-[#9b87f5]")} />
                  ) : (
                    <Upload className="h-12 w-12 text-[#9b87f5]" />
                  )}
                </div>

                {file ? (
                  <div className="space-y-3">
                    <p className="text-lg font-medium text-white truncate max-w-[250px]">{file.name}</p>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-xs text-muted-foreground">{(file.size / 1024).toFixed(1)} KB</span>
                      {isValidTrafficData === true && (
                        <span className="flex items-center gap-1 text-[10px] bg-green-500/10 text-green-400 px-2 py-0.5 rounded-full border border-green-500/20">
                          <CheckCircle2 className="h-3 w-3" /> Traffic Data
                        </span>
                      )}
                      {isValidTrafficData === false && (
                        <span className="flex items-center gap-1 text-[10px] bg-red-500/10 text-red-400 px-2 py-0.5 rounded-full border border-red-500/20">
                          <AlertCircle className="h-3 w-3" /> Invalid Data
                        </span>
                      )}
                    </div>
                    <button
                      onClick={(e) => { e.stopPropagation(); setFile(null); setIsValidTrafficData(null); }}
                      className="text-xs text-red-400 hover:text-red-300 transition-colors mt-4 block mx-auto underline"
                    >
                      Remove and try again
                    </button>
                  </div>
                ) : (
                  <>
                    <p className="text-xl font-semibold text-white mb-2">
                      Drop traffic report here
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Only .csv or .pdf files accepted
                    </p>
                  </>
                )}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#0A0A0B] border border-[#2D2D30] space-y-4">
              <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                <AlertCircle className="h-4 w-4 text-[#9b87f5]" />
                Validation Rule
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                System only accepts files containing traffic-related parameters (Vehicle Count, Speed, etc.) to ensure forecast accuracy.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Parameters */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="bg-[#0A0A0B] border border-[#2D2D30] rounded-2xl p-8 space-y-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-2">
                <MapPin className="h-5 w-5 text-[#9b87f5]" />
                Location Parameters
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs text-muted-foreground font-medium uppercase tracking-wider">State</label>
                  <Select value={selectedState} onValueChange={(val) => { setSelectedState(val); setSelectedDistrict(""); setSelectedCity(""); setSelectedSpot(""); }}>
                    <SelectTrigger className="bg-[#1A1A1D] border-[#2D2D30] text-white w-full">
                      <SelectValue placeholder="Select State" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1A1A1D] border-[#2D2D30] text-white">
                      {indiaLocations.map(s => <SelectItem key={s.id} value={s.id}>{s.name}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-muted-foreground font-medium uppercase tracking-wider">District</label>
                  <Select value={selectedDistrict} onValueChange={(val) => { setSelectedDistrict(val); setSelectedCity(""); setSelectedSpot(""); }} disabled={!selectedState}>
                    <SelectTrigger className="bg-[#1A1A1D] border-[#2D2D30] text-white w-full">
                      <SelectValue placeholder="Select District" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1A1A1D] border-[#2D2D30] text-white">
                      {currentState?.districts.map(d => <SelectItem key={d.id} value={d.id}>{d.name}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-muted-foreground font-medium uppercase tracking-wider">City</label>
                  <Select value={selectedCity} onValueChange={(val) => { setSelectedCity(val); setSelectedSpot(""); }} disabled={!selectedDistrict}>
                    <SelectTrigger className="bg-[#1A1A1D] border-[#2D2D30] text-white w-full">
                      <SelectValue placeholder="Select City" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1A1A1D] border-[#2D2D30] text-white">
                      {currentDistrict?.cities.map(c => <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Congestion Spot</label>
                  <Select value={selectedSpot} onValueChange={setSelectedSpot} disabled={!selectedCity}>
                    <SelectTrigger className="bg-[#1A1A1D] border-[#2D2D30] text-white w-full">
                      <SelectValue placeholder="Select Spot" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1A1A1D] border-[#2D2D30] text-white">
                      {currentCity?.spots.map(spot => <SelectItem key={spot.id} value={spot.name}>{spot.name}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="pt-4 border-t border-[#2D2D30] space-y-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5 text-[#9b87f5]" />
                  Time Parameters
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Target Date</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <div className="relative cursor-pointer">
                          <Input
                            type="text"
                            placeholder="YYYY-MM-DD"
                            value={dateInput}
                            onChange={handleDateTextChange}
                            className="bg-[#1A1A1D] border-[#2D2D30] text-white h-10 pl-10 pr-4 w-full focus:ring-[#9b87f5]/50 focus:border-[#9b87f5]"
                          />
                          <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#9b87f5]" />
                        </div>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 bg-[#0A0A0B] border-[#2D2D30]" align="start">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={(newDate) => {
                            setDate(newDate);
                            if (newDate) setDateInput(format(newDate, "yyyy-MM-dd"));
                          }}
                          disabled={{ before: new Date(new Date().setHours(0, 0, 0, 0)) }}
                          initialFocus
                          className="bg-[#0A0A0B] text-white"
                        />
                      </PopoverContent>
                    </Popover>
                    <p className="text-[10px] text-muted-foreground mt-1 px-1 italic">Type YYYY-MM-DD or use the calendar icon</p>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Target Time</label>
                    <div className="relative">
                      <Input
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="bg-[#1A1A1D] border-[#2D2D30] text-white h-10 px-4 w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Predict Button */}
            <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
              <Button
                onClick={handlePredict}
                disabled={uploading || !file || !isValidTrafficData || !selectedSpot || !date}
                className={cn(
                  "w-full h-16 rounded-2xl text-white text-xl font-bold shadow-lg transition-all",
                  isValidTrafficData && selectedSpot && date
                    ? "bg-[#8B5CF6] hover:bg-[#7C3AED] shadow-[#8B5CF6]/20"
                    : "bg-muted cursor-not-allowed grayscale"
                )}
              >
                {uploading ? (
                  <span className="flex items-center gap-2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    >
                      <Activity className="h-6 w-6" />
                    </motion.div>
                    Processing Data...
                  </span>
                ) : (
                  "Predict Congestion"
                )}
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <button
          onClick={() => setShowInstructions(true)}
          className="mt-16 flex items-center gap-2 text-muted-foreground hover:text-white transition-colors"
        >
          <HelpCircle className="h-5 w-5" />
          <span>Need help getting started?</span>
        </button>
      </div>

      {/* Instructions Modal */}
      <AnimatePresence>
        {showInstructions && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={handleInstructionsClose}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-[90%] md:max-w-lg bg-[#0A0A0B] border border-[#2D2D30] rounded-3xl p-6 md:p-10 text-center shadow-2xl"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">Getting Started</h2>
              <div className="text-left space-y-4 mb-10 mx-auto max-w-sm">
                <div className="flex gap-4 items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#8B5CF6]/20 text-[#8B5CF6] flex items-center justify-center text-sm font-bold">1</span>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed pt-0.5">Upload a CSV or PDF containing traffic volume data.</p>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#8B5CF6]/20 text-[#8B5CF6] flex items-center justify-center text-sm font-bold">2</span>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed pt-0.5">Select the State, District, and specific city junction.</p>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#8B5CF6]/20 text-[#8B5CF6] flex items-center justify-center text-sm font-bold">3</span>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed pt-0.5">Pick the future date and time for prediction.</p>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#8B5CF6]/20 text-[#8B5CF6] flex items-center justify-center text-sm font-bold">4</span>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed pt-0.5">Get instant congestion forecasts.</p>
                </div>
              </div>
              <Button
                onClick={handleInstructionsClose}
                className="w-full h-14 rounded-2xl bg-[#8B5CF6] hover:bg-[#7C3AED] text-white text-lg font-bold transition-all"
              >
                Let's Go
              </Button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </DashboardLayout>
  );
};

export default UserUpload;
