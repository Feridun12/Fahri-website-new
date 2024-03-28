import styled from "styled-components";
import { mainBlueColor } from "../constants/constants";

export const IntroSectionWrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const IntroLeftSection = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const IntroRightSection = styled.section`
  width: 100%;
  height: 475px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    height: 100%;
    align-items: start;
    justify-content: center;
    gap: 100px;
    padding-left: 10px;
  }
`;

export const IntroImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 20px;
  justify-content: center;
`;

export const Diamond = styled.div`
  width: 450px;
  height: 550px;
  background-color: #ff3a5f;
  border-radius: 350px 0px 350px 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 1444px) and (max-width: 2560px) {
    width: 500px;
    height: 550px;
  }
`;

// the dimensions of the picture is probabloy going to change once we have the actual pictures
export const IntroImage = styled.img`
  position: absolute;
  width: 200px;
  height: 200px;
  height: auto;
  z-index: 1;
`;

export const IntroTitleWrapper = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    align-items: start;
  }
`;

export const IntroTitle = styled.h3`
  color: ${mainBlueColor};
  font-size: 35px;
  font-weight: 500;

  @media screen and (min-width: 1024px) {
    font-size: 50px;
  }

  @media screen and (min-width: 1444px) and (max-width: 2000px) {
    font-size: 57px;
  }

  @media screen and (min-width: 2000px) and (max-width: 2560px) {
    font-size: 60px;
  }
`;

export const IntroSubTitle = styled.h3`
  font-weight: 500;
  font-size: 25px;
  margin-top: 10px;

  @media screen and (min-width: 1024px) {
    font-size: 28px;
  }

  @media screen and (min-width: 1444px) and (max-width: 2000px) {
    font-size: 30px;
  }

  @media screen and (min-width: 2000px) and (max-width: 2560px) {
    font-size: 33px;
  }
`;

export const IntroQuote = styled.h1`
  font-weight: 500;
  font-size: 40px;
  padding-left: 15px;
  padding-right: 15px;
  text-align: center;

  @media screen and (min-width: 768px) {
    padding: 0;
    width: 80%;
    text-align: start;
  }

  @media screen and (min-width: 1024px) and (max-width: 2000px) {
    font-size: 50px;
  }

  @media screen and (min-width: 2000px) and (max-width: 2560px) {
    font-size: 60px;
  }
`;

export const IntroLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
`;
