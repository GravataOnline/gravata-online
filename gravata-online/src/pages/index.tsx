import { Header } from "components/Header";
import type { NextPage } from "next";
import { IndexPage } from "pages/index-page";

const Home: NextPage = () => {
  return (
    <div>
      <main>
        <IndexPage />
      </main>
    </div>
  );
};

export default Home;
