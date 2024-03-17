import React from "react";
import profilePic from "../images/intro/rotterdam-profil.jpeg";
import { SectionWrapper, PageSection } from "../ui/appSections";
import {
  IntroImageWrapper,
  IntroImage,
  Diamond,
  IntroLeftSection,
} from "../ui/introStyledComponents";

function Intro() {
  return (
    <SectionWrapper id="Anasayfa">
      <IntroLeftSection>
        <IntroImageWrapper>
          <Diamond></Diamond>
        </IntroImageWrapper>
        <IntroImage
          src={profilePic}
          alt="to be determined after the pic submission of the client"
        />
      </IntroLeftSection>
      <PageSection></PageSection>
    </SectionWrapper>
  );
}

export default Intro;
