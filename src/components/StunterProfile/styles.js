import styled from "styled-components/macro";

export const PseudoCardOne = styled.div`
  content: "";
  height: 350px;
  width: 350px;
  background: rgba(143, 127, 97, 0.6);
  border-radius: 5px;
  position: absolute;
  transform: rotate(-20deg);
`;
export const PseudoCardTwo = styled.div`
  content: "";
  height: 350px;
  width: 350px;
  background: rgba(143,127,97,0.8);
  border-radius: 5px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: "Playfair Display", serif;
  font-size: 64px;
  text-transform: uppercase;
  transform: rotate(-10deg);

  }
`;

export const Card = styled.div`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)),
    url(${(props) => props.background});
  background-size: 100%;
  text-align: center;

  width: 350px;
  height: 350px;
  border-radius: 5px;
  perspective: 1000px;
  position: absolute;
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
