import type { NextPage } from "next";
import Head from "next/head";
import SchedulerPage from "../../src/views/app/scheduler";

const Scheduler: NextPage = () => {
  return (
    <>
      <Head>
        <title>Scheduler</title>
      </Head>
      <SchedulerPage />
    </>
  );
};

export default Scheduler;
