import { FaGithub } from "react-icons/fa6";
import { Sparkles } from "lucide-react";
import Link from "next/link";
export default function Header() {
    return <div className="bg-black  border-solid border-white flex p-3 justify-between">
                <div className="text-white text-xl font-bold pt-2">
                    Gemini Narrate
                </div>
                <Link href="https://github.com/varsha-coder"  className="inline-block px-4 py-2 bg-blue text-white flex  justify-items-center  font-bold text-center rounded-md  hover:bg-blue-700 transition duration-300 ">
                    <div className="flex display-center alignitems-center pr-2 "><FaGithub className="w-5 h-5 " ></FaGithub></div>
                    <div>Give a Star</div>
                    <div><Sparkles className="ml-2 h-5 w-5" /></div>
                </Link>
            </div>
}

