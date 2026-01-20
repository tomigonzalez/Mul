import Image from "next/image";
import "../globals.css";
import SincronarioCard from "@/components/SincronarioCard";
import Menu from "@/components/menu/Menu";

export default function Home() {
  return (
    <>
      <Menu />
      <main className="flex  items-center justify-center  font-sans bg-black">
        <div className="flex  w-full flex-col items-center justify-between  bg-white dark:bg-black sm:items-start">
          <div className="w-full h-[55vh] items-center place-items-center content-center">
            <Image src="/logo1.png" width={600} height={300} alt={""} />
            <h4>Silencio,presencia y proposito</h4>
          </div>
          <div className="w-full flex justify-around ">
            <div className="flex  z-30">
              <SincronarioCard />
            </div>
            <div className="flex ">
              <div className="bg-amber-500 w-60 h-42"></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
