import React, { useState, useRef, useEffect, useCallback } from "react";
import { ModalHeader } from "reactstrap";
import { Button } from "./Button";
import styled from "styled-components";
import "./LoginForm.css";
import { useSpring, animated } from "react-spring";
import TBall from '../app/assets/img/TBall.jpg';
import { MdClose } from "react-icons/md";

const ModalWrapper = styled.div`
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  margin: auto;
  z-index: 10;
  border-radius: 10px;
`;

const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;
  background-position: center;
  background-size: cover;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.5;
  background-color: #141414;
  border-radius: 0 10px 10px 0;
  color: white;
`;

const CloseModalButton = styled(MdClose)`
  color: #fff;
  cursor: pointer;
  position: absolute;
  top: 35vh;
  right: 32px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const LoginForm = ({ modalOpen, setModalOpen }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: modalOpen ? 1 : 0,
    transform: modalOpen ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setModalOpen(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && modalOpen) {
        setModalOpen(false);
        console.log("I pressed");
      }
    },
    [setModalOpen, modalOpen]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {modalOpen ? (
        <div className="background" onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper modalOpen={modalOpen}>
              <ModalImg src={TBall} alt="tennis ball and net" />
              <ModalContent>
                <ModalHeader>
                  <h1>JOIN US NOW</h1>
                </ModalHeader>
                <Button buttonStyle="btn--outline" buttonSize="btn--medium">
                  Log in with Email
                </Button>
                <p>or</p>
                <Button buttonStyle="btn--primary" buttonSize="btn--medium">
                  Log in with Google
                </Button>
              </ModalContent>
              <CloseModalButton
                aria-label="Close modal"
                onClick={() => setModalOpen((prev) => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </div>
      ) : null}
    </>
  );
};
