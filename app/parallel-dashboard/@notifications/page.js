// import { wait } from "@/lib/wait";
import Link from "next/link";

const notificationsPage = async () => {
//   await wait(4000);
  // throw new Error("An error occurred in Notification slot")
  return (
    <div className="text-xl p-4 row-span-2 border-2 border-green-400 bg-green-100 rounded h-[745px] flex  items-center justify-center">
      <span> Notifications Slot</span>
      <Link className="p-3 bg-gray-500 rounded" href="/parallel-dashboard/seen">See All</Link>
    </div>
  );
};

export default notificationsPage;
