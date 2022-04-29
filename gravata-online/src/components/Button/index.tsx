import { ButtonHTMLAttributes, DetailedHTMLProps, ReactElement } from "react";
type Props = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export function ButtonOutline({ children, ...props }: Props) {
  return (
    <button className="border rounded-full py-2 px-4 text-white" {...props}>
      {children}
    </button>
  );
}

export function ButtonYellow({ children, ...props }: Props) {
  return (
    <button
      className="bg-yellow-600 font-bold rounded-full py-2 px-8 text-neutral-800"
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
      className={`bg-cyan-900 font-bold ${
        isFullRounded ? "rounded-full" : "rounded-lg"
      } py-2 px-8 text-white h-full w-full  `}
      {...props}
    >
      {children}
    </button>
  );
}
