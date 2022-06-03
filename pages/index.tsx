import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import HomePage from "../src/views/home";

const Home: NextPage = () => {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>Coinsplan</title>
      </Head>
      <HomePage />
    </>
  );
};

export default Home;
