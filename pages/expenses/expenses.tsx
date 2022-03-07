import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import styles from "../../components/layout.module.scss";

export default function Expenses() {
  return (
    <Layout>
      <>
        <Head>
          <title>SIMP - Expenses</title>
        </Head>
        <h1>Expenses</h1>
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      </>
    </Layout>
  );
}
