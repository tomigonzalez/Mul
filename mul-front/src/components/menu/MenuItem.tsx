import Link from "next/link";
import "./menu.css";

type itemData = {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
};

const MenuItem = ({ item }: { item: itemData }) => {
  const { label, href, children } = item;

  return (
    <li
      className={`menu-item relative pr-4 pl-4 ${
        children ? "has-children" : ""
      }`}
      style={
        {
          "--submenu-height": children ? `${children.length * 2.2}rem` : "0rem",
        } as React.CSSProperties
      }
    >
      <Link
        className="menu-link border-b-4 pl-2 pr-4 pb-[0.2px] text-xl"
        href={href ?? "#"}
      >
        {label}
      </Link>

      {children && (
        <ul className="submenu">
          {children.map((child) => (
            <li key={child.href}>
              <Link href={child.href} className="text-xl hover:text-yellow-200">
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default MenuItem;
