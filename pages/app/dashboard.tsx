import type { NextPage } from "next";
import Head from "next/head";
import DashboardPage from "../../src/views/app/dashboard";
import SchedulerPage from "../../src/views/app/scheduler";

const Dashboard: NextPage = () => {
  return (
    <>
      <Head>
        <title>Coinsplan Dashboard</title>
      </Head>
      <DashboardPage />
    </>
  );
};

export default Dashboard;
