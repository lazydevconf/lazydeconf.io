import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
// Components
import { Container, Col, Row, Button, Image} from "react-bootstrap";
import { Container as MapDiv, NaverMap, Marker, useNavermaps, InfoWindow } from 'react-naver-maps'
import Navigation from "../images/path-finder.png";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { useIsMobile } from "../hooks/useIsMobile";

const StyledSection = styled.section`
min-height: 100vh;
max-width: 1280px;
margin: 0 auto;
padding: calc(var(--nav-height) + 20px) 0;

opacity: 0;
transition: 1s all ease-in-out;

&.in {
  opacity: 1;
}

p { margin: 0}
.title {
  font-size: 4rem;
  text-align: center;
  font-weight: 600;
  margin-bottom: 10vh;
}

a {
  color: inherit;
  text-decoration: inherit;
}

a:hover {
  color: #45D3D3;
}

@media (max-width: 1280px) {
  max-width: 90vw;
}

@media (max-width: 768px) {
  .title {
    font-size: 3rem;
    margin-bottom: 2vh;
  }
  h4, h5 { 
    font-size: 1rem;
  }
}
`;

export default function WayToGo() {
  const {ref, inView} = useInView({root:null, rootMargin: "0px", threshold: 0});
  const isMobile = useIsMobile();
  const [map, setMap] = useState(null);
  const position = {lat: 37.5055012, lng: 127.050880};

  return (
    <Element name={"WayToGo"} id="waytogo">
      <StyledSection className={`d-flex flex-column justify-content-center ${inView ? 'in' : ''}`} ref={ref} >

          <p className="title">오시는 길</p>
          <div className={`d-flex mb-5 gap-5 align-items-center ${isMobile ? 'flex-column' : ''}`}>
            <MapDiv
                style={{
                height: isMobile ? '300px' :'400px',
                width: isMobile ? '100%' :'50%',
                flexBasis: isMobile ? '':'45%',
                marginBottom: '20px',
                }}
              >
              <NaverMap
                defaultCenter={position}
                defaultZoom={15}
                ref={setMap}
              >
                <Marker position={position} />
                <Button style={{position: 'absolute', bottom: 3, left: 3}} variant="dark" size="sm"  onClick={() => map.setCenter(position)}>
                  <Image src={Navigation}
                    style={{
                      width:'15px', 
                      height:'15px'}}
                   />
                </Button>
                <Button style={{position: 'absolute', bottom: 3, right: 3}} variant="dark" size="sm"  onClick={() => window.open('https://map.naver.com/p/search/%ED%85%8C%ED%97%A4%EB%9E%80%EB%A1%9C%20411', '_blank', 'noopener')}>
                  테헤란로 411
                </Button>
              </NaverMap>
            </MapDiv>
            <div className="flex-grow-1 d-flex flex-column align-items-center gap-3">
                {/* <h1 className="mb-5">테크살롱</h1> */}
                <div className="d-flex gap-5">
                  {isMobile ? '' : <div><h3>주소</h3></div> }
                  <div className="mb-5">
                    <h4>서울특별시 강남구 테헤란로 411 성담빌딩 13층</h4>
                    <h4>(지번) 서울특별시 강남구 삼성동 142-38</h4>
                    <h5 className="mt-3">선릉역 10번 출구 100m 이내에 있습니다.</h5>
                  </div>
                </div>
         

            <h5> * 무료주차 이용이 어려우므로, 대중교통 이용을 권장드립니다.</h5>
            </div>

          </div>
          <h1 className="text-center mt-5">1월 27일, 우리 여기서 만나요!</h1>      

      </StyledSection> 
    </Element>
  );
}
