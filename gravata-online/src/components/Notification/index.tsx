import { useToasts } from "react-toast-notifications";

export function Success(msg: string) {
  const { addToast } = useToasts();

  addToast(msg, { appearance: "success" });
}

export const Notification = {
  Success,
};
