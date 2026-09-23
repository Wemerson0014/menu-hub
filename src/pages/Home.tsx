import Hero from "../components/Hero/Hero";
import MenuSection from "../components/MenuSection/MenuSection";
import AboutSection from "../components/AboutSection/AboutSection";
import { useOutletContext } from "react-router-dom";

function Home() {
  const searchTerm = useOutletContext<string>();

  return (
    <>
      <Hero />
      <MenuSection searchTerm={searchTerm} />
      <AboutSection />
    </>
  );
}

export default Home;
