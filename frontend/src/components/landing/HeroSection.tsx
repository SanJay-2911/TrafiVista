import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, TrendingUp, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-sm font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              ML-Powered Traffic Intelligence
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl lg:leading-[1.1]"
          >
            Predict Traffic{" "}
            <span className="text-[#9b87f5]">Congestion</span>{" "}
            Before It Happens
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-muted-foreground px-4 sm:px-0"
          >
            Upload your traffic data and get instant results with
            confidence scores. Built for urban planners and traffic engineers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row px-6 sm:px-0"
          >
            <Button size="lg" className="h-12 w-full sm:w-auto px-8 rounded-xl bg-[#8B5CF6] hover:bg-[#7C3AED]" asChild>
              <Link to="/auth?mode=register">
                Start Predicting
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="h-12 w-full sm:w-auto px-8 rounded-xl border-[#2D2D30] text-white hover:bg-[#1A1A1D]" asChild>
              <a href="#how-it-works">See How It Works</a>
            </Button>
          </motion.div>
        </div>

        {/* Stats row removed for clean app state */}
      </div>
    </section>
  );
};

export default HeroSection;
