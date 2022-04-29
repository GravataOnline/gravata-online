import Image from "next/image";
import { GravataCard } from "typings/card-gravata";
import bgGravata from "/public/icons/gravata.svg";

export function CardGravata({ descricao, titulo }: GravataCard) {
  return (
    <div className="sm:w-full  flex flex-row relative z-50 justify-center items-center">
      <Image src={bgGravata} alt={"Gravata"} className="relative z-20" />
      <div className="w-[350px] sm:w-[250px] whitespace-pre-line h-64 break-normal gap-3 overflow-hidden flex border-white border-8 pl-10 flex-col relative z-10 -ml-10 bg-blue-100 shadow-lg rounded-3xl p-3">
        <span className="font-bold  overflow-hidden text-pink-theme text-lg">
          {titulo}
        </span>
        <span className="font-medium text-blue-theme">{descricao}</span>
      </div>
    </div>
  );
}
