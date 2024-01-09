import styled, { keyframes } from "styled-components";
import { Element } from "react-scroll";
// Components
import { Col, Container, Row } from "react-bootstrap";
import { useInView } from "react-intersection-observer";

const typing = keyframes`
  from { width: 0; }
  to { width: 100% }
`

const blinkCaret = keyframes`
  from, to { border-color: transparent }
  50% { border-color: white; }
`

const StyledAboutMe = styled.section`
min-height: 100vh;
max-width: 80vw;
margin: 0 auto;
padding: var(--nav-height) 0 20px;


  p {
    margin-bottom: 0px;
  }
  .title {
    font-size: 7rem;
    margin: 0 auto; 
  }

  .animation {
    overflow: hidden;
    border-right: .1em solid white; 
    white-space: nowrap; 

    animation: 
    ${typing} 3.5s steps(40, end),
    ${blinkCaret} .75s step-end infinite;
  }

  .description {
    margin-top: 50px;
    font-size: 2rem;
  }

  @media (max-width: 1280px) {
    .title {
      font-size: 5rem;
    }
  }

  @media (max-width: 1024px) {
    .title {
      font-size: 4rem;
    }
  }

  @media (max-width: 960px) {
    min-height: auto;
    max-width: 90vw;
    .title {
      font-size: 3rem;
    }

    .description {
      font-size: 1rem;
    }
  }

  @media (max-width: 768px) {
    min-height: auto;
    max-width: 90vw;
    .title {
      font-size: 2rem;
    }

    .description {
      font-size: 1rem;
    }
  }
`;

export default function AboutMe() {
  const {ref, inView} = useInView({root:null, rootMargin: "0px", threshold: 0});

  return (
    <Element name={"About"} id="about" >
      <StyledAboutMe className="d-flex flex-column justify-content-center">
        <Container ref={ref}>
          <div className={`title ${inView ? 'animation' : ''}`} >
            <p>느긋한 아이디어로</p>
            <p>혁신적인 기술을 만나다.</p>
          </div>
          <div className="description">
            <p>게으른 개발자 컨퍼런스는 XXX하지만 XX한 개발자들이 모여 만든 개발자 컨퍼런스입니다.</p>
          </div>
        </Container>
      </StyledAboutMe>
    </Element>
  );
}
