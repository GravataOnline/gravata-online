import Image from "next/image";
import MenuHamburguer from "/public/icons/menu-hamburger.svg";
import { ButtonBlue, ButtonOutline, ButtonYellow } from "components/Button";
import { CardGravata } from "components/CardGravata";
import { GravataCard } from "typings/card-gravata";
import { dadosGravatas } from "utils/data-gravatas";
import { Imagem } from "img/images";
import { Carrossel } from "components/Carrossel";
import { Input } from "components/Input";

export function IndexPage() {
  return (
    <div className="bg-letras bg-repeat-y ">
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
      <section className="  ">
        <div className="border-[12px] relative border-white shadow-2xl  flex flex-row mx-8 ">
          <Image src={Imagem.Padrinhos} alt="Imagem Padrinhos" />
          <div className="absolute gap-5 top-6 break-normal ml-7 w-[36%] mt-10 flex flex-col">
            <span className="text-white tracking-wide font-bold text-3xl">
              Divulgue seu grande dia e comece a receber dinheiro
            </span>
            <span className=" tracking-wide text-pink-theme font-light text-3xl">
              Nunca foi tão fácil arrecadar dinheiro para seu casamento
            </span>
            <div className="mt-10">
              <ButtonYellow>quero arrecadar</ButtonYellow>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-14">
        <div className="flex flex-col justify-center items-center">
          <span className="tracking-widest text-2xl font-bold text-blue-theme">
            Depoimentos
          </span>
          <div className="w-[50%] flex flex-row justify-center">
            <span className="tracking-widest w-full text-2xl mt-5 text-center text-pink-theme">
              Veja quantas pessoas já tiveram seus casamentos realizados com o
              Gravata Online
            </span>
          </div>
          <div>
            <Carrossel />
          </div>
        </div>
      </section>
      <section className="bg-retangulo-azul bg-cover p-20 flex flex-row justify-center items-center">
        <div className="w-7/12 text-center gap-6 flex flex-col  justify-center items-center  ">
          <span className="text-2xl text-blue-theme font-bold tracking-widest">
            Não perca tempo
          </span>
          <span className="text-2xl text-pink-theme tracking-widest">
            Faça seu cadastro agora mesmo e faça parte de um grupo de pessoas
            que tiveram seu casamento realizado
          </span>
          <div className="w-1/3 flex justify-center">
            <ButtonYellow>quero fazer parte</ButtonYellow>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center">
        <div className="px-80 py-28 ">
          <div className="flex flex-col text-center">
            <div className="text-blue-theme mb-6 font-bold text-2xl tracking-wider">
              Fale com a gente
            </div>
            <div className="text-pink-theme text-2xl tracking-wider">
              Para dúvidas ou qualquer esclarecimento,
            </div>
            <div className="text-pink-theme text-2xl tracking-wider">
              basta entrar em contato, que logo retornaremos
            </div>
          </div>
          <div className="grid grid-cols-12 gap-3 px-32 ">
            <div className="col-span-12 mt-10">
              <Input
                typed="text"
                name="nome"
                placeholder="Nome"
                autoComplete="off"
              />
            </div>
            <div className="col-span-3">
              <Input
                typed="text"
                name="estado"
                placeholder="Estado"
                autoComplete="off"
              />
            </div>
            <div className="col-span-9">
              <Input
                typed="text"
                name="cidade"
                placeholder="Cidade"
                autoComplete="off"
              />
            </div>
            <div className="col-span-3">
              <Input
                typed="text"
                name="ddd"
                placeholder="DDD"
                autoComplete="off"
              />
            </div>
            <div className="col-span-9">
              <Input
                typed="text"
                name="telefone"
                placeholder="Telefone"
                autoComplete="off"
              />
            </div>
            <div className="col-span-12">
              <Input
                typed="text"
                name="assunto"
                placeholder="Assunto"
                autoComplete="off"
              />
            </div>
            <div className="col-span-12 h-56">
              <Input
                typed="text"
                name="mensagem"
                placeholder="Mensagem"
                autoComplete="off"
              />
            </div>
            <div className="col-span-12">
              <ButtonBlue>Enviar Mensagem</ButtonBlue>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
