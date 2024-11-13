import React, { useState } from "react";
import { Lock, LogIn, Mail, User } from "lucide-react";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <main className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full lg:max-w-4xl md:max-w-2xl sm:max-w-lg bg-white rounded-lg shadow-lg p-8 sm:p-10">
        <div className="flex items-center justify-center mb-6">
          <User className="w-8 h-8 mr-2 text-blue-500" />
          <h3 className="text-2xl font-bold">Sign in</h3>
        </div>
        <p className="text-gray-600 mb-6">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              className="input-text pl-10"
              placeholder="Email Address"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="password"
              className="input-text pl-10"
              placeholder="Password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-between items-center">
            <div className="reminder">
              <a href="#" className="text-blue-500 hover:underline">
                Forgot your password?
              </a>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center"
            >
              Sign in <LogIn className="ml-2 w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;