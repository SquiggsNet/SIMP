import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import {
  AppShell,
  Burger,
  Button,
  Header,
  Image,
  MediaQuery,
  Navbar,
  useMantineTheme,
} from "@mantine/core";
import { useSession, signIn, signOut } from "next-auth/react";

type Props = {
  children: JSX.Element;
};
export const siteTitle = "SIMP - Self Improvement Management Planner";

export default function Layout({ children }: Props) {
  const { data: session } = useSession();
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();

  return (
    <>
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
      <AppShell
        // navbarOffsetBreakpoint controls when navbar should no longer be offset with padding-left
        navbarOffsetBreakpoint="sm"
        // fixed prop on AppShell will be automatically added to Header and Navbar
        fixed
        navbar={
          <Navbar
            p="md"
            // Breakpoint at which navbar will be hidden if hidden prop is true
            hiddenBreakpoint="sm"
            // Hides navbar when viewport size is less than value specified in hiddenBreakpoint
            hidden={!opened}
            // when viewport size is less than theme.breakpoints.sm navbar width is 100%
            // viewport size > theme.breakpoints.sm – width is 300px
            // viewport size > theme.breakpoints.lg – width is 400px
            width={{ sm: 200, lg: 300 }}
          >
            <Navbar.Section grow mt="md">
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  flexDirection: "column"
                }}
              >
                <Link href="/" passHref>
                  <Button fullWidth={true} component="a">
                    Home
                  </Button>
                </Link>
                <Link href="/finances" passHref>
                  <Button fullWidth={true} component="a">
                    Finances
                  </Button>
                </Link>
              </div>
            </Navbar.Section>
            <Navbar.Section>
              {session ? (
                <div
                  style={{
                    display: "flex",
                    gap: "10px"
                  }}
                >
                  {session.user?.image && (
                    <Image
                      height={40}
                      width={40}
                      radius="xl"
                      src={session.user?.image}
                      alt={session.user?.name || "profile-pic"}
                    />
                  )}
                  <Button
                    fullWidth={true}
                    component="a"
                    onClick={() => signOut()}
                  >
                    Sign out
                  </Button>
                </div>
              ) : (
                <Button fullWidth={true} component="a" onClick={() => signIn()}>
                  Sign in
                </Button>
              )}
            </Navbar.Section>
          </Navbar>
        }
        header={
          <Header height={70} p="md">
            {/* Handle other responsive styles with MediaQuery component or createStyles function */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  color={theme.colors.gray[6]}
                  mr="xl"
                />
              </MediaQuery>

              <div>SIMP</div>
              <div>
                {session ? (
                  <>
                    {session.user?.image ? (
                      <Image
                        height={40}
                        width={40}
                        radius="xl"
                        src={session.user?.image}
                        alt={session.user?.name || "profile-pic"}
                      />
                    ) : (
                      session.user?.name
                    )}
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </Header>
        }
      >
        {session ? (
          <main>{children}</main>
        ) : (
          <>
            <p>Not Signed In</p>
            <button onClick={() => signIn()}>Sign in</button>
          </>
        )}
      </AppShell>
    </>
  );
}