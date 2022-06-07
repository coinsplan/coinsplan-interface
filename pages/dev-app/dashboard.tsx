import type { NextPage } from "next";
import Head from "next/head";
import DashboardPage from "../../src/views/dev-app/dashboard";
import SchedulerPage from "../../src/views/dev-app/scheduler";

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
