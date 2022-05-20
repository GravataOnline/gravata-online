import { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies } from "nookies";
import { v4 as uuid } from "uuid";
import api from "pages/api/http-common";
import Router from "next/router";

type AuthContextData = {
  isAuthenticated: boolean;
  user: User | null;
  signIn: (data: SignInData) => Promise<void>;
};

type User = {
  id: number;
  name: string;
  email: string;
  tipousuario: number;
  conjuge: number;
  token?: string;
};

type SignInData = {
  email: string;
  password: string;
};

const tokenId = uuid();
export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<User | null>(null);
  const isAuthenticated: boolean = !!user;

  useEffect(() => {
    const { "gravata-token": token } = parseCookies();
    // if(token)
  }, []);

  async function signIn({ email, password }: SignInData) {
    const message = await api.request({
      url: "/User/login",
      method: "POST",
      data: {
        email,
        password,
      },
    });

    const result = message?.data?.message;

    setCookie(undefined, "gravata-token", tokenId, {
      //instalei as dependencias do cookie p ter acesso as props => npm add @types/cookie -D
      maxAge: 60 * 60 * 1, //qnt tempo o cookie vai durar - em segundos = 1 hora
    });

    setUser({
      conjuge: result.conjuge,
      email: result.email,
      id: result.id,
      name: result.name,
      tipousuario: result.tipousuario,
      token: tokenId,
    });

    Router.push("/home");
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
