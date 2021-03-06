import { ButtonHTMLAttributes, DetailedHTMLProps, ReactElement } from "react";
type Props = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export function ButtonOutline({ children, ...props }: Props) {
  return (
    <button
      className="border-2 disabled:bg-gray-600 disabled:cursor-not-allowed rounded-full py-2 px-6 text-white"
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonYellow({ children, ...props }: Props) {
  return (
    <button
      className="bg-yellow-600 disabled:bg-gray-600 disabled:cursor-not-allowed font-bold rounded-full py-2 px-6 text-neutral-800"
      {...props}
    >
      {children}
    </button>
  );
}

type ButtonBlueProps = Props & {
  isFullRounded?: boolean;
};

export function ButtonBlue({
  children,
  isFullRounded,
  ...props
}: ButtonBlueProps) {
  return (
    <button
      className={`bg-cyan-900 disabled:bg-gray-600 disabled:cursor-not-allowed font-bold ${
        isFullRounded ? "rounded-full" : "rounded-lg"
      } py-2 px-6 text-white h-full w-full  `}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonWhite({
  children,
  isFullRounded,
  ...props
}: ButtonBlueProps) {
  return (
    <button
      className={`bg-white border-2 disabled:bg-gray-600 disabled:cursor-not-allowed font-bold ${
        isFullRounded ? "rounded-full" : "rounded-lg"
      } py-2 px-6 text-pink-theme`}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonPink({ children, ...props }: Props) {
  return (
    <button
      className="bg-pink-theme min-w-[200px] disabled:bg-gray-600 disabled:cursor-not-allowed font-bold rounded-full py-2 px-6 text-white"
      {...props}
    >
      {children}
    </button>
  );
}
