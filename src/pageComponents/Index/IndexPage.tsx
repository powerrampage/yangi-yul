import { AboutSection, ControlKeySection,  HandBookSection, HeaderSection, NewsSection } from "./sections";
import ServicesSection from "@/pageComponents/Index/sections/ServicesSection";

const IndexPage = () => {
  return (
    <div>
      <HeaderSection />
        <NewsSection/>
        <ServicesSection/>
      <AboutSection />

      <HandBookSection />
    </div>
  );
};

export default IndexPage;
