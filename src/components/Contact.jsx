import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
// Components
import { Container, Col, Row, Button, Image} from "react-bootstrap";
import { Title } from "./globalStyledComponents";
import { Container as MapDiv, NaverMap, Marker, useNavermaps } from 'react-naver-maps'
import Navigation from "../images/path-finder.png";

const StyledSection = styled.section`
  min-height: 89vh;
  padding-top: var(--nav-height);
`;

export default function Contact() {
  return (
    <Element name={"Contact"} id="contact">
      <StyledSection className="d-flex flex-column justify-content-center">
        <Container className="d-flex">
          <Title>
            <h2>오시는 길</h2>
            <div className="underline"></div>
          </Title>
        </Container>
        <Container>
          <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
          <Col>
            <h1 className="title">1월 27일,</h1>
            <h1 className="title">우리 여기서 만나요</h1>
            <h6> * 무료주차 이용이 어려우므로, 대중교통 이용을 권장드립니다.</h6>
            <Row>
              <Col></Col>
              <Col>
                <Button variant="outline-light" size="lg" className="justify-content-center">
                  <Image src={Navigation}
                    style={{
                      width:'25px', 
                      height:'25px',
                      marginRight: '8px'}}
                   />
                  길찾기
                </Button>{' '}
              </Col>
              <Col></Col>  
            </Row>
          </Col>
          <Col>
              <MapDiv
                style={{
                height: '400px',
                width: '100%'
                }}
              >
              <NaverMap
                defaultCenter={{ lat: 37.5055012, lng: 127.0508807 }}
                defaultZoom={15}
              >
                <Marker defaultPosition={{ lat: 37.5055012, lng: 127.0508807 }} />
              </NaverMap>
            </MapDiv>
          </Col>
          </Row>
        </Container>
      </StyledSection>
    </Element>
  );
}
