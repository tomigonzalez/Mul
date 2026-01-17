import Image from "next/image";
import LogoTriangulo from "./LogoTriangulo";
import { MessageCircle } from "lucide-react";
// import { MessageCircle } from "lucide-react"; // Ya no es necesario para el botón flotante

const ConstructionPage = () => {
  // En un entorno de desarrollo real, el código QR (que es una imagen en el diseño final)
  // debería ser cargado como un archivo, por ejemplo, '/qr-whatsapp.png'
  // Si no tienes el QR como archivo de imagen, este código usará el texto de la URL de WhatsApp.
  // Asumiendo que 'image_8212eb.png' es la imagen que contiene el QR.
  // Pero para replicar el *diseño* lo haremos usando la estructura.

  return (
    <div className="w-full min-h-screen bg-black text-white flex flex-col items-center justify-start py-8 px-4 md:px-10">
      <div className="w-full flex justify-end mb-10 md:mb-10">
        <Image
          src={"/logoLetras.png"}
          width={500}
          height={540}
          alt="Monje Urbano"
          className="w-auto max-w-full h-auto"
        />
      </div>

      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
        <div className="shrink-0 relative bottom-12 hidden md:block">
          <LogoTriangulo width={250} height={280} />
        </div>

        <div className="flex flex-col gap-12 text-center md:text-left justify-center md:justify-start w-full">
          <p className="text-xl md:text-3xl font-semibold text-center mb-8 font-pompier-custom leading-relaxed">
            En un mundo que te grita quién deberías ser, el silencio te recuerda
            quién ya eres. Estamos levantando el templo digital del Monje.
          </p>

          <div className="flex flex-col ml:0 md:ml-20 md:flex-row items-center gap-6 md:gap-8 mt-6 max-w-xl">
            <div className="shrink-0 w-32 h-32  bg-white p-1 rounded-xl">
              <Image
                src="/qrCode.png"
                width={120}
                height={120}
                alt="Código QR de WhatsApp"
              />
            </div>

            <p className="text-2xl font-pompier-custom">
              Mientras el templo del Monje toma forma, podés contactarte y
              visitar el catálogo en WhatsApp.
            </p>
          </div>
        </div>
      </div>

      <a
        href="https://wa.me/5492915235363"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 bg-green-500 hover:bg-green-600 text-black p-4 rounded-full shadow-xl flex items-center justify-center transition-all duration-300"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
};

export default ConstructionPage;
