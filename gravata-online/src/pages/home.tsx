import { AuthContext } from "contexts/AuthContext";
import { GetServerSideProps } from "next";
import { useContext, useEffect } from "react";
import { parseCookies } from "nookies";
import Router from "next/router";
import { getAPIClient } from "services/axios";
import { api } from "./api/http-common";

export default function Home() {
  const { user } = useContext(AuthContext);

  // useEffect

  return <h1>aqui é a home page seja bem vindo {user?.name}</h1>;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const apiClient = getAPIClient(context);
  const { ["gravata-token"]: token } = parseCookies(context);

  if (!token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  await api.request({
    url: "/User/login",
    method: "POST",
    data: {
      email: "hellen@gmail.com",
      password: "@Hellen1505",
    },
  });
  return {
    props: {},
  };
};
