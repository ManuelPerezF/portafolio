"use client";
import {
  AcademicCapIcon,
  GlobeAltIcon,
  CakeIcon,
  GlobeAmericasIcon,
  LanguageIcon,
} from "@heroicons/react/24/outline";
import Typewriter from "typewriter-effect";
import InfoItem from "./infoItems";

export default function InfoCard() {
  return (
    <div
      className="rounded-2xl mx-auto space-y-12 p-6 w-full"
      style={{ width: "900px" }}
    >
      {/* Encabezado */}
      <div className="flex rows-1 items-center gap-4">
        {/* Cuadro con la foto */}
        <div>
          <img
            src="/perfil.jpg" // Poner foto
            alt="Foto de perfil"
            className="w-24 h-24 rounded-2xl border-4 border-violet-300 shadow-md"
          />
        </div>

        {/* Cuadro con el nombre y la disponibilidad */}
        <div>
          <div className="bg-zinc-800 text-xs font-medium px-4 py-1 rounded-full mb-2 text-gray-400 flex justify-center items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-green-600"></span>
            </span>
            Disponible para trabajar
          </div>
          <h1 className="text-3xl font-bold text-white">Manuel Perez</h1>
          <div className="text-lg text-grey-300 inline-flex items-center">
            <span>I'm a&nbsp;</span>
            <span>
              <Typewriter
                options={{
                  strings: ["Developer", "Student"],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  delay: 75,
                  wrapperClassName: "text-violet-300",
                }}
              />
            </span>
          </div>
        </div>
      </div>

      {/* Información Personal */}
      <div className="grid grid-cols-3 gap-4 bg-zinc-800 rounded-2xl p-4">
        <InfoItem
          icon={<AcademicCapIcon className="h-6 w-6 text-violet-400" />}
          text="Tec de Monterrey"
        />
        <InfoItem
          icon={<LanguageIcon className="h-6 w-6 text-violet-400" />}
          text="Español / Inglés"
        />
        <InfoItem
          icon={<CakeIcon className="h-6 w-6 text-violet-400" />}
          text="20 años"
        />
        <InfoItem
          icon={<GlobeAmericasIcon className="h-6 w-6 text-violet-400" />}
          text="México"
        />
      </div>
    </div>
  );
}
