import styled from "styled-components/macro";

export const StatsBar = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  h1 {
    font-family: "Nunito Sans";
    font-weight: bold;
    text-transform: uppercase;
  }
`;

export const StatsBarTitle = styled.p`
  font-family: "Playfair Display";
  font-size: 55px;
`;

export const StatsBarDesc = styled.h2`
  font-family: "Nunito Sans";
  font-weight: bold;
  text-transform: uppercase;
`;

export const StatsBarSkills = styled.div`
  text-align: center;

  h3 {
    font-family: "Nunito Sans";
    text-transform: uppercase;
    font-weight: bold;
  }

  p {
    font-family: "Nunito Sans";
    text-transform: uppercase;
    font-weight: bold;
    font-size: 35px;
  }
`;
