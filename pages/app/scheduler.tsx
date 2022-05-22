import { NextPage } from "next";
import Head from "next/head";
import CoinsplanAppTemplate from "../../src/views/app";
import SchedulerDisplay from "../../src/views/app/displays/scheduler";

const Scheduler: NextPage = () => {
  return (
    <>
      <Head>
        <title>Coinsplan</title>
      </Head>
      <CoinsplanAppTemplate currentDisplay="scheduler">
        <SchedulerDisplay />
      </CoinsplanAppTemplate>
    </>
  );
};
export default Scheduler;
