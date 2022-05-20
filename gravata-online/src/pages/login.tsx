import { Footer } from "components/Footer";
import Image from "next/image";
import { useRouter } from "next/router";
import LogoPink from "/public/logo-pink.svg";
import { Input } from "components/Input";
import { ButtonPink } from "components/Button";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { AuthContext } from "contexts/AuthContext";
import yup from "utils/yup";
import { Header } from "components/Header";
import Spinner from "components/Spinner";
import { useToasts } from "react-toast-notifications";

type FormData = {
  email: string;
  password: string;
};

export default function Login() {
  const router = useRouter();
  const { addToast } = useToasts();
  const { signIn } = useContext(AuthContext);

  const schema = yup.object().shape({
    email: yup.string(),
    password: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  async function handleSignIn(data: FormData) {
    console.log("data", data);
    try {
      await signIn(data);
    } catch (e: any) {
      addToast("E-mail ou senha invalidos", { appearance: "error" });
    }
  }
  return (
    <div className="bg-blue-theme bg-cover w-full min-h-[100vh]  ">
      <section>
        <div className="grid grid-cols-12 gap-4">
          <Header.Secondary />
          <div className="col-span-12 gap-3 flex flex-col justify-center items-center">
            <span className="text-white text-4xl font-semibold tracking-wider">
              Acesse sua conta {" :) "}
            </span>
            <span className="text-pink-theme text-xl  ">
              Continue arrecadando $$ para seu casamento
            </span>
          </div>
          <div className="col-span-3" />
          <form
            onSubmit={handleSubmit(handleSignIn)}
            className="col-span-6 bg-letras-2 bg-cover flex flex-col justify-center py-12 gap-6 items-center bg-blue-secondary p-2 overflow-hidden break-words"
          >
            <div className="w-[60%] flex flex-col justify-center items-center">
              <Input
                name="email"
                placeholder="digite aqui seu e-mail..."
                typed="text"
                register={register}
                autoComplete="off"
              />
              {/* <ErrorMessage error={errors.email} /> */}
            </div>
            <div className="w-[60%] flex flex-row justify-center items-center ">
              <Input
                name="password"
                placeholder="agora sua senha..."
                typed="password"
                register={register}
              />
              {/* <div className="flex justify-start">
                <ErrorMessage error={errors.password} />
              </div> */}
            </div>
            <div className="w-full  gap-3 flex flex-row justify-center items-center ">
              <ButtonPink type="submit" disabled={isSubmitting}>
                {/* disabled={!isValid || isSubmitting} */}
                Entrar
              </ButtonPink>
            </div>
            {isSubmitting && (
              <Spinner
                bgtextcolor="text-yellow-900"
                fillcolor="fill-pink-theme"
                darktextcolor="dark:text-blue-theme"
              />
            )}
            <div className="w-full  flex flex-row justify-center items-center ">
              <Link href={"esqueci-senha"}>
                <span className="text-white underline font-medium tracking-wide cursor-pointer">
                  ih... esqueci minha senha
                </span>
              </Link>
            </div>
          </form>
        </div>
        <div className="col-span-3" />
      </section>
      <section>
        <Footer isPink isIcons />
      </section>
    </div>
  );
}
