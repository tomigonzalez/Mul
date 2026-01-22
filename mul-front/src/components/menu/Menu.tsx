"use client";
import { useState } from "react";
import MenuItem from "./MenuItem";
import menuItems from "./menuItems";
import MenuHamburguesa from "./HamburgerMenu";

const Menu = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <>
      <div className={`overlay ${activeItem ? "active" : ""}`}></div>

      <nav className="p-4 w-full h-16 relative z-20 flex items-center justify-center">
        {/* Desktop */}
        <ul className="hidden md:flex flex-row gap-6 absolute">
          {menuItems.map((item, index) => (
            <div
              key={item.href || index}
              onMouseEnter={() => setActiveItem(item.label)}
              onMouseLeave={() => setActiveItem(null)}
            >
              <MenuItem item={item} />
            </div>
          ))}
        </ul>

        {/* Mobilee */}
        <div className="absolute right-4 md:hidden">
          <MenuHamburguesa />
        </div>
      </nav>
    </>
  );
};

export default Menu;
