import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.scss";
import utilStyles from "../styles/utils.module.scss";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

type Props = {
  children: JSX.Element;
  home?: boolean;
};
export const siteTitle = "SIMP - Self Improvement Management Planner";

export default function Layout({ children, home }: Props) {
  const { data: session } = useSession();
  return (
    <>
      <div className={styles.nav}>
        <div>Simp</div>
        <div>
          {session ? (
            <>
              {session.user?.image ? (
                <Image
                  priority
                  src={session.user?.image}
                  className={utilStyles.borderCircle}
                  height={40}
                  width={40}
                  alt={session.user?.name || ""}
                />
              ) : (
                session.user?.name
              )}
              <button onClick={() => signOut()}>Sign out</button>
            </>
          ) : (
            <button onClick={() => signIn()}>Sign in</button>
          )}
        </div>
      </div>
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name={siteTitle}
            content="Continous growth and learning directed at code and life improvement."
          />
          <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        {session ? (
          <main>{children}</main>
        ) : (
          <>
            <p>Not Signed In</p>
            <button onClick={() => signIn()}>Sign in</button>
          </>
        )}
        <footer className={styles.footer}>
          copyright &copy; Scott Rafael 2022 (SquiggsNet{" "}
          <span className={styles.logo}>
            <Image
              src="/favicon.ico"
              alt="SquiggsNetLogo"
              width={16}
              height={16}
            />
          </span>
          )
        </footer>
      </div>
    </>
  );
}
