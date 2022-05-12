import React from "react";
import { useForm } from "react-hook-form";

type InputType = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type TextAreaType = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

type InputShape = InputType & {
  typed: "text" | "number" | "password" | "date" | "datetime-local";
  name: string;
  placeholder: string;
  maxLength?: number;
  color?: string;
  register: any;
};

export function Input({
  typed,
  maxLength,
  name,
  placeholder,
  color,
  register,
  ...props
}: InputShape) {
  return (
    <input
      type={typed}
      {...register(name)}
      placeholder={placeholder}
      maxLength={maxLength}
      className={` break-words rounded-bl-2xl rounded-tr-2xl rounded-br-2xl p-4 w-full hover:scale-[1.04] outline-none focus:scale-105 transition-all 
      .2s bg-ice border border-gray-300 ${
        color ? color : "text-gray-700"
      } font-medium 
      first-letter:uppercase min-h-[53px]`}
      {...props}
    />
  );
}

type TextAreaShape = TextAreaType & {
  name: string;
  placeholder: string;
  maxLength: number;
  color?: string;
  register: any;
};

export function TextArea({
  name,
  placeholder,
  children,
  maxLength,
  register,
  ...props
}: TextAreaShape) {
  return (
    <textarea
      className="w-full p-4 hover:scale-[1.04] outline-none focus:scale-105 transition-all 
      .2s bg-ice border resize-none border-gray-300 text-gray-700 font-medium first-letter:uppercase rounded-bl-2xl rounded-tr-2xl rounded-br-2xl h-full"
      name={name}
      {...register(name)}
      cols={12}
      rows={12}
      maxLength={maxLength}
      placeholder={placeholder}
      {...props}
    >
      oi
    </textarea>
  );
}
