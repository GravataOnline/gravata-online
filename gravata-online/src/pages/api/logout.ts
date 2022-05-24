import { serialize } from "cookie";
import { parseCookies } from "nookies";

export default ({ req, res }: any) => {
  console.warn("chegou aq");
  //   res.setHeader(
  //     "Set-Cookie",
  //     serialize("gravata-token", "", {
  //       httpOnly: true,
  //       secure: process.env.NODE_ENV !== "development",
  //       //   maxAge: -1,
  //       expires: new Date(0),
  //       sameSite: "strict",
  //       path: "/login",
  //     })
  //   );
  //   res.writeHead(302, { Location: "/" });
  res.end();
};
