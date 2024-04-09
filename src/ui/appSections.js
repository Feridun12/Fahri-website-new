import styled from "styled-components";
import { mainBlueColor } from "../constants/constants";

export const SectionWrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SectionContentWrapper = styled.div`
  overflow: auto;
  width: 100%;
`;

export const SectionContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  margin-bottom: 5px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const SectionTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 100%;
`;

export const SectionTitle = styled.h1`
  height: 55px;
  width: 240px;
  font-size: 30px;
  font-weight: 500;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: ${mainBlueColor};
  border-bottom: 3px solid #cccccc;
`;

export const SectionSubTitle = styled.h3`
  color: ${mainBlueColor};
  font-size: 19px;
  font-weight: 600;
  height: 40px;
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const SectionParagraph = styled.p`
  font-size: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  width: 90%;
  height: 120px;
  font-size: 15px;
  height: max-content;
  padding-top: 10px;
  padding-bottom: 10px;
`;

// could be used for right and left section
export const PageSection = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  width: 200px;
  height: 60px;
  border-radius: 15px;
  border: none;
  color: white;
  background-color: ${mainBlueColor};
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 170, 255, 0.8);
    -moz-box-shadow: 0px 0px 10px 0px rgba(0, 170, 255, 0.8);
    box-shadow: 0px 0px 10px 0px rgba(0, 170, 255, 0.8);
    background-color: white;
    color: ${mainBlueColor};
  }
`;
