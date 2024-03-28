import React from "react";
import profilePic from "../images/intro/rotterdam-profil.jpeg";
import { Button } from "../ui/appSections";
import {
  IntroSectionWrapper,
  IntroImageWrapper,
  IntroImage,
  Diamond,
  IntroLeftSection,
  IntroRightSection,
  IntroTitleWrapper,
  IntroTitle,
  IntroSubTitle,
  IntroQuote,
  IntroLink,
} from "../ui/introStyledComponents";

function Intro() {
  return (
    <IntroSectionWrapper id="Anasayfa">
      <IntroLeftSection>
        <IntroImageWrapper>
          <Diamond></Diamond>
        </IntroImageWrapper>
        <IntroImage
          src={profilePic}
          alt="to be determined after the pic submission of the client"
        />
      </IntroLeftSection>
      <IntroRightSection>
        <IntroTitleWrapper>
          <IntroTitle>Fahri Erbulak</IntroTitle>
          <IntroSubTitle>Dil Terapisti</IntroSubTitle>
        </IntroTitleWrapper>
        <IntroQuote>Bireysel sağlık, güçlü iletişimle desteklenir.</IntroQuote>
        <IntroLink
          href="https://www.medicana.com.tr/saglik-rehberi-detay/17952/dil-ve-konusma-terapisi-nedir"
          target="_blank"
          rel="noreferrer"
        >
          <Button>Dil Terapisti nedir ?</Button>
        </IntroLink>
      </IntroRightSection>
    </IntroSectionWrapper>
  );
}

export default Intro;
