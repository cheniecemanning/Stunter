import React, { useContext } from "react";
import {
  StatsBar,
  StatsBarTitle,
  StatsBarDesc,
  StatsBarSkills,
} from "./styles";
import StunterStateContext from "../../context/StunterStateContext";
import { Container, Row, Col } from "reactstrap";

const StunterStatsBar = () => {
  const state = useContext(StunterStateContext);
  const { currentStunter } = state;
  return currentStunter ? (
    <Container key={currentStunter.lastName} data-testid="skills">
      <Row className="mt-5">
        <StatsBar>
          <h1>Stats</h1>
          <Row>
            <Col>
              <StatsBarTitle>{currentStunter.firstName}</StatsBarTitle>
              <StatsBarDesc>Name</StatsBarDesc>
            </Col>
            <Col>
              <StatsBarTitle>{currentStunter.age}</StatsBarTitle>
              <StatsBarDesc>Age</StatsBarDesc>
            </Col>
            <Col>
              <StatsBarTitle>{currentStunter.height}<span>CM</span></StatsBarTitle>
              <StatsBarDesc>Height</StatsBarDesc>
            </Col>
            <Col>
              <StatsBarTitle>{currentStunter.weight}<span>KG</span></StatsBarTitle>
              <StatsBarDesc>Weight</StatsBarDesc>
            </Col>
          </Row>
        </StatsBar>
      </Row>
      <Row className="mt-5">
        <StatsBarSkills>
          <h3>Skills</h3>
          <p>{currentStunter.skills.join(" - ")}</p>
        </StatsBarSkills>
      </Row>
    </Container>
  ) : null;
};

export default StunterStatsBar;
