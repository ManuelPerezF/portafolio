'use client';
import Image from "next/image";
import InfoCard from "./components/infoCard";


export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center bg-zinc-950">
      <div className="grid grid-cols-5 grid-rows-3 gap-3 w-full h-full p-20">

    
        <div className="col-span-3 row-span-2 rounded-2xl bg-zinc-900 flex items-center justify-center">
          <InfoCard />
        </div>
        
        <div className="col-span-2 row-span-1 rounded-2xl bg-blue-500"></div>
        <div className="col-span-2 row-span-1 rounded-2xl bg-green-500"></div>
        <div className="col-span-2 row-span-1 rounded-2xl bg-red-500"></div>
        <div className="col-span-1 row-span-1 rounded-2xl bg-purple-500"></div>
        <div className="col-span-1 row-span-1 rounded-2xl bg-pink-500"></div>
        <div className="col-span-1 row-span-1 rounded-2xl bg-yellow-500"></div>
      </div>
      
    </div>
  );
}