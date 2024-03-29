import { wait } from "@/lib/wait";

const page = async() => {
   await wait(2000)
   return (
      <div className="text-center mt-5 text-red-600 text-2xl">
         Dashboard
      </div>
   );
};

export default page;