import React from "react";
// import { IntroSectionWrapper } from "../ui/introStyledComponents";
import {
  SectionWrapper,
  SectionTitleWrapper,
  SectionContentWrapper,
  PageSection,
  SectionTitle,
} from "../ui/appSections";

function AboutMe() {
  return (
    <SectionWrapper id="Hakkımızda">
      <SectionTitleWrapper>
        <SectionTitle>Hakkımızda</SectionTitle>
      </SectionTitleWrapper>
      <SectionContentWrapper>
        <PageSection>Hello</PageSection>
        <PageSection>World</PageSection>
      </SectionContentWrapper>
    </SectionWrapper>
  );
}

export default AboutMe;
