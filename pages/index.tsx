import type { NextPage } from 'next'
import Head from 'next/head'
import Layout, { siteTitle } from "../components/Layout";
import { useSession } from "next-auth/react";
import { Image, Text, Title } from "@mantine/core";

const Home: NextPage = () => {
  const { data: session } = useSession();
  const profilePic = session?.user?.image || "/images/profile.jpg";
  const name = session?.user?.name || "/images/profile.jpg";
  return (
    <Layout>
      <div
        style={{
          display: "flex",
          gap: "10px",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <Image
          src={profilePic}
          height={250}
          width={250}
          radius="xl"
          alt={name}
        />
        <Title order={2}>{name}</Title>
        <Text size="sm">Insert Motivational Line Here</Text>
      </div>
    </Layout>
  );
}

export default Home
