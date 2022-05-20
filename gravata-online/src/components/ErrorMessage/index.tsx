import Image from "next/image";
import WarnIcon from "/public/icons/warn.svg";

interface ErrorMessageProps {
  error?: any;
}

export function ErrorMessage({ error }: ErrorMessageProps) {
  return (
    error && (
      <div className="flex flex-row items-center gap-2 ml-2 pt-2">
        <div className="min-h-[17px] min-w-[17px] flex items-center">
          <Image src={WarnIcon} width={17} height={17} objectFit="cover" />
        </div>
        <span className="text-red-900">{error?.message}</span>
      </div>
    )
  );
}
