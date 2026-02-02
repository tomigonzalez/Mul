import Image from "next/image";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-white min-h-screen flex flex-col">
      {/* HEADER */}
      <div className="bg-black w-full h-40 flex justify-between items-center px-10 shrink-0">
        <Link href="/" className="text-white">
          Volver
        </Link>
        <Image
          src="/logoLetras.png"
          alt="Logo"
          width={300}
          height={100}
          priority
        />
      </div>

      {/* CONTENEDOR PRINCIPAL */}
      <article className="relative bg-white w-full flex-1">
        {/* WATERMARK STICKY */}

        <div className="sticky top-40 left-0 w-full h-[calc(100vh-160px-40px)] flex items-center justify-center pointer-events-none z-0 overflow-hidden">
          <Image
            src="/LogoTriangulo.svg"
            alt="Watermark"
            width={400}
            height={400}
            className="opacity-5"
          />
        </div>

        {/* CHILDREN (Margen negativo para subir el contenido sobre la marca de agua) */}
        <div className="relative z-10 w-full -mt-[calc(100vh-160px-40px)]">
          {children}
        </div>
      </article>

      {/* FOOTER */}
      <div className="bg-black w-full h-10 px-10 flex shrink-0"></div>
    </section>
  );
}
