import Image from "next/image";
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
      className={`${geistSans.className} ${geistMono.className} min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600`}
    >
      <main className="w-full max-w-4xl bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl p-12 text-center">
        <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={120}
          height={30}
          className="mx-auto mb-6 dark:invert"
        />

        <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
          CI/CD Pipeline on AWS
        </h1>

        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-10">
          Automated deployment using <strong>GitHub, Webhooks, Jenkins & EC2</strong>
        </p>

        <div className="grid gap-6 text-left">
          <div className="bg-indigo-50 dark:bg-zinc-800 p-4 rounded-lg">
            <h2 className="font-semibold text-indigo-700 dark:text-indigo-400">
              Step 1: GitHub
            </h2>
            <p>Push Next.js code to GitHub repository.</p>
          </div>

          <div className="bg-purple-50 dark:bg-zinc-800 p-4 rounded-lg">
            <h2 className="font-semibold text-purple-700 dark:text-purple-400">
              Step 2: Webhook
            </h2>
            <p>Webhook triggers Jenkins on every git push.</p>
          </div>

          <div className="bg-pink-50 dark:bg-zinc-800 p-4 rounded-lg">
            <h2 className="font-semibold text-pink-700 dark:text-pink-400">
              Step 3: Jenkins
            </h2>
            <p>Build, test & deploy using Jenkins pipeline.</p>
          </div>

          <div className="bg-green-50 dark:bg-zinc-800 p-4 rounded-lg">
            <h2 className="font-semibold text-green-700 dark:text-green-400">
              Step 4: EC2 (AWS)
            </h2>
            <p>Application deployed automatically on EC2 instance.</p>
          </div>
        </div>

        <p className="mt-10 text-sm text-zinc-500">
          Built & Deployed by <strong>Anil</strong> 🚀
        </p>
      </main>
    </div>
  );
}
