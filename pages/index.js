import Head from "next/head";
import Hero from "../components/Hero";
import RoundedWrapper from "../components/RoundedWrapper";
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

      <RoundedWrapper>
        <Hero
          title="James & Kylie Wedding"
          subtitle="25th Nov 2023 | Hunter Valley"
        />
        <div className="p-4">
          <p className="font-semibold my-4">
            Welcome to our little wedding space on the internet 👋{" "}
          </p>
          <p>
            Labore aliqua aliqua aute in. Labore aute ut adipisicing irure in do
            amet adipisicing voluptate. Elit id consectetur amet occaecat irure
            ad veniam commodo. Velit aliquip magna quis dolor ullamco mollit
            occaecat aliqua. Proident dolore magna voluptate nostrud deserunt
            aliqua deserunt non aliqua velit elit ea cupidatat.
          </p>
          <p className="mt-4">Lots of Love</p>
          <p>James & Kylie </p>
        </div>
      </RoundedWrapper>
    </div>
  );
}
