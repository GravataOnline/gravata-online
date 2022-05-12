import { Footer } from "components/Footer";
import Image from "next/image";
import { useRouter } from "next/router";
import { Header } from "components/Header";
import Logo from "/public/logo-blue.svg";
import Calendario from "/public/icons/calendario.svg";
import { Input } from "components/Input";
import { ButtonOutline, ButtonWhite } from "components/Button";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import * as yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup
  .object()
  .shape({
    nome: yup.string().required(),
  })
  .required();

export default function CadastroUsuario() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  return (
    <div className="bg-pink-theme bg-cover w-full h-[100vh]  ">
      <section>
        <Header />
      </section>
      <section>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 flex justify-center ">
            <Image src={Logo} alt="logo gravatas" />
          </div>
          <div className="col-span-12 flex flex-col justify-center items-center">
            <span className="text-white text-2xl font-semibold uppercase tracking-wider">
              Parabéns
            </span>
            <span className="text-blue-theme text-2xl font-semibold tracking-wider">
              Você criou sua conta com sucesso!
            </span>
          </div>
          <div className="col-span-2" />
          <div className="col-span-8 bg-letras-2 bg-cover bg-pink-secondary p-2 overflow-hidden break-words">
            <div className="w-full flex flex-col justify-center items-center p-2">
              <Image src={Calendario} alt="logo gravatas" width={35} />
              <span className="text-white mb-3 text-xl font-semibold tracking-wider">
                Agora preciso saber quando vocês irão se casar...
              </span>
            </div>
            <div className="w-full pb-5 flex flex-row justify-center items-center ">
              <div className=" w-2/6 flex flex-row justify-center items-center">
                <Input
                  name="dtcerimonia"
                  placeholder="digite a data da cerimônia..."
                  typed="datetime-local"
                  register={register}
                />
                <ErrorMessage
                  errors={errors}
                  name="nome"
                  render={({ message }) => {
                    console.log(message);
                    return <p>{message}</p>;
                  }}
                />
              </div>
            </div>
            <div className="w-full pb-4 gap-3 flex flex-row justify-center items-center ">
              <ButtonOutline onClick={() => router.back()}>
                voltar
              </ButtonOutline>
              <Link href={"local-cerimonia"}>
                <ButtonWhite isFullRounded>salvar</ButtonWhite>
              </Link>
            </div>
          </div>
          <div className="col-span-2" />
        </div>
      </section>
      <section>
        <Footer isIcons />
      </section>
    </div>
  );
}
