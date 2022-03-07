import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

export default function Expenses() {
  return (
    <Layout>
      <>
        <Head>
          <title>SIMP - Expenses</title>
        </Head>
        <h1>Expenses</h1>
      </>
    </Layout>
  );
}
