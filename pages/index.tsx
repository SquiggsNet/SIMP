import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link';
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.scss";

const Home: NextPage = () => {
  return (
    <Layout home>
      <>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>Getting it done</p>
          <Link href="/expenses/expenses">
            <a>Expenses</a>
          </Link>
        </section>
      </>
    </Layout>
  );
}

export default Home
