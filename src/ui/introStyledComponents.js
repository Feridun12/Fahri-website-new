import styled from "styled-components";

export const IntroSectionWrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  /* align-items: center; */
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

  @media screen and (max-width: 767px) {
    display: none;
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
  width: 100%;
  height: 550px;
  background-color: #ff3a5f;
  border-radius: 350px 0px 350px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// the dimensions of the picture is probabloy going to change once we have the actual pictures
export const IntroImage = styled.img`
  position: absolute;
  width: 200px;
  height: 200px;
  height: auto;
  z-index: 1;
`;

export const IntroRightSection = styled.section`
  width: 100%;
  height: 475px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const IntroTitleWrapper = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const IntroTitle = styled.h3`
  color: #00aaff;
  font-size: 30px;
  font-weight: 500;
`;

export const IntroSubTitle = styled.h3`
  font-weight: 400;
`;

export const IntroQuote = styled.h1`
  font-weight: 500;
  font-size: 40px;
  padding-left: 10px;
  padding-right: 10px;
  text-align: center;
`;
