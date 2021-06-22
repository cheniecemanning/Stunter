import React, { useContext, useRef, useEffect } from "react";
import StunterStateContext from "../../context/StunterStateContext";
import StunterDispatchContext from "../../context/StunterDispatchContext";
import { Container, Row, Col } from "reactstrap";

import { Card, PseudoCardOne, PseudoCardTwo } from "./styles";
import { DislikeButton, ButtonWrapper, LikeButton } from "../Buttons/Buttons";

const DragDropCards = () => {
  const state = useContext(StunterStateContext);
  const dispatch = useContext(StunterDispatchContext);

  const { stunters } = state;
  const currentStunter = useRef();
  const dragStunter = useRef();
  const dragNode = useRef();

  const handleDragStart = (e) => {
    dispatch({ type: "IS_DRAGGING", payload: true });
    state.zone = "selected";
    e.target.style.background = "rgba(143, 127, 96, 0.95)";
    dragNode.current = e.target;
    dragNode.current.addEventListener("dragend", handleClickDragDrop);
  };

  const handleDragEnter = (e) => {
    dragStunter.current = e.target.id;
    dispatch({ type: "IN_DROPZONE", payload: dragStunter.current });
    e.target.style.background = "#D7CDBD";
    return dragStunter.current;
  };

  const handleDragLeave = (e) => {
    e.target.style.background = "transparent";
  };

  const handleClickDragDrop = () => {
    dragStunter.current === "like" || dragStunter.current === "liked"
      ? dispatch(
          { type: "STUNTER_LIKED", payload: true },
          { type: "STUNTER_DISLIKED", payload: false }
        )
      : dispatch(
          { type: "STUNTER_DISLIKED", payload: true },
          { type: "STUNTER_LIKED", payload: false }
        );

    dragStunter.current === "like" || dragStunter.current === "liked"
      ? state.savedStunters.push(currentStunter.current)
      : console.log(null);

    stunters.pop();
    currentStunter.current = stunters[stunters.length - 1];
    stunters.length > 0 && dragNode.current
      ? dragNode.current.removeEventListener("dragend", handleClickDragDrop)
      : console.log(null);

    dispatch({ type: "IS_DRAGGING", payload: false });
    dispatch({ type: "IS_DROPPED", payload: null });
    dispatch({ type: "SET_CURRENT_STUNTER", payload: currentStunter.current });

    dragStunter.current = null;
    dragNode.current = null;
  };

  const handleOnClick = (e) => {
    dispatch({ type: "IN_DROPZONE", payload: dragStunter.current });
    dragStunter.current = e.target.id;
    return handleClickDragDrop();
  };

  const Stunters = stunters.map((stunter) => (
    <Card
      className="stunterCard"
      key={stunter.firstName}
      id={stunter.id}
      background={`${stunter.img}`}
      draggable="true"
      onDragStart={(e) => {
        handleDragStart(e, stunter.firstName);
      }}
      onDrop={handleClickDragDrop}
    >
      <p>{state.zone}</p>
    </Card>
  ));

  useEffect(() => {
    currentStunter.current = state.stunters.find(
      (stunter) => stunter.id === stunters.length - 1
    );
    currentStunter !== null
      ? dispatch({
          type: "SET_CURRENT_STUNTER",
          payload: currentStunter.current,
        })
      : console.log(null);

    return currentStunter.current;
  }, [state.stunters, dispatch, stunters.length]);

  return (
    <Container>
      <Row>
        <Col sm="4">
          <ButtonWrapper
            id="dislike"
            onDragEnterCapture={handleDragEnter}
            onDragLeave={handleDragLeave}
          >
            <DislikeButton id="disliked" onClick={handleOnClick}>
              &#215;
            </DislikeButton>
          </ButtonWrapper>
        </Col>
        <Col sm="4" className="cards">
          <PseudoCardOne />
          <PseudoCardTwo>No More Stunters</PseudoCardTwo>
          <div id="getme">{Stunters}</div>
        </Col>
        <Col sm="4">
          <ButtonWrapper
            id="like"
            onDragEnterCapture={handleDragEnter}
            onDragLeave={handleDragLeave}
          >
            <LikeButton id="liked" onClick={handleOnClick}>
              &#x2713;
            </LikeButton>
          </ButtonWrapper>
        </Col>
      </Row>
    </Container>
  );
};

export default DragDropCards;
