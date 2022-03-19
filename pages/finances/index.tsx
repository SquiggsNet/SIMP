import Head from "next/head";
import Layout from "../../components/Layout";
import { Text, Title } from "@mantine/core";

export default function Finances() {
  return (
    <Layout>
      <div
        style={{
          display: "flex",
          gap: "10px",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Head>
          <title>SIMP - Finances</title>
        </Head>
        <Title order={2}>Finances</Title>
      </div>
    </Layout>
  );
}
