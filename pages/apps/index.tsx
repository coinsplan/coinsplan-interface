import { NextPage } from "next";
import Head from "next/head";
import CoinsplanAppWelcomePage from "../../src/views/app/Welcome";

const CoinsplanAppWelcome: NextPage = () => {
  return (
    <>
      <Head>
        <title>Apps</title>
      </Head>
      <CoinsplanAppWelcomePage />
    </>
  )
}
export default CoinsplanAppWelcome