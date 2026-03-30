import { useState } from "react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Activity, Mail, Lock, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import api from "@/lib/api";

const Auth = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [role, setRole] = useState<"user" | "admin">("user");
  // Admin can only login, not register
  const [isRegister, setIsRegister] = useState(
    role === "admin" ? false : searchParams.get("mode") === "register"
  );
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const email = (e.currentTarget.elements.namedItem("email") as HTMLInputElement).value;
    const password = (e.currentTarget.elements.namedItem("password") as HTMLInputElement).value;
    const fullName = isRegister
      ? (e.currentTarget.elements.namedItem("name") as HTMLInputElement).value
      : undefined;

    try {
      if (isRegister) {
        await api.post("/auth/register", {
          email,
          password,
          full_name: fullName,
        });
        toast.success("Account created! Please sign in.");
        setIsRegister(false);
      } else {
        const formData = new FormData();
        formData.append("username", email);
        formData.append("password", password);

        const response = await api.post("/auth/login", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        const { access_token, role: userRole } = response.data;
        localStorage.setItem("access_token", access_token);
        localStorage.setItem("user_role", userRole);

        toast.success("Signed in!");
        navigate(userRole === "admin" ? "/admin" : "/dashboard");
      }
    } catch (error: any) {
      toast.error(error.response?.data?.detail || "Authentication failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-secondary/20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="mb-8 text-center">
          <Link to="/" className="inline-flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <Activity className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-display text-lg font-bold text-foreground">TrafficIQ</span>
          </Link>
        </div>

        <div className="surface-elevated p-6 sm:p-8">
          <h1 className="font-display text-2xl font-bold text-foreground">
            {isRegister ? "Create your account" : "Welcome back"}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {isRegister ? "Start predicting traffic congestion today." : "Sign in to your dashboard."}
          </p>

          {/* Role toggle */}
          <div className="mt-6 flex rounded-lg border border-border p-1">
            {(["user", "admin"] as const).map((r) => (
              <button
                key={r}
                onClick={() => {
                  setRole(r);
                  if (r === "admin") setIsRegister(false);
                }}
                className={`flex-1 rounded-md py-2 text-sm font-medium transition-colors ${role === r
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {r === "user" ? "User" : "Admin"}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            {isRegister && (
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input id="name" placeholder="John Doe" className="pl-10" required />
                </div>
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input id="email" type="email" placeholder="you@company.com" className="pl-10" required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input id="password" type="password" placeholder="••••••••" className="pl-10" required />
              </div>
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Please wait…" : isRegister ? "Create Account" : "Sign In"}
              {!loading && <ArrowRight className="ml-2 h-4 w-4" />}
            </Button>
          </form>

          {role === "user" && (
            <p className="mt-6 text-center text-sm text-muted-foreground">
              {isRegister ? "Already have an account?" : "Don't have an account?"}{" "}
              <button
                onClick={() => setIsRegister(!isRegister)}
                className="font-medium text-accent hover:underline"
              >
                {isRegister ? "Sign In" : "Create one"}
              </button>
            </p>
          )}
          {role === "admin" && (
            <p className="mt-6 text-center text-xs text-muted-foreground">
              Admin accounts are pre-configured. Contact your system administrator for access.
            </p>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Auth;
