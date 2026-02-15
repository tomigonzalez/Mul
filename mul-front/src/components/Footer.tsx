import { Instagram, Youtube } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full content-center">
      <div className="max-w-6xl mx-auto flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
        <p className="text-center md:text-left font-medium">Seguinos:</p>

        <ul className="flex flex-col gap-3 text-center md:flex-row md:items-center md:gap-8">
          <li className="flex items-center justify-center gap-2">
            <Instagram size={18} />
            monjeurbanolibre
          </li>

          <li className="hidden md:block">|</li>

          <li className="flex items-center justify-center gap-2">
            <Youtube size={18} />
            MonjeUrbanoLibre
          </li>

          <li className="hidden md:block">|</li>

          <li>www.mul.com</li>

          <li className="hidden md:block">|</li>

          <li>info@mul.com</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
