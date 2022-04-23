import Image from "next/image";
import { Imagem } from "img/images";
import { useState } from "react";

const DepoimentoNoivos = [
  {
    img: Imagem.Noivo1,
    depoimento:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nulla repellendus ea. Sed sequi eligendi numquam. Ducimus animi non exercitationem labore temporibus expedita delectus obcaecati alias ipsum atque molestias repudiandae ",
  },
  {
    img: Imagem.Noivo2,
    depoimento:
      "facilis nesciunt, quasi voluptatem corrupti. Harum eius et impedit alias accusantium dolorem libero dolor, maiores earum odio! Quo at,quibusdam harum odio animi soluta suscipit consequatur accusamus autem quam beatae excepturi laudantiu",
  },
  {
    img: Imagem.Noivo3,
    depoimento:
      " m eius nostrum nulla sint iure nam ex accusantium. Itaque qui cumquas. Consequuntur, nulla perspiciatis quaerat soluta molestiae minus sapiente beatae nam placeat blanditiis labore, magni, laboriosam at?",
  },
];

export function Carrossel() {
  const [imagemAtual, setImagemAtual] = useState<number>(0);

  function handleChangeCarroussel(index: number) {
    setImagemAtual(index);
  }
  return (
    <div className="w-full mt-10 grid grid-cols-12 select-none gap-4 justify-center relative">
      <div className="col-span-12 my-4 flex flex-row justify-center">
        <div className="rounded-full border-8 border-white shadow-3xl-blue w-[200px] h-[200px]">
          <Image
            src={DepoimentoNoivos[imagemAtual].img}
            alt=""
            width={200}
            height={200}
            objectFit="cover"
            className="rounded-full"
            style={{ border: "10px solid black" }}
          />
        </div>
      </div>
      <div className="col-span-3 flex flex-col justify-start items-end px-14">
        <Image src={Imagem.AspasInicio} alt="Imagem de Asoas" />
      </div>
      <div className="col-span-6 text-center h-48 flex items-center overflow-hidden justify-center ">
        <span className="indent-8 italic text-2xl text-blue-theme ">
          {DepoimentoNoivos[imagemAtual].depoimento}
        </span>
      </div>
      <div className="col-span-3 flex flex-col justify-end items-start px-14">
        <Image src={Imagem.AspasFim} alt="Imagem de Asoas" />
      </div>
      <div className="col-span-12 pb-4 gap-3 flex flex-row justify-center">
        {DepoimentoNoivos.map((x: any, index: number) => (
          <button
            className={`w-4 h-4 ${
              index === imagemAtual ? "bg-pink-theme" : "bg-blue-theme"
            } rounded-full`}
            onClick={() => handleChangeCarroussel(index)}
          />
        ))}
      </div>
      <div className="absolute top-1 transform -translate-y-1/2 bg-red-400 w-full"></div>
    </div>
  );
}
