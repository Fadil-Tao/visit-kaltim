import { Search } from "lucide-react";
// ga dipake 
export default function SearchDestination() {
  return (
    <div className="relative w-full  mx-auto rounded-full bg-zinc-800 shadow-md">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
      <input
        type="text"
        placeholder="Search destinations..."
        className="w-full rounded-full border-none text-2xl bg-zinc-800 px-12 py-3  text-white placeholder-gray-400 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
