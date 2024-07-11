import Header from "@/components/header";
import '../app/globals.css'
import Playgroundsection from "@/components/Playgroundsection";


export default function Home() {
  return (
    <div>
      <div >
        <Header></Header>
      </div>
      <div className="bg-black w-full h-full h-screen">
        <Playgroundsection></Playgroundsection>
      </div>
      <div>

      </div>
    </div>

  );
}


