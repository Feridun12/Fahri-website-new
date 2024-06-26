import styled from "styled-components";
import { mainBlueColor } from "../constants/constants";

export const SectionWrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
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
