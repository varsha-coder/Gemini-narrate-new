"use client"
import { useState } from "react";
import Markdown from "react-markdown";
import { Check, Copy } from "lucide-react";
import copy from "copy-to-clipboard";
interface ResultSectionProps{
    text:string;
}

export default function Outputsection({text}:ResultSectionProps){
    const [copying,setCopying]=useState(false);
    const [displayText,setDisplayText]=useState("");
    const [completedTyping,setCompletedTyping]=useState(false);
    
    
    const handleCopy=()=>{
      copy(text);
      setCopying(true);
      setTimeout(()=>{
        setCopying(false);
      },800)
    }
   return (
   
     <div className="bg-secondary/20 text-neutral-100 mt-10 rounded-xl px-4 py-5 relative">
     {text?  <div className="mb-3">
        <div className="flex flex-row justify-end items-center">
{ copying ?
  <div className="flex flex-row text-sm sm:text-base">
              <Check className="w-4 h-4 mr-2 mt-1" />
              Copied
            </div>
: <div
className="flex flex-row items-center cursor-pointer text-sm sm:text-base"
onClick={handleCopy}
>
<Copy className="w-4 h-4 mr-2" />
Copy
</div>
}

          </div>

      </div>:<div></div>}
      
      { text ? <div className="text-sm sm:text-base">
        <Markdown>{text}</Markdown>
</div>:<div></div>}
   
    </div>
   
   )
}


{/* <div className="mb-3">
<div className="flex flex-row justify-end items-center">
   {copying ? 
    <div className="flex flex-row text-sm sm:text-base">
        <Check className="w-4 h-4 mr-2 mt-1"/>
        copied
       <div/> 
   : <div
  className="flex flex-row items-center cursor-pointer text-sm sm:text-base"
  onClick={handleCopy}
>
  <Copy className="w-4 h-4 mr-2" />
  Copy
</div>} 
 

</div>

</div> */}

{/* <div>
    {text ? <div className="bg-secondary/20 text-neutral-100 mt-10 rounded-xl px-12 py-8 relative">
               <div className="">
                  {text}
               </div>
          </div>: <div></div>}
   </div> */}