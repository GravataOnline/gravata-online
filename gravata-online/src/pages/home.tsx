import { AuthContext } from "contexts/AuthContext";
import { useContext } from "react";

export default function Home() {
  const { user } = useContext(AuthContext);
  console.log("user", user);

  return <h1>aqui é a home page seja bem vindo {user?.name}</h1>;
}
