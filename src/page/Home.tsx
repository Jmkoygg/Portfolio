import React from "react";
import Header from "../components/Header";
import Introduction from "../components/Introduction";
import Methodology from "../components/Methodology";
import Approach from "../components/Approach";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import FadeInSection from "../components/FadeInSection";
import ScrollBackground from "../components/ScrollBackground";

const Home: React.FC = () => {
  return (
    <>
      <ScrollBackground />
      <Header />
      <FadeInSection>
        <Introduction />
      </FadeInSection>
      <FadeInSection>
        <Methodology />
      </FadeInSection>
      <FadeInSection>
        <Approach />
      </FadeInSection>
      <FadeInSection>
        <Projects />
      </FadeInSection>
      <FadeInSection>
        <Footer />
      </FadeInSection>
    </>
  );
};

export default Home;
