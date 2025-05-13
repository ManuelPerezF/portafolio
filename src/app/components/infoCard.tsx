'use client';
import Typewriter from "typewriter-effect";

export default function InfoCard() {
  return (
    <div className="bg-zinc-900 rounded-2xl w-full max-w-4xl mx-auto shadow-xl space-y-8 p-6">
      {/* Encabezado */}
      <div className="flex rows-1 items-center gap-4">
        {/* Cuadro con la foto */}
        <div>
          <img
            src="/perfil.jpg" // Poner foto
            alt="Foto de perfil"
            className="w-24 h-24 rounded-2xl border-4 border-violet-500 shadow-md"
          />
        </div>

        {/* Cuadro con el nombre y la disponibilidad */}
        <div className="">
          <div className="bg-zinc-800 text-xs font-medium px-4 py-1 rounded-full mb-2 text-gray-400 flex justify-center items-center">
            Disponible para trabajar
          </div>
          <h1 className="text-3xl font-bold text-white ">Manuel Perez</h1>
          <p className="text-lg">
            <span className="text-grey-300 inline-flex items-center">
              I'm a&nbsp;
              <span>
                <Typewriter
                  options={{
                    strings: ["Developer", "Student"],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                    delay: 75,
                    wrapperClassName: "text-violet-300"
                  }}
                />
              </span>
            </span>
          </p>
        </div>
      </div>
 
      {/* Información Personal */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm text-zinc-300">
        <div className="flex items-center gap-3">
          <span className="text-violet-400 text-lg">🎓</span>
          <p>Tec de Monterrey - 4° Semestre ITC</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-violet-400 text-lg">🗣️</span>
          <p>Español e Inglés</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-violet-400 text-lg">🎂</span>
          <p>20 años</p>
        </div>
      </div>
    </div>
  );
}