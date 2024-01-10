import React, { useState } from "react";
import { Element } from "react-scroll";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import foo from "../images/foo.png";
import { Title, Loading } from "./globalStyledComponents";
import bolta from "../images/bolta-logo-white.png";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { useIsMobile } from "../hooks/useIsMobile";
import { Icon } from "@iconify/react";

const Section = styled.section`
  min-height: 100vh;
  max-width: 70vw;
  white-space: pre-line;

  margin: 0 auto;
  text-align: center;
  flex-basis: content;
  padding-top: var(--nav-height);

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
    margin-bottom: 2vh;
  }

  .description {
    font-size: 1.5rem;
    font-weight: 250;
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

  .together {
    font-size: 2rem;
    font-weight: 200;
  }
`;

export default function Sponsors() {
  const { ref, inView } = useInView({
    root: null,
    rootMargin: "0px",
    threshold: 0,
  });

  return (
    <Element name={"Sponsors"} id="sponsors">
      <Section
        className={`d-flex flex-column justify-content-around ${
          inView ? "in" : ""
        }`}
        ref={ref}
      >
        <div>
          <p className="title mb-5">Sponsors</p>
          <Container>
            <Row>
              <Col xl={6}>
                <a
                  href="https://bit.ly/4aTsynI"
                  target="_blank"
                  rel="noreferrer"
                  className="text-decoration-none"
                >
                  <Card className="p-3">
                    <img
                      src={bolta}
                      alt="bolta logo"
                      width="75%"
                      className="my-0 mx-auto"
                    />
                    <div>
                      <span className="description">
                        {
                          "세금계산서에서 파생되는 모든 문제, \n 볼타가 해결합니다."
                        }
                      </span>
                    </div>
                  </Card>
                </a>
              </Col>
            </Row>
          </Container>
        </div>
        {/* <div>
        <p className="title mb-5">함께하는 사람들</p>
        <Container>
          <Row>
            <Col xl={4}>
              <Card className="">
              <Card.Body className="">
                <div className="d-flex text-black">
                  <div className="flex-shrink-0">
                    <Card.Img
                      src={foo}
                      alt="Generic placeholder image"
                      className="img-fluid"
                      style={{ width: '180px', borderRadius: '10px' }}
                    />
                  </div>
                  <div className="flex-grow-1 d-flex flex-column justify-content-center ms-3">
                    <Card.Title as="h5" className="mb-1">이준형</Card.Title>
                    <Card.Text className="mb-2 pb-1" style={{ color: '#2b2a2a' }}>
                      @foo <Icon icon="mdi:github" />
                    </Card.Text>
                  </div>
                </div>
              </Card.Body>
              </Card>
            </Col>
            </Row>
            <Row>
            <Col xl={4}>
              <Card className="p-3">
              <h1>신수웅</h1>
              </Card>
            </Col>
            <Col xl={4}>
              <Card className="p-3">
              <h1>최진영</h1>
              </Card>
            </Col>
            <Col xl={4}>
              <Card className="p-3">
              <h1>우혜진</h1>
              </Card>
            </Col>
          </Row>
        </Container>
        </div> */}
      </Section>
    </Element>
  );
}
