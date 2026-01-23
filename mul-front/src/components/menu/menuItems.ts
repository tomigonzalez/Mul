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
    children: [
      { label: "Sesiones AUA", href: "/sesiones-aua" },
      { label: "Magia sanadora", href: "/magia-sanadora" },
      { label: "Manifiesto Personalizado", href: "/manifiesto-personalizado" },
      { label: "Cartografía del Síntoma", href: "/cartografia-sintoma" },
      { label: "Ritual Matutino Personalizado", href: "/ritual-personalizado" },
      { label: "Audios Subliminales Personalizados", href: "/audios-personalizados" },
    
    ]
  },
  {
    id: 3,
    label: "Productos",
    href: "/a",
   children: [
      { label: "Talismanes del Monje", href: "/talismanes-monje" },
      { label: "Porta Sahumerios Invertidos", href: "/porta-sahumerios" }
    ]
  },
  {
    id: 4,
    label: "Manifiesto del Monje",
    href: "/manifiesto-monje",
   
  },
  {
    id: 5,
    label: "Novedades",
    href: "/novedades",
   
  },
  {
    id: 6,
    label: "Redes & Contacto",
    href: "/redes-contacto",
  
  },
];

export default menuItems;
