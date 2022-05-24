import { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies, destroyCookie } from "nookies";
import Router from "next/router";
import jwt_decode from "jwt-decode";
import { api } from "pages/api/http-common";
import { serialize } from "cookie";

type AuthContextData = {
  isAuthenticated: boolean;
  user: User | null;
  signIn: (data: SignInData) => Promise<void>;
  // logout: () => Promise<void>;
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

let tokenId = "";
export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<User | null>(null);
  const isAuthenticated: boolean = !!user;

  async function getUserByToken(id: number) {
    await api
      .request({
        url: "/User/get-user-by-id",
        method: "GET",
        params: {
          id,
        },
      })
      .then((response) => {
        setUser(response.data);
      });
  }

  useEffect(() => {
    const { "gravata-token": token } = parseCookies();
    if (token) {
      let { idusuario: id } = jwt_decode(token) as any;
      if (token) getUserByToken(id);
    }
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

    setCookie(undefined, "gravata-token", result.token, {
      //instalei as dependencias do cookie p ter acesso as props => npm add @types/cookie -D
      maxAge: 60 * 60 * 1, //qnt tempo o cookie vai durar - em segundos = 1 hora
    });

    api.defaults.headers.common["Authorization"] = `Bearer ${result.token}`;

    setUser({
      conjuge: result.conjuge,
      email: result.email,
      id: result.id,
      name: result.name,
      tipousuario: result.tipousuario,
      token: result.token,
    });

    Router.push("/home");
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
