import Head from "next/head";
import Hero from "../components/Hero";
export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>James & Kylie Wedding</title>
        <meta
          name="description"
          content="James Aspinall and Kylie Clark Wedding Website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="rounded-t-3xl overflow-hidden">
        <Hero
          title="James & Kylie Wedding"
          subtitle="25th Nov 2023 | Hunter Valley"
        />
      </main>
    </div>
  );
}
