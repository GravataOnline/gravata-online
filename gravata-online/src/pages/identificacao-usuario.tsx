import { ButtonBlue } from "components/Button";
import { Footer } from "components/Footer";
import { Input } from "components/Input";
import { Icons } from "img/icons";
import { Imagem } from "img/images";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Noivo from "/public/icons/noivo.svg";
import Noiva from "/public/icons/noiva.svg";
import { useState } from "react";
import { Header } from "components/Header";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup
  .object()
  .shape({
    senha: yup.string().required(),
    confSenha: yup
      .string()
      .test("passwords-match", "Passwords must match", function (value) {
        return this.parent.password === value;
      }),
  })
  .required();

export default function CadastroUsuario() {
  const router = useRouter();
  console.log("router", router.query?.object);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  console.log("errors", errors);
  const [conjuge1IsNoivo, setConjuge1IsNoivo] = useState<boolean>(false);
  const [conjuge2IsNoivo, setConjuge2IsNoivo] = useState<boolean>(false);

  function setConjuges1() {
    setConjuge1IsNoivo(!conjuge1IsNoivo);
  }

  function setConjuges2() {
    setConjuge2IsNoivo(!conjuge2IsNoivo);
  }

  function onSubmit(data: any) {
    console.log("data", data);
  }
  return (
    <div className="bg-blue-theme bg-cover w-full h-[100vh]  ">
      <Header />
      <form action="" onChange={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-12 gap-2 items-center  ">
          <div className="col-span-4 flex flex-col -mt-5 gap-3 items-start justify-start ml-16  ">
            <Image
              src={Imagem.Logo}
              alt="Logo do Gravatas Online"
              width={150}
            />
            <span className="text-white text-xl font-bold">NOVA CONTA</span>
            <div className="flex flex-col text-lg text-pink-theme">
              <span>Vamos lá!</span>
              <span>Para podermos</span>
              <span>te ajudar preciso saber</span>
              <span>mais sobre você...</span>
            </div>
          </div>
          <div className="col-span-8 bg-letras-2 rounded-xl mt-10 bg-blue-secondary flex flex-col w-[750px] relative ">
            <div className="grid grid-cols-12 gap-5 m-3 py-6 px-3">
              <div className="col-span-12 flex flex-col py-2 px-4 bg-white rounded-bl-2xl rounded-tr-2xl rounded-br-2xl">
                <div className="h-1/3 text-blue-theme text-lg">
                  <span className="font-bold">José Marcos Silva, </span>{" "}
                  <span>você é...</span>
                </div>
                <div className="h-2/3 flex flex-row my-3 justify-center gap-7">
                  <div
                    className={`flex items-center cursor-pointer gap-1 ${
                      conjuge1IsNoivo ? "bg-yellow-600" : "bg-white"
                    } px-4 rounded-lg`}
                    onClick={() => setConjuges1()}
                  >
                    <Image src={Noivo} alt="Ícone do noivo" width={25} />
                    <span>o noivo</span>
                  </div>
                  <div
                    className={`flex items-center gap-1 cursor-pointer ${
                      !conjuge1IsNoivo ? "bg-yellow-600" : "bg-white"
                    } px-4 rounded-lg`}
                    onClick={() => setConjuges1()}
                  >
                    <Image src={Noiva} alt="Ícone do noivo" width={25} />
                    <span>a noiva</span>
                  </div>
                </div>
              </div>
              <div className="col-span-12 flex flex-col py-2 px-4 bg-white rounded-bl-2xl rounded-tr-2xl rounded-br-2xl">
                <div className="h-1/3 text-blue-theme text-lg">
                  <span className="font-bold">Maria Alice Gonçalves, </span>{" "}
                  <span>você é...</span>
                </div>
                <div className="h-2/3 flex flex-row my-3 justify-center gap-7">
                  <div
                    className={`flex items-center cursor-pointer gap-1 ${
                      conjuge2IsNoivo ? "bg-yellow-600" : "bg-white"
                    } px-4 rounded-lg`}
                    onClick={() => setConjuges2()}
                  >
                    <Image src={Noivo} alt="Ícone do noivo" width={25} />
                    <span>o noivo</span>
                  </div>
                  <div
                    className={`flex items-center gap-1 cursor-pointer ${
                      !conjuge2IsNoivo ? "bg-yellow-600" : "bg-white"
                    } px-4 rounded-lg`}
                    onClick={() => setConjuges2()}
                  >
                    <Image src={Noiva} alt="Ícone do noivo" width={25} />
                    <span>a noiva</span>
                  </div>
                </div>
              </div>
              <div className="col-span-6">
                <Input
                  name="senha"
                  placeholder="crie uma senha..."
                  typed="password"
                  register={register}
                />
                <ErrorMessage
                  errors={errors}
                  name="senha"
                  render={({ message }) => <p>{message}</p>}
                />
              </div>
              <div className="col-span-6">
                <Input
                  name="confSenha"
                  placeholder="repita a senha..."
                  typed="password"
                  register={register}
                />
                <ErrorMessage
                  errors={errors}
                  name="confSenha"
                  render={({ message }) => <p>{message}</p>}
                />
              </div>
              <div className="col-span-12">
                <Link href={"data-cerimonia"}>
                  <ButtonBlue isFullRounded>Avançar</ButtonBlue>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </form>

      <section>
        <Footer isPink isIcons />
      </section>
    </div>
  );
}
