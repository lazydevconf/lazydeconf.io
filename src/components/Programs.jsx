import { Element } from "react-scroll";
import img from '../images/time-table-2.jpg'
import logo from '../images/main-logo.png'
import header from '../images/time-table-header.jpg'
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { Card, Col, Container, Row  } from "react-bootstrap";
import { Icon } from '@iconify/react';
import { useIsMobile } from "../hooks/useIsMobile";
const Section = styled.section`
  min-height: 100vh;
  overflow: hidden;
  padding: var(--nav-height) 0;
  opacity: 0;
  transition: 1.5s all ease-in-out;
  white-space: pre-line;

  &.in {
    opacity: 1;
  }


  .card {
    border: none;
    border-radius: 10px;
    height: 100%;
  }

  .c-details span {
      font-weight: 300;
      font-size: 0.8rem;
  }

.icon {
    width: 50px;
    height: 50px;
    background-color: #eee;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem
}

.badge span {
    background-color: #fffbec;
    width: 60px;
    height: 25px;
    padding-bottom: 3px;
    border-radius: 5px;
    display: flex;
    color: #fed85d;
    justify-content: center;
    align-items: center
}


.description {
    font-size: 0.9rem;
    font-weight: 600
    color: #a5aec0
}

.shake {
  animation: shake 5s ease infinite;
}
@keyframes shake {
	0%, 100% {transform: translateX(0);}
	10%, 30%, 50%, 70%, 90% {transform: translateX(-5px);}
	20%, 40%, 60%, 80% {transform: translateX(5px);}
}
`;

