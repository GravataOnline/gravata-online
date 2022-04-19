import Image from "next/image";
import Logo from "/public/logo.svg";
import bgImg from "/public/background-index.svg";
import bgRosa from "/public/bg-rosa.svg";
import bgBlue from "/public/bg-blue.svg";
import bgBlueLight from "/public/bg-blue-light.svg";
import MenuHamburguer from "/public/icons/menu-hamburger.svg";
import bgTextos from "/public/bg-textos.svg";
import { ButtonOutline, ButtonYellow } from "components/Button";
import { CardGravata } from "components/CardGravata/CardGravata";
import { useState } from "react";
import { GravataCard } from "typings/card-gravata";
import { dadosGravatas } from "utils/data-gravatas";

export function IndexPage() {
  return (
    <div>
      <section className="relative w-full">
        <div className="absolute z-20">
          <Image src={bgBlueLight} alt="Imagem de fundo Azul Claro" />
        </div>
        <div className="relative z-10">
          <Image src={bgImg} alt="Imagem de Casamento" />
        </div>
        <div className="absolute top-0 w-full">
          <Image src={bgRosa} alt="Imagem de fundo Rosa Claro" />
        </div>
        <div className="absolute top-0 w-full">
          <Image src={bgBlue} alt="Imagem de fundo azul escuro" />
        </div>
        <div className="flex flex-col top-0 z-50">
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
            <Image src={Logo} alt="Logo" className="Logo Gravatas Online" />
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
              <ButtonOutline onClick={() => console.log("oi")}>
                Tá, mas como funciona?
              </ButtonOutline>
              <ButtonYellow>Quero arrecadar</ButtonYellow>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="relative -z-10 -mt-8 ">
          <Image src={bgTextos} alt="Plano de Fundo com Letras" />
          <div className="flex flex-col absolute top-20 gap-8 w-full">
            <div className="flex flex-col ml-16 gap-7">
              <span className="font-bold text-blue-theme text-3xl">
                Como Funciona?
              </span>
              <span className="tracking-wider text-pink-theme font-normal text-2xl">
                Veja como é fácil utilizar o Gravata Online para você <br />
                ter um casamento suprido e completo.
              </span>
            </div>
            <div className="grid grid-cols-12 gap-2 justify-center items-center">
              {dadosGravatas.map((x: GravataCard) => (
                <div className="col-span-12 xl:col-span-3   sm:col-span-12  lg:col-span-6  xl:odd:mb-28">
                  <CardGravata
                    descricao={x.descricao}
                    titulo={x.titulo}
                    key={x.descricao}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="relative -z-10 -mt-16">
          <Image src={bgTextos} alt="Plano de Fundo com Letras" />
        </div>
      </section>
      <section>
        <div className="relative -z-10 -mt-16">
          <Image src={bgTextos} alt="Plano de Fundo com Letras" />
        </div>
      </section>
    </div>
  );
}
