import { Link, useNavigate, useLocation } from "react-router-dom";
import { Activity, LayoutDashboard, Upload, BarChart3, Database, LogOut, Settings, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";

interface DashboardLayoutProps {
  children: React.ReactNode;
  role: "user" | "admin";
}

const userLinks = [
  { to: "/dashboard", icon: LayoutDashboard, label: "Overview" },
  { to: "/dashboard/upload", icon: Upload, label: "Upload Data" },
  { to: "/dashboard/predictions", icon: BarChart3, label: "Prediction History" },
];

const adminLinks = [
  { to: "/admin", icon: LayoutDashboard, label: "Overview" },
  { to: "/admin/datasets", icon: Database, label: "Datasets" },
  { to: "/admin/settings", icon: Settings, label: "Settings" },
];

const DashboardLayout = ({ children, role }: DashboardLayoutProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const links = role === "admin" ? adminLinks : userLinks;

  return (
    <div className="flex min-h-screen bg-background relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none" />
      {/* Sidebar */}
      <aside className="hidden w-64 flex-col border-r border-border bg-background lg:flex">
        <div className="flex h-16 items-center gap-2 border-b border-border px-6">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <Activity className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="font-display text-sm font-bold text-foreground">TrafiVista</span>
          <span className="ml-auto rounded-full bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent capitalize">
            {role}
          </span>
        </div>

        <nav className="flex-1 space-y-1 p-4">
          {links.map((link) => {
            const active = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${active
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`}
              >
                <link.icon className="h-4 w-4" />
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-border p-4">
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start text-muted-foreground"
            onClick={() => {
              toast.success("Signed out");
              navigate("/");
            }}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Sign Out
          </Button>
        </div>
      </aside>

      {/* Mobile header */}
      <div className="flex flex-1 flex-col">
        <header className="flex h-16 items-center gap-4 border-b border-border bg-[#0A0A0B]/80 backdrop-blur-md px-4 sticky top-0 z-50 lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72 bg-[#0A0A0B] border-r border-[#2D2D30] p-0 text-white">
              <SheetHeader className="p-6 border-b border-[#2D2D30]">
                <SheetTitle className="flex items-center gap-2 text-white">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#8B5CF6]">
                    <Activity className="h-4 w-4 text-white" />
                  </div>
                  <span className="font-display text-lg font-bold">TrafiVista</span>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex-1 space-y-2 p-4 mt-4">
                {links.map((link) => {
                  const active = location.pathname === link.to;
                  return (
                    <Link
                      key={link.to}
                      to={link.to}
                      className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all ${active
                        ? "bg-[#8B5CF6] text-white shadow-lg shadow-[#8B5CF6]/20"
                        : "text-muted-foreground hover:bg-[#1A1A1D] hover:text-white"
                        }`}
                    >
                      <link.icon className="h-5 w-5" />
                      {link.label}
                    </Link>
                  );
                })}
              </nav>
              <div className="absolute bottom-0 w-full p-4 border-t border-[#2D2D30]">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-red-400 hover:text-red-300 hover:bg-red-400/10"
                  onClick={() => {
                    toast.success("Signed out");
                    navigate("/");
                  }}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </Button>
              </div>
            </SheetContent>
          </Sheet>

          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#8B5CF6]">
              <Activity className="h-4 w-4 text-white" />
            </div>
            <span className="font-display text-sm font-bold text-white">TrafiVista</span>
          </div>
        </header>

        <main className="flex-1 p-4 lg:p-8 relative z-10">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
