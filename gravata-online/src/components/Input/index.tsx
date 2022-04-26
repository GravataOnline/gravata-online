type InputType = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type InputShape = InputType & {
  typed: string;
};

export function Input({ typed, name, placeholder, ...props }: InputShape) {
  return (
    <input
      type={typed}
      name={name}
      placeholder={placeholder}
      className={`text-center break-words w-full hover:scale-[1.04] outline-none focus:scale-105 transition-all 
      .2s bg-ice border border-gray-300 text-gray-700 p-2 font-medium 
      first-letter:uppercase rounded-lg h-full`}
      {...props}
    />
  );
}

export function TextArea({ name, placeholder, children, ...props }: InputType) {
  return (
    <textarea name="" id="">
      oi
    </textarea>
  );
}
