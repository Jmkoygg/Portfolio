import { useEffect, useState } from "react";
import styled from "styled-components";

const BackgroundContainer = styled.div<{ $bgColor: string }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: ${(props) => props.$bgColor};
  transition: background-color 1s ease-in-out;
`;

const ScrollBackground = () => {
  const [bgColor, setBgColor] = useState("#0f1624"); // Default dark blue

  useEffect(() => {
    const handleScroll = () => {
      const freeladashParams = document.getElementById("featured-freeladash")?.getBoundingClientRect();
      const perfumesParams = document.getElementById("featured-perfumes")?.getBoundingClientRect();
      const blogParams = document.getElementById("featured-blog")?.getBoundingClientRect();
      
      const windowHeight = window.innerHeight;

      // Logic: If active section is roughly in the middle of the screen
      if (freeladashParams && freeladashParams.top < windowHeight * 0.6 && freeladashParams.bottom > windowHeight * 0.4) {
        setBgColor("#1e3a8a"); // Brighter Blue for Freeladash
      } else if (perfumesParams && perfumesParams.top < windowHeight * 0.6 && perfumesParams.bottom > windowHeight * 0.4) {
        setBgColor("#6b2707"); // More vibrant Dark Orange for Perfumes
      } else if (blogParams && blogParams.top < windowHeight * 0.6 && blogParams.bottom > windowHeight * 0.4) {
        setBgColor("#0f3d39"); // Deep Teal/Green for Blog
      } else {
        setBgColor("#0f1624"); // Default
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <BackgroundContainer $bgColor={bgColor} />;
};

export default ScrollBackground;
