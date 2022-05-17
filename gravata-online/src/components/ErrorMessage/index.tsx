interface ErrorMessageProps {
  error: any;
}

export function ErrorMessage({ error }: ErrorMessageProps) {
  return (
    <div className="flex flex-row">
      <span className="text-red-900">{error?.message}</span>
    </div>
  );
}
