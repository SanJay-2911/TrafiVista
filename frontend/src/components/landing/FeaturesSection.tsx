import { motion } from "framer-motion";
import { Upload, Brain, BarChart3, Shield, Database, Users } from "lucide-react";

const features = [
  {
    icon: Upload,
    title: "CSV Data Upload",
    description: "Upload traffic datasets in CSV format with instant validation and error feedback.",
  },
  {
    icon: Brain,
    title: "ML Predictions",
    description: "Advanced machine learning models analyze patterns and predict congestion levels.",
  },
  {
    icon: BarChart3,
    title: "Visual Analytics",
    description: "Interactive charts, tables, and confidence indicators for clear result interpretation.",
  },
  {
    icon: Shield,
    title: "Role-Based Access",
    description: "Separate user and admin dashboards with secure authentication and permissions.",
  },
  {
    icon: Database,
    title: "Dataset Management",
    description: "Admins can store, manage, and version datasets for model training workflows.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Share predictions and datasets across your organization securely.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Everything You Need
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A complete platform for traffic data analysis, prediction, and management.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="surface-card p-6 transition-all hover:shadow-lg"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <feature.icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
