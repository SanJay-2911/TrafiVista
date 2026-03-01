import { Activity } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 text-sm text-muted-foreground sm:flex-row lg:px-8">
      <div className="flex items-center gap-2">
        <Activity className="h-4 w-4 text-foreground" />
        <span className="font-display font-semibold text-foreground">TrafiVista</span>
      </div>
      <p>&copy; {new Date().getFullYear()} TrafiVista. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
