import styled from "styled-components";
import { SectionParagraph } from "./appSections";

export const AboutMeImg = styled.img`
  width: 90%;
  border-radius: 12px;
  height: 250px;
  margin-top: 20px;
`;

export const AboutMeList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AboutMeListPoint = styled.li`
  overflow: visible;
  width: 80%;
  margin-top: 15px;
  text-align: center;
`;

export const AboutMeParagraph = styled(SectionParagraph)`
  width: 100%;
`;
