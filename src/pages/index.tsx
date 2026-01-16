import Image from "next/image";
import {
  Github,
  Webhook,
  Server,
  Cloud,
  CheckCircle,
} from "lucide-react";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 flex items-center justify-center px-6`}
    >
      <main className="w-full max-w-5xl bg-white/95 dark:bg-zinc-900 rounded-3xl shadow-2xl p-12">

        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/next.svg"
            alt="Next.js Logo"
            width={120}
            height={30}
            className="dark:invert"
          />
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-zinc-900 dark:text-white mb-3">
          CI/CD Pipeline on AWS
        </h1>

        <p className="text-center text-lg text-zinc-600 dark:text-zinc-400 mb-12">
          Automated Deployment using GitHub, Webhooks, Jenkins & EC2
        </p>

        {/* CI/CD Steps */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Step 1 */}
          <div className="flex gap-5 p-6 rounded-xl bg-slate-50 dark:bg-zinc-800">
            <Github className="w-10 h-10 text-black dark:text-white" />
            <div>
              <h2 className="text-xl font-semibold">Step 1: GitHub</h2>
              <p className="text-zinc-600 dark:text-zinc-400 mt-1">
                Developer pushes Next.js code to GitHub repository.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-5 p-6 rounded-xl bg-indigo-50 dark:bg-zinc-800">
            <Webhook className="w-10 h-10 text-indigo-600" />
            <div>
              <h2 className="text-xl font-semibold">Step 2: Webhook</h2>
              <p className="text-zinc-600 dark:text-zinc-400 mt-1">
                GitHub webhook triggers Jenkins automatically on every push.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-5 p-6 rounded-xl bg-purple-50 dark:bg-zinc-800">
            <Server className="w-10 h-10 text-purple-600" />
            <div>
              <h2 className="text-xl font-semibold">Step 3: Jenkins</h2>
              <p className="text-zinc-600 dark:text-zinc-400 mt-1">
                Jenkins pulls code, installs dependencies, builds the app.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex gap-5 p-6 rounded-xl bg-emerald-50 dark:bg-zinc-800">
            <Cloud className="w-10 h-10 text-emerald-600" />
            <div>
              <h2 className="text-xl font-semibold">Step 4: AWS EC2</h2>
              <p className="text-zinc-600 dark:text-zinc-400 mt-1">
                Built Next.js app is deployed automatically on EC2 instance.
              </p>
            </div>
          </div>
        </div>

        {/* Success */}
        <div className="mt-12 flex items-center justify-center gap-3 text-emerald-600">
          <CheckCircle className="w-6 h-6" />
          <span className="text-lg font-medium">
            Deployment Successful – Fully Automated 🚀
          </span>
        </div>

        {/* Footer */}
        <p className="mt-10 text-center text-sm text-zinc-500">
          Implemented by <strong>Anil</strong> | GitHub → Jenkins → AWS
        </p>

      </main>
    </div>
  );
}
