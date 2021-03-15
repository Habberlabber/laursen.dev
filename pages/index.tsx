import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Laursen.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Welcome to <a href="https://laursen.dev">Laursen.dev</a>
        </h1>
      </main>
    </div>
  );
}
