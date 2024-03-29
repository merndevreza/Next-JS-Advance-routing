import { wait } from "@/lib/wait";

const QuizPage = async() => {
   await wait(5000)
   return (
      <div className="text-xl p-4 border-2 border-green-400 bg-red-100 rounded h-[360px] flex  items-center justify-center">
         Quiz Slot
      </div>
   );
};

export default QuizPage;