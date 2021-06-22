import styled from "styled-components/macro";

export const ShowLikedBtn = styled.button`
  padding: 1rem;
  background: #22252b;
  color: white;
  font-family: "Nunito Sans";
  text-transform: uppercase;
  font-weight: bold;
  font-size: 19px;
  border-radius: 5px;
  border: none;
  border-top-left-radius: 0px;
  border-top-right-radius 0px;

`;

export const ButtonWrapper = styled.div`
  height: 350px;
  width: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  font-weight: 800;
`;

export const DislikeButton = styled.button`
  background: transparent;
  border: solid #22252b 4px;
  color: #22252b;
  border-radius: 100%;
  width: 100px;
  height: 100px;
`;
export const LikeButton = styled.button`
  background: transparent;
  border: solid #22252b 4px;
  color: #22252b;
  border-radius: 100%;
  width: 100px;
  height: 100px;
`;
