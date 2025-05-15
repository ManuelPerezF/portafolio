import { ReactElement } from "react";

interface InfoItemProps {
  icon: ReactElement;
  text: string;
}

export default function InfoItem({ icon, text }: InfoItemProps) {
  return (
    <div className="flex items-center justify-center gap-3 bg-zinc-700 rounded-full p-2">
      <span> {icon} </span>
      <p> {text} </p>
    </div>
  );
}
