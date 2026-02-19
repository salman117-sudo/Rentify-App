import Hero from "../../components/userPagesComponents/homeComponents/Hero";
import Categories from "../../components/userPagesComponents/homeComponents/Categories";
import Featured from "../../components/userPagesComponents/homeComponents/Featured";
import Stats from "../../components/userPagesComponents/homeComponents/Stats";
import CTA from "../../components/userPagesComponents/homeComponents/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <Featured />
      <Stats />
      <CTA />
    </>
  );
}
