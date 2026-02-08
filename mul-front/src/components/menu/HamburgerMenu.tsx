"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import menuItems from "./menuItems";

const MenuHamburguesa = () => {
  const [open, setOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
    setOpenSub(null);
  };

  return (
    <>
      {/* Botón */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden text-3xl z-30"
        aria-label="Abrir menú"
      >
        ☰
      </button>

      {/* Overlay + menú */}
      <div
        className={`fixed inset-0 z-20 md:hidden flex items-center justify-center
        transition-opacity duration-300
        ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" onClick={closeMenu} />

        {/* Menú */}
        <nav className="relative z-30 w-full h-full bg-black/60 backdrop-blur-sm p-6 text-white">
          <div className="flex justify-end mb-4">
            <button onClick={closeMenu} className="text-2xl">
              ✕
            </button>
          </div>

          <ul className="flex flex-col gap-4 text-center">
            {menuItems.map((item) => (
              <li key={item.label}>
                {/* ITEM PRINCIPAL */}
                {item.href && !item.children ? (
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className="block w-full pointer hover:text-yellow-400 font-semibold"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    onClick={() =>
                      setOpenSub(openSub === item.label ? null : item.label)
                    }
                    className="w-full font-semibold cursor-pointer hover:text-yellow-400"
                  >
                    {item.label}
                  </button>
                )}

                {/* SUBMENU */}
                {item.children && (
                  <div
                    className={`overflow-hidden transition-all duration-300 
                    ${
                      openSub === item.label
                        ? "max-h-40 opacity-100 mt-2"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <ul className="flex flex-col gap-2 text-sm opacity-80">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <Link
                            href={child.href}
                            onClick={closeMenu}
                            className="block cursor-pointer hover:text-yellow-400"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default MenuHamburguesa;
