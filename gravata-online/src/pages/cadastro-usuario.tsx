import { ButtonBlue } from "components/Button";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { CheckBox, Input, InputMasked } from "components/Input";
import { Imagem } from "img/images";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "./api/http-common";
import yup from "utils/yup";
import { ErrorMessage } from "components/ErrorMessage";
import ReactInputMask from "react-input-mask";

interface Conjuge {
  nome: string;
  email: string;
  celular: string;
}

interface FormValues {
  nome: string;
  telefone: string;
  email: string;
  nomeconjuge: string;
  telefoneconjuge: string;
  emailconjuge: string;
}

const schema = yup.object().shape({
  nome: yup.string().required(),
  telefone: yup.string().required(),
  email: yup
    .string()
    .required()
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Formato de e-mail inválido"),
  nomeconjuge: yup.string().required(),
  telefoneconjuge: yup.string().required(),
  emailconjuge: yup
    .string()
    .required()
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Formato de e-mail inválido"),
});

export default function CadastroUsuario() {
  const router = useRouter();
  const [conjuge1, setConjuge1] = useState<Conjuge>();
  const [conjuge2, setConjuge2] = useState<Conjuge>();
  const [isCheckedTermos, setIsCheckedTermos] = useState(false);
  const handleChangeA = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckedTermos(e.target.checked);
    console.log(e);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
  } = useForm<FormValues>({
    defaultValues: {
      nome: "",
      telefone: "",
      email: "",
      nomeconjuge: "",
      telefoneconjuge: "",
      emailconjuge: "",
    },
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {};

  return (
    <div className="bg-blue-theme bg-cover w-full min-h-screen">
      <Header />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-12 gap-2 mt-16 content-center  ">
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
          <div className="col-span-8 py-6 px-3 bg-letras-2 rounded-xl bg-blue-secondary flex flex-col w-[750px] relative ">
            <div className="grid grid-cols-12 gap-2 m-3 ">
              <div className="col-span-12">
                <Input
                  name="nome"
                  placeholder="digite aqui seu nome..."
                  typed="text"
                  register={register}
                />
                <ErrorMessage error={errors.nome} />
              </div>
              <div className="col-span-6">
                <CheckBox
                  handleChange={handleChangeA}
                  isChecked={isCheckedTermos}
                  label="adasdsad"
                  name="asdasd"
                  // onChange={(e) => console.log(e)}
                />
              </div>
              <div className="col-span-6">
                <Input
                  name="email"
                  placeholder="seu e-mail..."
                  typed="text"
                  register={register}
                />
                <ErrorMessage error={errors.email} />
              </div>
              <div className="col-span-6">
                <InputMasked
                  mask="(99) 99999-9999"
                  name="telefone"
                  placeholder="seu telefone com DDD..."
                  typed="text"
                  register={register}
                />
                <ErrorMessage error={errors.telefone} />
              </div>
              <div className="col-span-12">
                <Input
                  name="nomeconjuge"
                  placeholder="me fale o nome do seu amor..."
                  typed="text"
                  register={register}
                />
                <ErrorMessage error={errors.nomeconjuge} />
              </div>
              <div className="col-span-6">
                <Input
                  name="emailconjuge"
                  placeholder="agora o e-email do seu amor..."
                  typed="text"
                  register={register}
                />
                <ErrorMessage error={errors.emailconjuge} />
              </div>
              <div className="col-span-6">
                <InputMasked
                  mask="(99) 99999-9999"
                  name="telefoneconjuge"
                  placeholder="telefone do seu amor..."
                  typed="text"
                  register={register}
                />
                <ErrorMessage error={errors.telefoneconjuge} />
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
                <Link
                  href={{
                    pathname: "identificacao-usuario",
                    query: {
                      object: JSON.stringify(getValues()),
                    },
                  }}
                >
                  <ButtonBlue isFullRounded type="submit" disabled={!isValid}>
                    avançar
                  </ButtonBlue>
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
