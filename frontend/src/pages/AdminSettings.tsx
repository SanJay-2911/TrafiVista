import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { motion } from "framer-motion";

const AdminSettings = () => {
  return (
    <DashboardLayout role="admin">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1 className="font-display text-2xl font-bold text-foreground">Settings</h1>
        <p className="mt-1 text-sm text-muted-foreground">Manage system configuration.</p>

        <div className="mt-8 space-y-6 max-w-2xl">
          <div className="surface-card p-6">
            <h2 className="font-display text-lg font-semibold text-foreground">Model Configuration</h2>
            <p className="mt-1 text-sm text-muted-foreground">Current model version and training status.</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg bg-secondary/50 p-4">
                <p className="text-xs text-muted-foreground">Model Version</p>
                <p className="mt-1 font-display text-lg font-bold text-foreground italic opacity-50 text-sm">No version</p>
              </div>
              <div className="rounded-lg bg-secondary/50 p-4">
                <p className="text-xs text-muted-foreground">Last Trained</p>
                <p className="mt-1 font-display text-lg font-bold text-foreground italic opacity-50 text-sm">Never trained</p>
              </div>
            </div>
          </div>

          <div className="surface-card p-6">
            <h2 className="font-display text-lg font-semibold text-foreground">System Info</h2>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Platform</span>
                <span className="font-medium text-foreground">TrafiVista v1.0</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">API Status</span>
                <span className="font-medium text-success">Operational</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-muted-foreground">Storage Used</span>
                <span className="font-medium text-foreground italic opacity-50">0 GB / 100 GB</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </DashboardLayout>
  );
};

export default AdminSettings;
