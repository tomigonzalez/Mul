import Image from "next/image";
import "../globals.css";
import SincronarioCard from "@/components/SincronarioCard";
import Menu from "@/components/menu/Menu";
import MagiaSanadoraCard from "@/components/MagiaSanadoraCard";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-black font-sans justify-center flex flex-col  sm:pr-10 sm:pl-10">
        <Menu />
        <div className="w-full bg-white dark:bg-black flex flex-col items-center">
          {/* HERO */}
          <section className="w-full sm:min-h-[55vh] min-h-[40vh] flex flex-col items-center justify-center text-center sm:px-4 px-0">
            <Image
              src="/logoLetras.png"
              width={600}
              height={300}
              alt="Logo"
              className="w-[350px] sm:w-[400px] md:w-[500px] h-auto"
            />
            <h4 className="mt-2 text-sm sm:text-xl">
              Silencio, presencia y propósito
            </h4>
          </section>

          {/* CARDS */}
          <section className="w-full max-w-5xl px-4 pb-10 ">
            <div className="flex flex-col gap-6 items-center sm:flex-row sm:justify-around">
              <SincronarioCard />
              <MagiaSanadoraCard />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
