import Image from "next/image";
import InfoCard from "./components/infoCard";

export default function Home() {
  return (
    <div className="grid grid-cols-4 grid-rows-5 gap-2 min-h-screen p-12">
      <div className="col-span-3 row-span-3 bg-zinc-800 rounded-2xl text-sm p-4">
        <InfoCard />
        </div>
      <div className="row-span-3 col-start-4 bg-zinc-800 rounded-2xl text-sm p-4">Skills</div>
      <div className="row-span-2 row-start-4 bg-zinc-800 rounded-2xl text-sm p-4">Proyectos</div>
      <div className="row-span-2 row-start-4 bg-zinc-800 rounded-2xl text-sm p-4">Contactos</div>
      <div className="col-span-2 row-span-2 row-start-4 bg-zinc-800 rounded-2xl text-sm p-4">Github</div>
    </div>
  );
}