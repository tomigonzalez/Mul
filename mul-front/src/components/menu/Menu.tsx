"use client";
import { useState } from "react";
import MenuItem from "./MenuItem";
import menuItems from "./menuItems";

const Menu = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <>
      <div className={`overlay ${activeItem ? "active" : ""}`}></div>

      <nav className="p-4 w-full h-16 relative z-20 flex items-center justify-center">
        <ul className="flex flex-row gap-6 absolute">
          {menuItems.map((item, index) => (
            <div
              key={item.href || index}
              onMouseEnter={() => setActiveItem(item.label)} // ya no revisamos children
              onMouseLeave={() => setActiveItem(null)}
            >
              <MenuItem item={item} />
            </div>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Menu;
