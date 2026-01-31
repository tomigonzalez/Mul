import Link from "next/link";
import React from "react";

const MagiaSanadoraCard: React.FC = () => {
  return (
    <div className="sm:w-80 w-66 rounded-lg border-2 border-neutral-600 p-3 text-center">
      <h3 className="mb-4 text-base font-bold">Magia sanadora</h3>

      <p className="mt-4 ">
        Rituales energéticos a distancia con intención puras
      </p>

      <Link href="#" className="mt-4 inline-block font-bold ">
        Ver más
      </Link>
    </div>
  );
};

export default MagiaSanadoraCard;
