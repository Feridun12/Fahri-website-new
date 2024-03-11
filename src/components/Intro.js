import React from "react";
import profilePic from "../images/intro/rotterdam-profil.jpeg";
import { SectionWrapper, PageSection } from "../ui/appSections";
import {
  IntroImageWrapper,
  IntroImage,
  Diamond,
} from "../ui/introStyledComponents";

function Intro() {
  return (
    <SectionWrapper id="Anasayfa">
      <PageSection>
        <IntroImageWrapper>
          <Diamond>
            <IntroImage
              src={profilePic}
              alt="to be determined after the pic submission of the client"
            />
          </Diamond>
        </IntroImageWrapper>
      </PageSection>
      <PageSection></PageSection>
    </SectionWrapper>
  );
}

export default Intro;
