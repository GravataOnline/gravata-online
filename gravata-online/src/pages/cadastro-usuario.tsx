import { ButtonBlue } from "components/Button";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { Input } from "components/Input";
import { Imagem } from "img/images";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import api from "./api/http-common";

interface Conjuge {
  nome: string;
  email: string;
  celular: string;
}

export default function CadastroUsuario() {
  const router = useRouter();
  const [conjuge1, setConjuge1] = useState<Conjuge>();
  const [conjuge2, setConjuge2] = useState<Conjuge>();
  const { handleSubmit } = useForm();

  function handleSubmitForm(data: any) {
    console.log({ data });
  }

  return (
    <div className="bg-blue-theme bg-cover w-full h-[100vh]  ">
      <Header />
      <div className="grid grid-cols-12 gap-2 mt-16 content-center  ">
        <div className="col-span-4 flex flex-col -mt-5 gap-3 items-start justify-start ml-16  ">
          <Image src={Imagem.Logo} alt="Logo do Gravatas Online" width={150} />
          <span className="text-white text-xl font-bold">NOVA CONTA</span>
          <div className="flex flex-col text-lg text-pink-theme">
            <span>Vamos lá!</span>
            <span>Para podermos</span>
            <span>te ajudar preciso saber</span>
            <span>mais sobre você...</span>
          </div>
        </div>
        <div className="col-span-8 py-6 px-3 bg-letras-2 rounded-xl bg-blue-secondary flex flex-col w-[750px] relative ">
          <form onSubmit={handleSubmit(handleSubmitForm)}>
            <div className="grid grid-cols-12 gap-2 m-3 ">
              <div className="col-span-12">
                <Input
                  name="nome"
                  placeholder="digite aqui seu nome..."
                  typed="text"
                />
              </div>
              <div className="col-span-6">
                <Input name="email" placeholder="seu e-mail..." typed="text" />
              </div>
              <div className="col-span-6">
                <Input
                  name="telefone"
                  placeholder="seu telefone com DDD..."
                  typed="text"
                />
              </div>
              <div className="col-span-12">
                <Input
                  name="nomeconjuge"
                  placeholder="me fale o nome do seu amor..."
                  typed="text"
                />
              </div>
              <div className="col-span-6">
                <Input
                  name="emailconjuge"
                  placeholder="agora o e-email do seu amor..."
                  typed="text"
                />
              </div>
              <div className="col-span-6">
                <Input
                  name="telefoneconjuge"
                  placeholder="telefone do seu amor..."
                  typed="text"
                />
              </div>
              <div className="col-span-6 my-4 flex flex-row items-center justify-center gap-1">
                <input type="checkbox" name="termos" />
                <label htmlFor="termos">
                  <Link href={"termos-uso"}>termos de uso </Link>
                </label>
                <br></br>
              </div>
              <div className="col-span-6  my-4  flex flex-row items-center justify-center gap-1">
                <input type="checkbox" name="privacidade" />
                <label htmlFor="privacidade">
                  <Link href={"politica-privacidade"}>
                    politica de privacidade
                  </Link>
                </label>
                <br></br>
              </div>
              <div className="col-span-12">
                <ButtonBlue isFullRounded type="submit">
                  avançar
                </ButtonBlue>
                {/* <Link href={"identificacao-usuario"}></Link> */}
              </div>
            </div>
          </form>
        </div>
      </div>

      <section>
        <Footer isPink isIcons />
      </section>
    </div>
  );
}
