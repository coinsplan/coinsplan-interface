import { NextPage } from "next";
import Head from "next/head";
import CoinsplanAppTemplate from "../../src/views/app";

const Explorer: NextPage = () => {
  return (
    <>
      <Head>
        <title>Coinplan</title>
      </Head>
      <CoinsplanAppTemplate currentDisplay="explorer" />
    </>
  );
};
export default Explorer;
