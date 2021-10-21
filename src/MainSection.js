import AboutSection from "./Components/AboutSection";
import CostumesSection from "./Components/CostumesSection";
import Home from "./Components/Home";
import ResourcesSection from "./Components/ResourcesSection";
import Footer from "./Components/Footer/index";
import Subscribe from "./Components/Subscribe";

const MainSection = () => {
  return (
    <>
      <Home />
      <AboutSection />
      <ResourcesSection />
      <CostumesSection />
      <Subscribe />
      <Footer />
    </>
  );
};

export default MainSection;
