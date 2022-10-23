import Head from "next/head";
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>James & Kylie Wedding</title>
        <meta
          name="description"
          content="James Aspinall and Kylie Clark Wedding Website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-4xl text-indigo-600">Hello World</main>
    </div>
  );
}