export default function Programs() {
  const {ref, inView} = useInView({root:null, rootMargin: "0px", threshold: 0});
  const isMobile = useIsMobile();

  const dbSpeakers = [
    {icon: 'bx:bxl-mailchimp', category: 'DB/SQL', name: '설동민', time: '[랜] 15:10 ~ 15:40', title: 'jOOQ, SQL을 작성하는 또다른 방법', subTitle: '', description: '자바진영에서 SQL을 작성하며 겪었던 고민과 이를 해소하기 위해 jOOQ를 도입했던 경험을 공유합니다.'},
    {icon: 'bx:bxl-mailchimp', category: 'DB/SQL', name: '조유신', time: '[랜] 15:50 ~ 16:20', title: 'JPA Patterns', subTitle: '', description: '우리가 작성하는 JPA 코드에는 어떤 디자인 패턴들이 숨어있는지 함께 알아봅니다.'},
    {icon: 'bx:bxl-mailchimp', category: 'DB/SQL', name: '신수웅', time: '[테] 14:30 ~ 15:00', title: '분산트랜잭션 : 과거와 현재', subTitle: '(기술의 발전 과정과 예시로 알아보는)', description: '분산트랜잭션의 발전 과정을 살펴보면서 현재의 우리는 어떻게 대응할 수 있는가를 알아봅니다.'},
  ]
  const performanceSpeakrs = [
    {icon: 'bx:bxl-mailchimp', category: '사례', name: '이한솔', time: '[테] 16:50 ~ 17:20', title: 'Kotlin Injection', subTitle: '(레거시 프로젝트 유지보수팀에 신규 기술 스택 주입시키기)', description: ''},
    {icon: 'bx:bxl-mailchimp', category: '아키텍처', name: '김우재', time: '[랜] 17:30 ~ 18:00', title: 'JDK Structured Concurrency', subTitle: '', description: 'JDK21 의 Preview 기능인 Structured Concurrency에 대해 알아봅니다.'},
    {icon: 'bx:bxl-mailchimp', category: '성능', name: '김석현', time: '[테] 15:10 ~ 15:40', title: '소비자 관점의 API 설계 패턴, 사례 훑어보기', subTitle: '', description: ''},
    {icon: 'bx:bxl-mailchimp', category: '성능', name: '최상용', time: '[테] 15:50 ~ 16:20', title: 'gRPC 입문기', subTitle: '', description: ''},
  ]
  const speakers = [
    {icon: 'bx:bxl-mailchimp', category: '사례', name: '이상민', time: '[테] 17:30 ~ 18:00', title: '2년차 주니어 개발자의 성능 개선 도전기', subTitle: '', description: ''},
    {icon: 'bx:bxl-mailchimp', category: '사례', name: '황보성우', time: '[랜] 16:50 ~ 17:20', title: '신규 서비스 개발기', subTitle: '(난 무슨 삽질들을 해왔나)', description: ''},
    {icon: 'bx:bxl-mailchimp', category: '문화', name: '권승철', time: '[랜] 14:30 ~ 15:00', title: '물경력에 빠진 당신에게 던지는 지푸라기', subTitle: '', description: '경직된 팀 문화를 개선해서 행복한 회사 생활을 꿈꿔봅니다.'},
  ];

  return (
    <Element name={"Programs"} id="programs">
      <Section className={`${inView ? 'in' : ''}`} ref={ref}>
      <Container className="mb-3">
          <div className="mb-5" role="button" onClick={() => window.open(img, '_blank', 'noopener')}>
            <img src={header} className="w-100"/>           
          </div>
        <Row>
        <Col md={1} className="d-flex flex-col justify-content-center align-items-center text-center ">
          <h4><b>DB/SQL</b><br/> {isMobile ? '':<Icon className="shake" icon="maki:arrow" />}</h4>
        </Col>
        {
          dbSpeakers.map((speaker) => (
            <Col className="mb-3">
                <Card className="p-3">
                  <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                      <div className="icon"><Icon icon={speaker.icon} /></div>
                      <div className="ms-2 c-details">
                        <h6 className="mb-0">{speaker.name}</h6>
                        <span>{speaker.time}</span>
                      </div>
                    </div>
                    <div className="badge"><span>{speaker.category}</span></div>
                  </div>
                  <div className="mt-5">
                    <h3>{speaker.title}</h3>
                    <h6>{speaker.subTitle}</h6>
                    <div className="mt-5">
                      <div className="mt-3">
                        <span className="description">{speaker.description}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>
              ))
            }
      </Row>
      <Row>
      <Col md={1} className="d-flex flex-col justify-content-center align-items-center text-center">
      <h4><b>기술</b><br/> {isMobile ? '':<Icon className="shake" icon="maki:arrow" />}</h4>
        </Col>
        {
          performanceSpeakrs.map((speaker) => (
            <Col className="mb-3">
                <Card className="p-3">
                  <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                      <div className="icon"><Icon icon={speaker.icon} /></div>
                      <div className="ms-2 c-details">
                        <h6 className="mb-0">{speaker.name}</h6>
                        <span>{speaker.time}</span>
                      </div>
                    </div>
                    <div className="badge"><span>{speaker.category}</span></div>
                  </div>
                  <div className="mt-5">
                    <h3>{speaker.title}</h3>
                    <h6>{speaker.subTitle}</h6>
                    <div className="mt-5">
                      <div className="mt-3">
                        <span className="description">{speaker.description}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>
              ))
            }
      </Row>
      <Row>
      <Col md={1} className="d-flex flex-col justify-content-center align-items-center text-center">
      <h4><b>경험</b><br/> {isMobile ? '':<Icon className="shake" icon="maki:arrow" />}</h4>
        </Col>
        {
          speakers.map((speaker) => (
            <Col  className="mb-3">
                <Card className="p-3">
                  <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                      <div className="icon"><Icon icon={speaker.icon} /></div>
                      <div className="ms-2 c-details">
                        <h6 className="mb-0">{speaker.name}</h6>
                        <span>{speaker.time}</span>
                      </div>
                    </div>
                    <div className="badge"><span>{speaker.category}</span></div>
                  </div>
                  <div className="mt-5">
                    <h3>{speaker.title}</h3>
                    <h6>{speaker.subTitle}</h6>
                    <div className="mt-5">
                      <div className="mt-3">
                        <span className="description">{speaker.description}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>
              ))
            }
      </Row>
    </Container>
    {/*        <Col md={3} className="mb-3">
        <Card className="p-3 justify-content-center align-items-center gap-5" role="button" onClick={() => window.open(img, '_blank', 'noopener')}>
          <img src={logo} className="w-50" />
          <span>타임테이블 보기</span>
          </Card>
       </Col>
 */}
        {/* <img src={img} style={{cursor: 'pointer'}} onClick={() => window.open(img, '_blank', 'noopener')}/> */}
      </Section>
    </Element>
  );
}
