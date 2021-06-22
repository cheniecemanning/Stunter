import React, { useContext } from "react";
import StunterStateContext from "../../context/StunterStateContext";
import { Card, CardTitle, CardSkills, NoSaved } from "./styles";
import { Container, Row, Col } from "reactstrap";

const SavedStunters = () => {
  const state = useContext(StunterStateContext);
  const { savedStunters } = state;

  console.log(savedStunters);
  const show = savedStunters.map((stunter) => (
    <Row className="mt-3" key={stunter.lastName}>
      <Col>
        <Card
          className="stunterCard"
          key={stunter.firstName}
          id={stunter.id}
          background={`${stunter.img}`}
          draggable="true"
        ></Card>
      </Col>
      <Col>
        <CardTitle> {stunter.firstName}</CardTitle>
        <CardSkills>
          <p>{stunter.skills.join(" - ")}</p>
        </CardSkills>
      </Col>
    </Row>
  ));

  return (
    <Container>
      {savedStunters.length === 0 ? (
        <NoSaved>Go back and "Like" a Stunter to have them show up here :)</NoSaved>
      ) : (
        show
      )}
    </Container>
  );
};

export default SavedStunters;
