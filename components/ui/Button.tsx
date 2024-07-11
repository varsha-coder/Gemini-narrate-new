import Link from "next/link";
import { Sparkles } from "lucide-react";
export default  function Button({label,link}:any){
    return (
        <Link  href={link} className="inline-block px-4 py-2 bg-blue text-white flex  justify-items-center  font-bold text-center rounded hover:bg-blue-700 transition duration-300 ">

          <div>  {label}</div>
          <div><Sparkles className="ml-2 h-5 w-5" /></div>
        </Link>
    )
}