import Head from "next/head";
import DashboardPage from "../components/DashboardPage";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dashboard</title>
      </Head>
      <DashboardPage />
    </div>
  );
}
