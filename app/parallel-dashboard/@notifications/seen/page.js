import Link from "next/link";

const page = () => {
   return (
      <div className="text-xl p-4 row-span-2 border-2 border-green-400 bg-green-100 rounded h-[745px] flex  items-center justify-center">
      <span> Here is All Notifications</span>
      <Link  className="p-3 bg-gray-500 rounded"  href="/parallel-dashboard">Back</Link>
    </div>
   );
};

export default page;