import { Header, Hero, RoundedWrapper } from "../components";
import { Contact, Welcome } from "../components/sections";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <Header
        title="James & Kylie"
        description="James Aspinall & Kylie Clark's wedding website"
      />
      <RoundedWrapper>
        <Hero
          title="James & Kylie's Wedding"
          subtitle="25th Nov 2023 | Hunter Valley"
        />
        <Welcome />
        <hr />
        <div className="flex flex-col md:flex-row p-4">
          <div className="">
            Qui eiusmod laboris adipisicing aliqua sunt adipisicing dolor
            consectetur officia nisi in cupidatat anim. Cupidatat minim
            consequat magna magna ea sit sunt do pariatur pariatur ad. Occaecat
            consectetur aliqua eu nostrud Lorem. Deserunt commodo Lorem nostrud
            ipsum nisi enim nisi ut amet in.
          </div>
          <Contact />
        </div>
      </RoundedWrapper>
    </div>
  );
}
