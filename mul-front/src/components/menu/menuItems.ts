// menu-items.js

const menuItems = [
  {
    id: 1,
    label: "Inicio",
    href: "/",
    
  },
  {
    id: 2,
    label: "Servicios",
    href: "/dashboard",
    
  },
  {
    id: 3,
    label: "Productos",
    href: "/a",
   children: [
      { label: "Magia sanadora", href: "/magia-sanadora" },
      { label: "Dashboard", href: "/dashboard" },
      { label: "Perfil", href: "/profile" }
    ]
  },
  {
    id: 4,
    label: "Manifiesto del Monje",
    href: "/d",
   children: [
      { label: "Inicio", href: "/" },
      { label: "Dashboard", href: "/dashboard" },
      { label: "Perfil", href: "/profile" }
    ]
  },
  {
    id: 5,
    label: "Novedades",
    href: "/s",
   children: [
      { label: "Inicio", href: "/" },
      { label: "Dashboard", href: "/dashboard" },
      { label: "Perfil", href: "/profile" }
    ]
  },
  {
    id: 6,
    label: "Redes",
    href: "/g",
   children: [
      { label: "Inicio", href: "/" },
      { label: "Dashboard", href: "/dashboard" },
      { label: "Perfil", href: "/profile" }
    ]
  },
];

export default menuItems;
