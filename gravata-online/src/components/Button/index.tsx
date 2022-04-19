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

// import { ButtonHTMLAttributes, DetailedHTMLProps, ReactElement } from 'react'

// type Props = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

// export function Primary({ children, disabled, ...props }: Props): ReactElement {
//   return (
//     <button
//       className="text-white border-2 button bg-primary-500 disabled:bg-gray-400 group"
//       disabled={disabled}
//       {...props}
//     >
//       <span
//         className={`rounded-lg absolute inset-0 w-full mb-10 h-auto transition-all duration-300 ease-out transform group-hover:mb-0 ${disabled ? 'group-hover:bg-gray-600' : 'group-hover:bg-primary-600'
//           }`}
//       />
//       <span className="relative tracking-wide uppercase">{children}</span>
//     </button>
//   )
// }
