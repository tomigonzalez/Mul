"use client";
import { useState } from "react";
import MenuItem from "./MenuItem";
import menuItems from "./menuItems";

const MenuHamburguesa = () => {
  const [open, setOpen] = useState(false);

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

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 z-20 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Menú mobile */}
      <nav
        className={`fixed top-0 right-0 h-full w-64 bg-black text-white z-30
        transform transition-transform duration-300 md:hidden
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setOpen(false)} className="text-2xl">
            ✕
          </button>
        </div>

        <ul className="flex flex-col gap-6 px-6">
          {menuItems.map((item, index) => (
            <li key={item.href || index} onClick={() => setOpen(false)}>
              <MenuItem item={item} />
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default MenuHamburguesa;
