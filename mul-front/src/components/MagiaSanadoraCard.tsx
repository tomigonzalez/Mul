import Link from "next/link";
import React from "react";

type Props = {};

const MagiaSanadoraCard: React.FC<Props> = () => {
  return (
    <div className="w-80 rounded-lg border-2 border-neutral-600 p-3 text-center">
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
