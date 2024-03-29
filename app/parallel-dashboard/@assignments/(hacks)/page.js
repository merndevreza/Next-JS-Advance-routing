import { wait } from "@/lib/wait";

const assignmentPage = async() => {
   await wait(3000)
   return (
      <div className="text-xl p-4 border-2 border-green-400 bg-yellow-100 rounded h-[360px] flex  items-center justify-center">
         Assignments Slot
      </div>
   );
};

export default assignmentPage;