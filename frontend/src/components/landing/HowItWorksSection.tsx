import { motion } from "framer-motion";
import { Upload, Cpu, LineChart } from "lucide-react";

const steps = [
  {
    icon: Upload,
    step: "01",
    title: "Upload Your Data",
    description: "Upload CSV files with traffic data — volume, speed, timestamps, and location data.",
  },
  {
    icon: Cpu,
    step: "02",
    title: "ML Processing",
    description: "Our models analyze historical patterns and contextual features to predict congestion.",
  },
  {
    icon: LineChart,
    step: "03",
    title: "View Predictions",
    description: "Get clear predictions with confidence scores, charts, and exportable reports.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Three simple steps to predict traffic congestion.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative text-center"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary">
                <s.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <span className="mt-4 block font-display text-sm font-bold text-accent">
                STEP {s.step}
              </span>
              <h3 className="mt-2 font-display text-xl font-semibold text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
