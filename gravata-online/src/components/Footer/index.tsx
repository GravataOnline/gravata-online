import { Icons } from "img/icons";
import Image from "next/image";
import Link from "next/link";

interface FooterProps {
  isPink?: boolean;
  isIcons?: boolean;
}

export function Footer({ isPink, isIcons }: FooterProps) {
  return (
    <footer
      className={`absolute bottom-0 mb-0 left-0 w-[100%] h-14 flex flex-row text-white items-center justify-center ${
        isPink ? "bg-pink-theme" : "bg-blue-theme"
      }`}
    >
      Todos direitos reservados Gravata Online{" "}
      <span className="mx-2">&#169;</span> • 2022
      {isIcons && (
        <div className="absolute right-4 flex gap-5">
          <Link href="https://facebook.com">
            <Image src={Icons.Facebook} alt="Logo do Facebook" width={15} />
          </Link>
          <Link href="https://instagram.com">
            <Image src={Icons.Instagram} alt="Logo do Facebook" width={25} />
          </Link>
          <Link href="https://outlook.com">
            <Image src={Icons.Email} alt="Logo do Facebook" width={30} />
          </Link>
        </div>
      )}
    </footer>
  );
}
