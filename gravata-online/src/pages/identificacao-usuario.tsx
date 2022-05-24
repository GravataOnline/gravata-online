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
import { useContext, useState } from "react";
import { Header } from "components/Header";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormValues } from "typings/form-cadastro";
import { ParsedUrlQuery } from "querystring";
import { ErrorMessage } from "components/ErrorMessage";
import yup from "utils/yup";
import { useToasts } from "react-toast-notifications";
import { api } from "./api/http-common";
import Spinner from "components/Spinner";
import { AuthContext } from "contexts/AuthContext";

const schema = yup
  .object()
  .shape({
    senha: yup
      .string()
      .required()
      .min(8)
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
        "Deve conter uma letra minúscula, uma maiúscula e um caracter especial"
      ),
    confSenha: yup
      .string()
      .oneOf([yup.ref("senha"), null], "As senhas não coincidem"),
  })
  .required();

export default function CadastroUsuario() {
  const router = useRouter();
  const { addToast } = useToasts();
  const [dadosNoivos, setDadosNoivos] = useState<ParsedUrlQuery>(router.query);
  const { signIn } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    defaultValues: {
      senha: "",
      confSenha: "",
    },
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const [conjuge1IsNoivo, setConjuge1IsNoivo] = useState<boolean>(false);
  // console.log("conjuge1IsNoivo", conjuge1IsNoivo);
  const [conjuge2IsNoivo, setConjuge2IsNoivo] = useState<boolean>(false);
  // console.log("conjuge2IsNoivo", conjuge2IsNoivo);

  function setConjuges1() {
    setConjuge1IsNoivo(!conjuge1IsNoivo);
  }

  function setConjuges2() {
    setConjuge2IsNoivo(!conjuge2IsNoivo);
  }

  async function onSubmit(data: any) {
    try {
      await api.request({
        url: "/User/create",
        method: "POST",
        data: {
          user: {
            name: router.query.nome,
            email: router.query.email,
            password: data.senha,
            phone: router.query.telefone,
            usertype: 1, //admin ou usuario comum
            spouse: conjuge1IsNoivo ? 1 : 2, //1 marido 2 mulher
          },
          spouse: {
            name: router.query.nomeconjuge,
            email: router.query.emailconjuge,
            password: "092019021",
            phone: router.query.telefoneconjuge,
            usertype: 2,
            spouse: conjuge2IsNoivo ? 1 : 2,
          },
        },
      });

      await signIn({
        email: String(router.query.email),
        password: data.senha,
      });

      addToast("Cadastro realizado com sucesso", { appearance: "success" });
      router.push({
        pathname: "/local-cerimonia",
      });
    } catch (error: any) {
      addToast(error.response.data.message, { appearance: "error" });
    }
  }
  return (
    <div className="bg-blue-theme bg-cover w-full min-h-screen relative  ">
      <Header.Primary />
      <form action="" onSubmit={handleSubmit(onSubmit)}>
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
          <div className="col-span-8 bg-letras-2 rounded-xl mt-10 bg-blue-secondary flex flex-col max-w-[750px] relative ">
            <div className="grid grid-cols-12 gap-5 m-3 py-6 px-3">
              <div className="col-span-12 flex flex-col py-2 px-4 bg-white rounded-bl-2xl rounded-tr-2xl rounded-br-2xl">
                <div className="h-1/3 text-blue-theme text-lg">
                  <span className="font-bold">{router.query.nome}, </span>{" "}
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
                  <span className="font-bold">
                    {router.query.nomeconjuge},{" "}
                  </span>{" "}
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
                <ErrorMessage error={errors.senha} />
              </div>
              <div className="col-span-6">
                <Input
                  name="confSenha"
                  placeholder="repita a senha..."
                  typed="password"
                  register={register}
                />
                <ErrorMessage error={errors.confSenha} />
              </div>
              <div className="col-span-12">
                {/* <Link href={"data-cerimonia"}> */}
                <ButtonBlue
                  type="submit"
                  isFullRounded
                  disabled={!isValid || isSubmitting}
                >
                  Avançar
                </ButtonBlue>
              </div>
              <div className="col-span-12 justify-center items-center">
                {isSubmitting && (
                  <Spinner
                    bgtextcolor="text-yellow-900"
                    fillcolor="fill-pink-theme"
                    darktextcolor="dark:text-blue-theme"
                  />
                )}
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
