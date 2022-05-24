import Image from "next/image";
import { GravataCard } from "typings/card-gravata";
import bgGravata1 from "/public/icons/gravata1.svg";
import bgGravata2 from "/public/icons/gravata2.svg";
import bgGravata3 from "/public/icons/gravata3.svg";
import bgGravata4 from "/public/icons/gravata4.svg";

const bgGravata = [bgGravata1, bgGravata2, bgGravata3, bgGravata4];

export function CardGravata({ descricao, titulo, index }: GravataCard) {
  return (
    <div className="sm:w-full  flex flex-row relative z-50 justify-center items-center">
      <Image src={bgGravata[index]} alt={"Gravata"} className="relative z-20" />
      <div className="w-[350px] sm:w-[250px] whitespace-pre-line h-64 break-normal gap-3 overflow-hidden flex border-white border-8 pl-10 flex-col relative z-10 -ml-10 bg-blue-100 shadow-lg rounded-3xl p-3">
        <span className="font-bold  overflow-hidden text-pink-theme text-lg">
          {titulo}
        </span>
        <span className="font-medium text-blue-theme">{descricao}</span>
      </div>
    </div>
  );
}
