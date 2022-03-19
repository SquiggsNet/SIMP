import type { NextPage } from 'next'
import Head from 'next/head'
import Image from "next/image";
import Layout, { siteTitle } from "../components/Layout";
import utilStyles from "../styles/utils.module.scss";
import { useSession } from "next-auth/react";

const Home: NextPage = () => {
  const { data: session } = useSession();
  const profilePic = session?.user?.image || "/images/profile.jpg";
  const name = session?.user?.name || "/images/profile.jpg";
  return (
    <Layout home>
      <>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <header className={utilStyles.header}>
          <Image
            priority
            src={profilePic}
            className={utilStyles.borderCircle}
            height={144}
            width={144}
            alt={name}
          />
          <h1 className={utilStyles.heading2Xl}>{name}</h1>
        </header>
        <section className={utilStyles.headingMd}>
          <p>Getting it done</p>
        </section>
      </>
    </Layout>
  );
}

export default Home
