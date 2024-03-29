import Link from "next/link";

const Folder2 = () => {
   return (
      <div>
         This is Folder 2
         <Link  className="p-2 bg-green-400 m-3"  href="/folder1">Go Folder 1</Link>
      </div>
   );
};

export default Folder2;