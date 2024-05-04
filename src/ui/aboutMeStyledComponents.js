import styled from "styled-components";
import { SectionParagraph, SectionContent } from "./appSections";

export const AboutMeImg = styled.img`
  width: 90%;
  border-radius: 12px;
  height: 250px;
`;

export const AboutMeList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media screen and (min-width: 768px) {
    max-height: 250px;
    overflow: scroll;
  }
`;

export const AboutMeListPoint = styled.li`
  overflow: visible;
  width: 80%;
  margin-top: 15px;
  text-align: center;
`;

export const AboutMeParagraph = styled(SectionParagraph)`
  width: 100%;
  display: flex;
  justify-content: center;
`;

// created this component so we could show the content in a column reverse way.
// it has been implemented because of the design choices I have made.
export const AboutMeSecondSection = styled(SectionContent)`
  flex-direction: column-reverse;
  /* margin-top: 5%; */
  margin-top: 5px;
  margin-bottom: 5px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
