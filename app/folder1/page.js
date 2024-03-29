import Link from "next/link";

const Folder1 = () => {
   return (
      <div>
         Folder 1
         <hr/> <br/> 
         <Link className="p-2 bg-red-400 m-2" href="/folder1/folder2">Go Folder 2</Link>
         <Link className="p-2 bg-red-400 m-2" href="/folder3">Go Folder 3</Link>
         <Link  className="p-2 bg-green-400 m-3"  href="/folder4">Go Folder 4</Link>
      </div>
   );
};

export default Folder1;