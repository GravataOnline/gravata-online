import Image from "next/image";
import MenuHamburguer from "/public/icons/menu-hamburger.svg";
import { ButtonBlue, ButtonOutline, ButtonYellow } from "components/Button";
import { CardGravata } from "components/CardGravata";
import { GravataCard } from "typings/card-gravata";
import { dadosGravatas } from "utils/data-gravatas";
import { Imagem } from "img/images";
import { Icons } from "img/icons";
import { Carrossel } from "components/Carrossel";
import { Input, TextArea } from "components/Input";
import Link from "next/link";
import { useRef } from "react";
import { Header } from "components/Header";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  nome: yup.string().nullable(),
  estado: yup.string().nullable(),
  cidade: yup.string().nullable(),
  ddd: yup.string().nullable(),
  telefone: yup.string().nullable(),
  assunto: yup.string().nullable(),
  mensagem: yup.string().nullable(),
});

export function IndexPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function submitForm(data: any) {
    console.log(data);
  }

  return (
    <div className="bg-letras bg-repeat-y relative ">
      <section className="w-full" id="inicio">
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
            <div className="flex w-full justify-between flex-row absolute top-0 z-50">
              <Header.Primary noArrow />
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
                <Link href={"#funcionamento"}>
                  <ButtonOutline>T??, mas como funciona?</ButtonOutline>
                </Link>
                <Link href={"cadastro-usuario"}>
                  <ButtonYellow>Quero arrecadar</ButtonYellow>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="funcionamento">
        <div className="relative">
          <div className="flex flex-col w-auto mx-12 my-6">
            <span className="font-bold text-blue-theme text-3xl">
              Como Funciona?
            </span>
            <span className="tracking-wider mb-3 text-pink-theme font-normal text-2xl">
              Veja como ?? f??cil utilizar o Gravata Online para voc?? <br />
              ter um casamento suprido e completo.
            </span>
          </div>
          <div className="grid grid-cols-12 gap-2 justify-center items-center">
            {dadosGravatas.map((x: GravataCard, index: number) => (
              <div className="col-span-12 xl:col-span-3 sm:col-span-12  lg:col-span-6  xl:odd:mb-28">
                <CardGravata
                  descricao={x.descricao}
                  titulo={x.titulo}
                  key={x.descricao}
                  index={index}
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
              Nunca foi t??o f??cil arrecadar dinheiro para seu casamento
            </span>
            <div className="mt-10">
              <Link href={"cadastro-usuario"}>
                <ButtonYellow>quero arrecadar</ButtonYellow>
              </Link>
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
              Veja quantas pessoas j?? tiveram seus casamentos realizados com o
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
            N??o perca tempo
          </span>
          <span className="text-2xl text-pink-theme tracking-widest">
            Fa??a seu cadastro agora mesmo e fa??a parte de um grupo de pessoas
            que tiveram seu casamento realizado
          </span>
          <div className="w-1/3 flex justify-center">
            <Link href={"cadastro-usuario"}>
              <ButtonYellow>quero fazer parte</ButtonYellow>
            </Link>
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
              Para d??vidas ou qualquer esclarecimento,
            </div>
            <div className="text-pink-theme text-2xl tracking-wider">
              basta entrar em contato, que logo retornaremos
            </div>
          </div>
          <form onSubmit={handleSubmit(submitForm)}>
            <div className="grid grid-cols-12 gap-3 px-32 ">
              <div className="col-span-12 mt-10">
                <Input
                  typed="text"
                  name="nome"
                  placeholder="Nome"
                  autoComplete="off"
                  register={register}
                />
              </div>
              <div className="col-span-3">
                <Input
                  typed="text"
                  name="estado"
                  placeholder="Estado"
                  autoComplete="off"
                  register={register}
                />
              </div>
              <div className="col-span-9">
                <Input
                  typed="text"
                  name="cidade"
                  placeholder="Cidade"
                  autoComplete="off"
                  register={register}
                />
              </div>
              <div className="col-span-3">
                <Input
                  typed="text"
                  name="ddd"
                  placeholder="DDD"
                  autoComplete="off"
                  register={register}
                />
              </div>
              <div className="col-span-9">
                <Input
                  typed="text"
                  name="telefone"
                  placeholder="Telefone"
                  autoComplete="off"
                  register={register}
                />
              </div>
              <div className="col-span-12">
                <Input
                  typed="text"
                  name="assunto"
                  placeholder="Assunto"
                  autoComplete="off"
                  register={register}
                />
              </div>
              <div className="col-span-12 h-44">
                <TextArea
                  register={register}
                  name="mensagem"
                  maxLength={5}
                  placeholder="Mensagem"
                />
              </div>

              <div className="col-span-12">
                <ButtonBlue type="submit">Enviar Mensagem</ButtonBlue>
              </div>
            </div>
          </form>
        </div>
      </section>
      <section className="bg-footer-theme-blue bg-cover">
        <div className="grid grid-cols-12  py-8 ">
          <div className="col-span-2 flex flex-col items-start">
            <Image src={Imagem.Logo} alt="Logo Gravatas Online" height={70} />
          </div>
          <div className="col-span-2   text-white">
            <span className="font-bold text-xl">Sobre</span>
            <div className="flex flex-col gap-1 font-light">
              <a href="#">IN??CIO</a>
              <a href="#">QUEM SOMOS</a>
              <a href="#">COMO FUNCIONA?</a>
              <a href="#">BLOG</a>
            </div>
          </div>
          <div className="col-span-2   text-white">
            <span className="font-bold text-xl">Fale Conosco</span>
            <div className="flex flex-col gap-1 font-light">
              <a href="#">Central de Ajuda</a>
              <a href="#">Whatsapp</a>
              <a href="#">Contato</a>
            </div>
          </div>
          <div className="col-span-2   text-white">
            <span className="font-bold text-xl">Pol??tica</span>
            <div className="flex flex-col gap-1 font-light">
              <a href="#">TERMOS DE USO</a>
              <a href="#">PRIVACIDADE</a>
            </div>
          </div>
          <div className="col-span-2" />
          <div className="col-span-2 text-white gap-7 mr-5">
            <span className="font-bold flex justify-evenly">
              <a href="#">ENTRAR</a> | <a href="#">CADASTRAR-SE</a>
            </span>
            <div className="mt-9 ml-4 ">
              <span className="font-bold flex justify-start ">
                Siga a gente
              </span>
              <div className="flex gap-6 mt-2">
                <a href="https://facebook.com">
                  <Image src={Icons.Facebook} alt="Logo do Facebook" />
                </a>
                <a href="https://instagram.com">
                  <Image src={Icons.Instagram} alt="Logo do Facebook" />
                </a>
                <a href="https://outlook.com">
                  <Image src={Icons.Email} alt="Logo do Facebook" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-footer-light-blue bg-cover text-lg font-semibold text-white flex flex-row items-center p-6 justify-center">
        Todos direitos reservados Gravata Online{" "}
        <span className="mx-2">&#169;</span> ??? 2022
      </section>
    </div>
  );
}
