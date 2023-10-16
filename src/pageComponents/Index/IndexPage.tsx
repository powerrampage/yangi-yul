import { AboutSection, ControlKeySection, GetKeys, HandBookSection, HeaderSection } from "./sections";

const IndexPage = () => {
  return (
    <div>
      <HeaderSection />

      <GetKeys />

      <ControlKeySection />

      <AboutSection />

      <HandBookSection />
    </div>
  );
};

export default IndexPage;
