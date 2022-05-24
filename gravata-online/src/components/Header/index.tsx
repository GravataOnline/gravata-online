import { Icons } from "img/icons";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import Noivo from "/public/icons/noivo.svg";
import Noiva from "/public/icons/noiva.svg";
import LogoPink from "/public/logo-pink.svg";
import { ButtonPink } from "components/Button";
import { AuthContext } from "contexts/AuthContext";
import { destroyCookie, parseCookies } from "nookies";
import { GetServerSideProps } from "next";

interface HeaderProps {
  noArrow?: boolean;
}

export function Primary({ noArrow }: HeaderProps, props: any) {
  const router = useRouter();
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [isNoiva, setIsNoiva] = useState<boolean>(false);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user?.email) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
    console.warn(user?.email);
  }, [user]);

  return (
    <>
      <header
        title="Gravatas Online"
        className={`h-10 p-5 flex flex-row ${
          !noArrow ? "justify-between" : "justify-end"
        } items-center w-full `}
      >
        <div
          onClick={() => router.back()}
          className="cursor-pointer mt-2 -ml-2"
        >
          {!noArrow ? (
            <Image
              src={Icons.ArrowHeader}
              alt="Seta para esquerda"
              height={35}
              width={45}
            />
          ) : (
            <></>
          )}
        </div>

        {!isLogged ? (
          <Link href={"/login"}>
            <span className="text-white cursor-pointer underline text-lg">
              Já sou cadastrado
            </span>
          </Link>
        ) : (
          <>
            <Link href={"/home"}>
              <div className="flex cursor-pointer flex-row gap-2 items-center">
                <Image
                  src={isNoiva ? Noiva : Noivo}
                  alt="Ícone de rosto"
                  width={25}
                  className={"text-pink-700"}
                />
                <span className="text-lg font-lg text-white px-2">
                  {user?.name}
                </span>
              </div>
            </Link>
            <span
              className="text-lg font-lg cursor-pointer text-white"
              onClick={() => {
                destroyCookie(null, "gravata-token", {
                  expires: new Date(0),
                });
                window.location.reload();
              }}
            >
              sair
            </span>
          </>
        )}
      </header>
    </>
  );
}

export function Secondary() {
  return (
    <header
      className="min-w-[100vw] flex flex-row items-center "
      title="Gravatas Online"
    >
      <div className="ml-6">
        <Link href={"/"}>
          <Image src={LogoPink} width={128} className="cursor-pointer" />
        </Link>
      </div>
      <div className="flex w-full justify-end gap-5 items-center mr-5">
        <Link href={"cadastro-usuario"}>
          <span className="text-white text-sm uppercase underline font-medium tracking-wide cursor-pointer">
            ainda não sou cadastrado {":("}
          </span>
        </Link>
        <Link href={"cadastro-usuario"}>
          <ButtonPink>
            <span className="text-sm">CADASTRE-SE GRÁTIS</span>
          </ButtonPink>
        </Link>
      </div>
    </header>
  );
}

export const Header = {
  Primary,
  Secondary,
};
