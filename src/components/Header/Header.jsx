import React, { useContext } from "react";
import StunterStateContext from "../../context/StunterStateContext";
import StunterDispatchContext from "../../context/StunterDispatchContext";

import { Logo, Description } from "./styles";
import { ShowLikedBtn } from "../Buttons/Buttons";
import { Container, Row, Col } from "reactstrap";

const Header = () => {
  const state = useContext(StunterStateContext);
  const dispatch = useContext(StunterDispatchContext);
  const { showSaved } = state;
  return (
    <Container className="mb-5">
      <Row>
        <Col sm="9">
          <Logo>Stunter</Logo>
          <Description>Find your perfect stunt performer</Description>
        </Col>
        <Col>
          <ShowLikedBtn
            onClick={() => {
              dispatch({ type: "SAVED_STUNTERS", payload: !showSaved });
            }}
          >
            {showSaved ? "BACK TO STUNTERS" : "SHOW LIKED STUNTERS"}
          </ShowLikedBtn>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
