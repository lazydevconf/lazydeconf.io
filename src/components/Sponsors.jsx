import React, { useState } from "react";
import { Element } from "react-scroll";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Title, Loading } from "./globalStyledComponents";
import bolta from "../images/bolta-logo-white.png";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { useIsMobile } from "../hooks/useIsMobile";

const Section = styled.section`
  min-height: 100vh;
  max-width: 70vw;
  white-space: pre-line;

  margin: 0 auto;
  text-align: center;
  flex-basis: content;
  padding: var(--nav-height) 0 20px;

  opacity: 0;
  transition: 1s all ease-in-out;

  &.in {
    opacity: 1;
  }

  p {
    margin: 0;
  }
  .title {
    font-size: 4rem;
    text-align: center;
    font-weight: 600;
    margin-bottom: 10vh;
  }

  .description {
    font-size: 1.5rem;
    font-weight: 250;
  }

  img {
    width: 100%; /* or any custom size */
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 1280px) {
    .description {
      font-size: 1rem;
    }
  }

  @media (max-width: 768px) {
    min-height: auto;
    max-width: 90vw;
    .title {
      font-size: 3rem;
      margin-bottom: 2vh;
    }
  }

  .card {
    border: none;
    border-radius: 10px;
    height: 100%;
  }
`;

export default function Sponsors() {
  const { ref, inView } = useInView({
    root: null,
    rootMargin: "0px",
    threshold: 0,
  });
  const isMobile = useIsMobile();

  return (
    <Element name={"Sponsors"} id="sponsors">
      <Section className={`d-flex flex-column ${inView ? "in" : ""}`} ref={ref}>
        <p className="title">Sponsors</p>
        <Container className="mt-4 mb-3">
          <Row>
            <Col xl={6}>
              <Card className="p-3">
                <a
                  href="https://bit.ly/4aTsynI"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={bolta} alt="bolta logo" />
                </a>
                <div>
                  <span className="description">
                    {"세금계산서에서 파생되는 모든 문제, \n 볼타가 해결합니다."}
                  </span>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </Section>
    </Element>
  );
}
