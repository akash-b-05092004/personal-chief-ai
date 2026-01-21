import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">
        Personal Chief AI
      </h1>

      <p className="text-gray-600 mb-6">
        Your agentic AI chief of staff
      </p>

      <Link
        href="/chat"
        className="px-6 py-3 bg-black text-white rounded-lg"
      >
        Start Chat
      </Link>
    </main>
  );
}
