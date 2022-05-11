import { Icons } from "img/icons";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Noivo from "/public/icons/noivo.svg";
import Noiva from "/public/icons/noiva.svg";

export function Header() {
  const router = useRouter();
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [isNoiva, setIsNoiva] = useState<boolean>(false);

  return (
    <>
      <div className="h-10 p-5  flex flex-row justify-between items-center w-full ">
        <div
          onClick={() => router.back()}
          className="cursor-pointer mt-2 -ml-2"
        >
          <Image
            src={Icons.ArrowLeft}
            alt="Seta para esquerda"
            height={35}
            width={45}
          />
        </div>

        {!isLogged ? (
          <Link href={"login"}>
            <span className="text-white cursor-pointer underline text-lg">
              Já sou cadastrado
            </span>
          </Link>
        ) : (
          <Link href={"login"}>
            <div className="flex cursor-pointer flex-row gap-2 items-center">
              <Image
                src={isNoiva ? Noiva : Noivo}
                alt="Ícone de rosto"
                width={25}
              />
              <span className="text-lg font-medium">SAIR</span>
            </div>
          </Link>
        )}
      </div>
    </>
  );
}
