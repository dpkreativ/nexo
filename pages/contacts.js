import Head from "next/head";
import AllContactsPage from "../components/AllContactsPage";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Contacts</title>
      </Head>

      <AllContactsPage />
    </div>
  );
}
