import { Element } from "react-scroll";
import img from '../images/time-table-2.jpg'
import header from '../images/time-table-header.jpg'
import logo from '../images/main-logo.png'
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { Card, Col, Container, Row  } from "react-bootstrap";
import { Icon } from '@iconify/react';
import { useIsMobile } from "../hooks/useIsMobile";
const Section = styled.section`
  min-height: 100vh;
  overflow: hidden;
  padding-top: var(--nav-height);
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
    height: 25px;
    padding: 3px 5px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.infra {
  background-color: #ebf5ff;
  color: #3d6efd;
}

.overview {
  background-color: #edf7ed;
  color: #50c878;
}

.exp {
  background-color: #ffe6f5;
  color: #ff69b4;
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

  const infra = [
    {icon: 'mdi:sql-query', category: 'Infra', name: '설동민', time: '[랜] 15:10 ~ 15:40', title: 'jOOQ, SQL을 작성하는 또다른 방법', link: '', description: '자바진영에서 SQL을 작성하며 겪었던 고민과 이를 해소하기 위해 jOOQ를 도입했던 경험을 공유합니다.'},
    {icon: 'mdi:sql-query', category: 'Infra', name: '조유신', time: '[랜] 15:50 ~ 16:20', title: 'JPA Patterns', link: '', description: '우리가 작성하는 JPA 코드에는 어떤 디자인 패턴들이 숨어있는지 함께 알아봅니다.'},
    {icon: 'fluent:arrow-move-24-filled', category: 'Infra', name: '신수웅', time: '[테] 14:30 ~ 15:00', title: '분산트랜잭션 : 과거와 현재', subTitle: '(기술의 발전 과정과 예시로 알아보는)', description: '분산트랜잭션의 발전 과정을 살펴보면서 현재의 우리는 어떻게 대응할 수 있는가를 알아봅니다.'},
  ]
  const overview = [
    {icon: 'mdi:language-kotlin', category: 'Overview', name: '이한솔', time: '[테] 16:50 ~ 17:20', title: 'Kotlin Injection', subTitle: '(레거시 프로젝트 유지보수팀에 신규 기술 스택 주입시키기)', description: '새로운 기술 스택을 도입하며 겪게되는 문제들을 어떻게 해결해나가고 같이 성장해나가고 문화를 만들어내는지에 대해 알아봅니다.'},
    {icon: 'simple-icons:openjdk', category: 'Overview', name: '김우재', time: '[랜] 17:30 ~ 18:00', title: 'JDK Structured Concurrency', link: '', description: 'JDK21 의 Preview 기능인 Structured Concurrency에 대해 알아봅니다.'},
    {icon: 'mdi:graphql', category: 'Overview', name: '김석현', time: '[테] 15:10 ~ 15:40', title: '소비자 관점의 API 설계 패턴, 사례 훑어보기', link: '', description: '대규모 서비스 API들이 어떤 변화를 겪었는지 알아보고 소비자와 함께하는 API 설계에 대한 대략적인 개념들을 살펴봅니다.'},
    {icon: 'devicon-plain:grpc', category: 'Overview', name: '최상용', time: '[테] 15:50 ~ 16:20', title: 'gRPC 입문기', link: '', description: 'REST 를 대체할 수 있는 새로운 프로토콜에 대해서 소개합니다.'},
  ]
  const exp = [
    {icon: 'mingcute:performance-line', category: 'Experience', name: '이상민', time: '[테] 17:30 ~ 18:00', title: '2년차 주니어 개발자의 성능 개선 도전기', link: '', description: '주니어 개발자가 경험한 레거시 프로젝트에서의 성능 개선 경험 공유합니다.'},
    {icon: 'wpf:past', category: 'Experience', name: '황보성우', time: '[랜] 16:50 ~ 17:20', title: '신규 서비스 개발기', subTitle: '(난 무슨 삽질들을 해왔나)', description: '신규 서비스들을 개발하며 느꼈던 잘못했던 점과 이런 잘못을 저지르지 않으면 어떻게 해야할까에 대해 고민했던 부분을 털어놓습니다.'},
    {icon: 'ri:team-line', category: 'Experience', name: '권승철', time: '[랜] 14:30 ~ 15:00', title: '물경력에 빠진 당신에게 던지는 지푸라기', link: '', description: '경직된 팀 문화를 개선해서 행복한 회사 생활을 꿈꿔봅니다.'},
  ];
  const alls = {
    infra,
    overview,
    exp
  }

  return (
    <Element name={"Programs"} id="programs">
      <Section className={`${inView ? 'in' : ''}`} ref={ref}>
      <Container className="my-3">
          <div className="mb-5" role="button" onClick={() => window.open(img, '_blank', 'noopener')}>
            <img src={header} className="w-100"/>           
          </div>
        
          {Object.entries(alls).map(([key, value]) => (
            <Row>
            {value.map((speaker) => (
              <Col lg={3} className="mb-3">
              <Card className="p-3">
                <div className="d-flex justify-content-between">
                  <div className="d-flex flex-row align-items-center">
                    <div className="icon"><Icon icon={speaker.icon} /></div>
                    <div className="ms-2 c-details">
                      <h6 className="mb-0">{speaker.name}</h6>
                      <span>{speaker.time}</span>
                    </div>
                  </div>
                  <div className="badge"><span className={`${key}`}>{speaker.category}</span></div>
                </div>
                <div className="mt-5 h-100 d-flex flex-column">
                  <h3 className="flex-grow-1">{speaker.title}</h3>
                    <div className={`mt-3 ${isMobile ? 'd-none' : ''}`}>
                      <span className="description">{speaker.description}</span>
                    </div>
                </div>
              </Card>
            </Col>
            
            ))}
          {(value.length === 3) && (
            <Col lg={3} className="mb-3 d-none d-lg-block">
            <Card className="p-3 d-flex flex-column justify-content-center">
              <img src={logo} width='50%' className="mx-auto"/>
            </Card>
          </Col>
          )}
            </Row>
          ))}
      </Container>
      </Section>
    </Element>
  );
}
