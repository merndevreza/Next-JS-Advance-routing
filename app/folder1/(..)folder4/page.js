import Link from "next/link";

const Folder4 = () => {
   return (
      <div>
         This is Intercepted Folder 4
         <hr/> <br/> 
         <Link  className="p-2 bg-green-400 m-3"  href="/folder1/folder2">Go Folder 2</Link>
      </div>
   );
};

export default Folder4;