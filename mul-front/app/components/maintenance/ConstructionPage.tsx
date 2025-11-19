import LogoTriangulo from "./LogoTriangulo";
import { MessageCircle } from "lucide-react";

const ConstructionPage = () => {
  return (
    <div className="w-full min-h-screen overflow-hidden md:overflow-auto bg-black text-white flex flex-col items-center  gap-6 justify-start pt-12 md:pt-10">
      <div className="flex flex-col items-center text-center max-w-lg">
        <LogoTriangulo width={300} height={340} />
        <h1 className="text-xl md:text-3xl font-bold mt-8 mb-3 tracking-tight">
          ¡Estamos construyendo nuestra web!
        </h1>
        <p className="text-lg md:text-xl italic text-gray-400">
          Regresa pronto.
        </p>
      </div>

      {/* Botón WhatsApp flotante en esquina (reemplaza el número abajo sin signos ni espacios) */}
      {/* Ejemplo: href="https://wa.me/5491123456789" */}
      <a
        href="https://wa.me/5490000000000"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed  bottom-6 right-6 md:bottom-8 md:right-8 bg-green-500 hover:bg-green-600 text-black p-4 rounded-full shadow-xl flex items-center justify-center transition-all duration-300"
      >
        Contactame
        <MessageCircle className="w-7 h-7 ml-4" />
      </a>
    </div>
  );
};

export default ConstructionPage;
