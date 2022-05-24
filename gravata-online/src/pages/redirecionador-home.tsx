import { Footer } from "components/Footer";
import Image from "next/image";
import { useRouter } from "next/router";
import { Header } from "components/Header";
import Logo from "/public/logo-blue.svg";
import Casal from "/public/icons/casal.svg";
import { useEffect, useState } from "react";
import Spinner from "components/Spinner";

export default function CadastroUsuario() {
  const [loading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(!loading);
    }, 4000);

    loading && router.push("/home");
  }, [loading]);

  return (
    <div className="bg-pink-theme bg-cover w-full min-h-[100vh] relative  ">
      <section>
        <Header.Primary />
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
          <div className="col-span-8  bg-letras-2 bg-cover bg-pink-secondary p-2 overflow-hidden break-words">
            <div className="w-full flex flex-col gap- justify-center items-center p-2">
              <Image src={Casal} alt="logo gravatas" width={95} />
              <span className="text-white text-center mb-3 text-2xl tracking-wider w-2/4">
                Você será redirecionado para o planejador do seu casamento.
              </span>
            </div>
          </div>
          <div className="col-span-2" />
          <div className="col-span-12 flex self-center justify-center">
            {!loading && (
              <Spinner
                bgtextcolor="text-yellow-900"
                fillcolor="fill-pink-theme"
                darktextcolor="dark:text-blue-theme"
              />
            )}
          </div>
        </div>
      </section>
      <section>
        <Footer isIcons />
      </section>
    </div>
  );
}
