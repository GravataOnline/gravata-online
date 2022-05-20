import React from "react";
import ReactInputMask from "react-input-mask";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

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
  register?: any | undefined;
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
      placeholder={placeholder}
      {...register(name)}
      maxLength={maxLength}
      className={` break-words rounded-bl-2xl rounded-tr-2xl rounded-br-2xl p-4 w-full hover:scale-[1.01] outline-none focus:scale-[1.01] transition-all 
      .2s bg-ice border border-gray-300 ${
        color ? color : "text-gray-700"
      } font-medium 
      first-letter:uppercase min-h-[53px]`}
      {...props}
    />
  );
}

type CheckBoxType = InputType & {
  name: string;
  label: string;
  register?: any | undefined;
  isChecked: boolean;
  handleChange?: any;
};

export function CheckBox({
  name,
  isChecked,
  label,
  register,
  handleChange,
  ...props
}: CheckBoxType) {
  return (
    <>
      <label htmlFor={name}>
        <input
          name={name}
          type="checkbox"
          checked={isChecked}
          onChange={(e) => handleChange(e.target.value)}
          className="h-4 w-4 rounded outline-none appearance-none border border-cyan-500 checked:bg-cyan-500"
          {...props}
        />
        {label}
      </label>
      {/* <FontAwesomeIcon
          icon={faCheck}
          className="h-4 w-4 absolute top-0 left-0 opacity-0 check-1 transition"
        /> */}
    </>
  );
}

type InputMaskedShape = InputShape & {
  typed: "text" | "number";
  name: string;
  placeholder: string;
  maxLength?: number;
  color?: string;
  mask: string;
  register: any;
};

export function InputMasked({
  typed,
  maxLength,
  name,
  placeholder,
  mask,
  color,
  register,
  ...props
}: InputMaskedShape) {
  return (
    <ReactInputMask
      type={typed}
      mask={mask}
      {...register(name)}
      placeholder={placeholder}
      maxLength={maxLength}
      className={` break-words rounded-bl-2xl rounded-tr-2xl rounded-br-2xl p-4 w-full hover:scale-[1.01] outline-none focus:scale-[1.01] transition-all 
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
