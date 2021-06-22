import styled from "styled-components/macro";

export const Card = styled.div`
  align-items: center;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)),
    url(${(props) => props.background});
  background-size: 100%;
  display: flex;
  height: 350px;
  justify-content: center;
  text-align: center;
  width: 350px;
  z-index: 100;

  p {
    color: white;
    font-family: "Playfair Display", serif;
    font-size: 64px;
    text-transform: uppercase;
  }

  img {
    height: auto;
    width: 350px;
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

export const NoSaved = styled.div`
font-family: "Playfair Display";
  font-size: 95px;
`;
