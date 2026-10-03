import { useState } from "react";

import {
  Eye,
  EyeOff,
  Lock,
  Mail,
  Sparkles,
  User,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import toast from "react-hot-toast";
import type RegisterData from "@/models/RegisterData";
import { registerUser } from "@/services/AuthService";
import { useNavigate } from "react-router";
import OAuth2Buttons from "@/components/OAuth2Buttons";

export default function Signup() {
  const [data, setData] = useState<RegisterData>({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  // handling form change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(event.target.name);
    // console.log(event.target.value);
    setData((value) => ({
      ...value,
      [event.target.name]: event.target.value,
    }));
  }

  // handling form submit
  const handleFormSubmit = async (event:React.FormEvent) => {
    event.preventDefault();
    console.log(data);

    if(data.name.trim() === ""){
      toast.error("Name required");
      return;
    } 

    if(data.email.trim() === ""){
      toast.error("Email required");
      return;
    } 

    if(data.password.trim() === ""){
      toast.error("Password required");
      return;
    } 

    // form submit for registration
    try{
      const result = await registerUser(data);
      console.log(result);
      toast.success("Registration successful!");
      setData({
        name: "",
        email: "",
        password: "",
      });

      // navigate to login page
      navigate("/login")

    }catch (error) {
      console.error(error);
      toast.error("Registration failed");
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#05060a] text-white">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-250px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[140px]" />

        <div className="absolute bottom-[-200px] left-[-150px] h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[130px]" />

        <div className="absolute right-[-150px] top-1/3 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[130px]" />
      </div>

      {/* Grid Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-10">
        <div className="w-full max-w-md">

          {/* Logo */}
          <div className="mb-7 flex justify-center">
            <div className="group relative">
              <div className="absolute inset-0 rounded-2xl bg-violet-500/40 blur-xl transition-all duration-500 group-hover:bg-violet-500/60" />

              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] shadow-2xl backdrop-blur-xl">
                <Sparkles className="h-7 w-7 text-violet-400" />
              </div>
            </div>
          </div>

          {/* Heading */}
          <div className="mb-7 text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Create your account
            </h1>

            <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-zinc-400">
              Join{" "}
              <span className="font-medium text-violet-400">
                NexusAuth
              </span>{" "}
              and experience a smarter way to secure your applications.
            </p>
          </div>

          {/* Signup Card */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/40 backdrop-blur-2xl sm:p-8">

            {/* Card Top Glow */}
            <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-violet-400 to-transparent" />

            {/* Social Login */}
            <OAuth2Buttons />

            {/* Divider */}
            <div className="my-7 flex items-center gap-4">
              <div className="h-px flex-1 bg-white/10" />

              <span className="text-xs uppercase tracking-widest text-zinc-500">
                Or sign up with email
              </span>

              <div className="h-px flex-1 bg-white/10" />
            </div>

            {/* Form */}
            <form onSubmit={handleFormSubmit} className="space-y-5">

              {/* Name */}
              <div className="space-y-2">
                <Label
                  htmlFor="name"
                  className="text-sm text-zinc-300"
                >
                  Full name
                </Label>

                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />

                  <Input
                    id="name"
                    name="name"
                    value={data.name}
                    onChange={handleInputChange}
                    type="text"
                    placeholder="John Doe"
                    autoComplete="name"
                    required
                    className="h-12 border-white/10 bg-black/20 pl-10 text-white placeholder:text-zinc-600 focus-visible:border-violet-500 focus-visible:ring-violet-500/20"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-sm text-zinc-300"
                >
                  Email address
                </Label>

                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />

                  <Input
                    id="email"
                    name="email"
                    value={data.email}
                    onChange={handleInputChange}
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                    className="h-12 border-white/10 bg-black/20 pl-10 text-white placeholder:text-zinc-600 focus-visible:border-violet-500 focus-visible:ring-violet-500/20"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label
                  htmlFor="password"
                  className="text-sm text-zinc-300"
                >
                  Password
                </Label>

                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />

                  <Input
                    id="password"
                    name="password"
                    value={data.password}
                    onChange={handleInputChange}
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a strong password"
                    autoComplete="new-password"
                    required
                    minLength={8}
                    className="h-12 border-white/10 bg-black/20 pl-10 pr-11 text-white placeholder:text-zinc-600 focus-visible:border-violet-500 focus-visible:ring-violet-500/20"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-500 transition-colors hover:text-zinc-300"
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>

                <p className="text-xs text-zinc-600">
                  Use at least 8 characters with a mix of letters,
                  numbers, and symbols.
                </p>
              </div>

              {/* Terms */}
              <div className="flex items-start gap-2">
                <Checkbox
                  id="terms"
                  required
                  className="mt-0.5 border-white/20 data-[state=checked]:border-violet-500 data-[state=checked]:bg-violet-600"
                />

                <Label
                  htmlFor="terms"
                  className="cursor-pointer text-xs leading-5 text-zinc-500"
                >
                  I agree to the{" "}
                  <button
                    type="button"
                    className="text-violet-400 hover:text-violet-300"
                  >
                    Terms of Service
                  </button>{" "}
                  and{" "}
                  <button
                    type="button"
                    className="text-violet-400 hover:text-violet-300"
                  >
                    Privacy Policy
                  </button>
                  .
                </Label>
              </div>

              {/* Submit */}
              <Button
                type="submit"
                className="group relative h-12 w-full overflow-hidden bg-violet-600 font-semibold text-white shadow-lg shadow-violet-600/20 transition-all hover:bg-violet-500 hover:shadow-violet-500/30"
              >
                <span className="relative z-10">
                  Create account
                </span>

                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </Button>
            </form>

            {/* Login Link */}
            <p className="mt-7 text-center text-sm text-zinc-500">
              Already have an account?{" "}
              <button
                type="button"
                className="font-medium text-violet-400 transition-colors hover:text-violet-300"
              >
                Sign in
              </button>
            </p>
          </div>

          {/* Security Note */}
          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-zinc-600">
            <Lock className="h-3.5 w-3.5" />

            <span>
              Your information is encrypted and securely stored
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

