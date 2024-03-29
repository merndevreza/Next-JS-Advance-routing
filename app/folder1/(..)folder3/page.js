import Link from "next/link";

const Folder2 = () => {
   return (
      <div>
         This is Intercepted Folder 3
         <hr/> <br/> 
         <Link  className="p-2 bg-green-400 ml-2"  href="/folder1">Go Folder 1</Link>
      </div>
   );
};

export default Folder2;