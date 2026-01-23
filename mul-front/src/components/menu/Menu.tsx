"use client";

import { useState } from "react";
import MenuItem from "./MenuItem";
import menuItems from "./menuItems";
import MenuHamburguesa from "./HamburgerMenu";

const Menu = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <>
      {/* Overlay (velo) */}
      <div
        className={`fixed inset-0 z-10 bg-black transition-opacity duration-300 ${
          activeItem ? "opacity-50" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Menu */}
      <nav className="relative z-20 flex h-16 w-full items-center justify-between px-4 md:justify-center">
        {/* Desktop */}
        <ul className="hidden md:flex gap-6">
          {menuItems.map((item, index) => (
            <li
              key={item.href || index}
              onMouseEnter={() => setActiveItem(item.label)}
              onMouseLeave={() => setActiveItem(null)}
            >
              <MenuItem item={item} />
            </li>
          ))}
        </ul>

        {/* Mobile */}
        <div className="md:hidden w-full text-center">
          <MenuHamburguesa />
        </div>
      </nav>
    </>
  );
};

export default Menu;
