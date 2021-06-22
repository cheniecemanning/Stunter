import styled from "styled-components/macro";

export const Card = styled.div`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)),
    url(${(props) => props.background});
  background-size: 100%;
  text-align: center;

  width: 350px;
  height: 350px;
  perspective: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;

  p {
    color: white;
    font-family: "Playfair Display", serif;
    font-size: 64px;
    text-transform: uppercase;
  }

  img {
    width: 350px;
    height: auto;
  }
`;


export const CardTitle = styled.p`
  font-family: "Playfair Display";
  font-size: 55px;
`;

export const CardSkills = styled.div`
  text-align: center;
  h3 {
    font-family: "Nunito Sans";
    text-transform: uppercase;
  }

  p {
    font-family: "Nunito Sans";
    text-transform: uppercase;
    font-weight: bold;
    font-size: 35px;
  }
`;
