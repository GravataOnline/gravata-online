import Image from "next/image";
import MenuHamburguer from "/public/icons/menu-hamburger.svg";
import { ButtonOutline, ButtonYellow } from "components/Button";
import { CardGravata } from "components/CardGravata/CardGravata";
import { GravataCard } from "typings/card-gravata";
import { dadosGravatas } from "utils/data-gravatas";
import { Imagem } from "img/images";

export function IndexPage() {
  return (
    <div className="bg-letras bg-repeat-y">
      <section className="w-full">
        <div className="relative">
          <div className="absolute z-20">
            <Image
              src={Imagem.FundoAzulClaro}
              alt="Imagem de fundo Azul Claro"
            />
          </div>
          <div className="relative z-10">
            <Image
              src={Imagem.Casamento}
              alt="Imagem de Casamento"
              className="h-[500px]"
            />
          </div>
          <div className="absolute top-0 w-full">
            <Image src={Imagem.FundoRosa} alt="Imagem de fundo Rosa Claro" />
          </div>
          <div className="absolute top-0  w-full">
            <Image src={Imagem.FundoAzul} alt="Imagem de fundo azul escuro" />
          </div>
          <div className="flex flex-col top-0 z-50 ">
            <div className="flex w-full p-10  border-none justify-between flex-row absolute top-0 z-50">
              <Image
                src={MenuHamburguer}
                alt="Menu Hamburguer"
                className="cursor-pointer"
              />
              <p className="uppercase tracking-wider font-extralight text-lg text-white ">
                <a href="">Entrar</a> | <a href="">Cadastrar</a>
              </p>
            </div>
            <div className="flex w-full justify-center flex-col items-center absolute top-28 z-50">
              <Image
                src={Imagem.Logo}
                alt="Logo"
                className="Logo Gravatas Online"
              />
              <div className="mt-12 flex flex-col text-white tracking-wide text-center  ">
                <div className="flex flex-col font-bold text-3xl">
                  <span>ARRECADE DINHEIRO</span>
                  <span>PARA SEU CASAMENTO</span>
                </div>
                <span className="text-pink-theme text-xl mt-7">
                  Seu casamento merece ser completo
                </span>
              </div>
              <div className="flex flex-row mt-12 gap-3">
                <ButtonOutline>Tá, mas como funciona?</ButtonOutline>
                <ButtonYellow>Quero arrecadar</ButtonYellow>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="relative">
          <div className="flex flex-col w-auto mx-12 my-6">
            <span className="font-bold text-blue-theme text-3xl">
              Como Funciona?
            </span>
            <span className="tracking-wider mb-3 text-pink-theme font-normal text-2xl">
              Veja como é fácil utilizar o Gravata Online para você <br />
              ter um casamento suprido e completo.
            </span>
          </div>
          <div className="grid grid-cols-12 gap-2 justify-center items-center">
            {dadosGravatas.map((x: GravataCard) => (
              <div className="col-span-12 xl:col-span-3 sm:col-span-12  lg:col-span-6  xl:odd:mb-28">
                <CardGravata
                  descricao={x.descricao}
                  titulo={x.titulo}
                  key={x.descricao}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative">
        <Image src={Imagem.Padrinhos} alt="Imagem Padrinhos" />
      </section>
      <section>
        <div className="flex flex-col justify-center items-center">
          <span>depoimentos</span>
          <span>
            Veja quantas pessoas já tiveram seus casamentos realizados com o
            Gravata Online
          </span>
          <Image src={Imagem.Noivos} alt="Imagem dos Noivos" />
          <div className="mx-80 indent-8">
            <span className="indent-8">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, hic
              veniam! Quo explicabo atque obcaecati! Quis eaque dolores
              obcaecati rerum fuga iste dolorum a pariatur. In ullam similique
              modi delectus atque hic totam accusantium. Nisi doloremque
              voluptates fuga, ratione, hic beatae itaque quia tempore eveniet,
              architecto laboriosam? Neque eum sint pariatur. Maxime earum
              doloribus aliquid sunt itaque ea asperiores architecto,
              perferendis debitis quos deleniti soluta enim facilis voluptas,
              tenetur, labore tempore nihil sapiente? Explicabo quaerat, itaque
              beatae ratione labore laudantium quod consectetur incidunt,
              blanditiis nulla aspernatur praesentium quas, iste sit?
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
