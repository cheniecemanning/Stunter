import styled from "styled-components/macro";

export const PseudoCardOne = styled.div`
  background: rgba(143, 127, 97, 0.6);
  border-radius: 5px;
  content: "";
  position: absolute;
  transform: rotate(-20deg);

  height: 350px;
  width: 350px;
`;

export const PseudoCardTwo = styled.div`
  align-items: center;
  background: rgba(143, 127, 97, 0.8);
  border-radius: 5px;
  color: white;

  content: "";
  display: flex;
  font-family: "Playfair Display", serif;
  font-size: 64px;
  justify-content: center;
  position: absolute;
  text-transform: uppercase;
  transform: rotate(-10deg);

  height: 350px;
  width: 350px;
`;

export const Card = styled.div`
  align-items: center;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)),
    url(${(props) => props.background});
  background-size: 100%;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  position: absolute;
  text-align: center;
  z-index: 100;

  width: 350px;
  height: 350px;

  img {
    width: 350px;
    height: auto;
  }

  p {
    color: white;
    font-family: "Playfair Display", serif;
    font-size: 64px;
    text-transform: uppercase;
  }
`;
