import styled from "styled-components";

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
