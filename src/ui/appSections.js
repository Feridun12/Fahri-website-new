import styled from "styled-components";

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
  width: 170px;
  height: 50px;
  border-radius: 15px;
  border: none;
  color: white;
  background-color: #00aaff;
  font-size: 16px;
`;
