import React from "react";
import { Accordion } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import { Element } from "react-scroll";
import styled from "styled-components";


const Section = styled.section`
opacity: 0;
transition: 1s all ease-in-out;
padding-top: calc(var(--nav-height));
white-space: pre-line;

&.in {
  opacity: 1;
}

  min-height: 100vh;
  max-width: 60vw;
  margin: 0 auto;
  flex-basis: content;
  
  p { margin: 0}
  .title {
    font-size: 4rem;
    text-align: center;
    font-weight: 600;
    margin-bottom: 3vh;
  }

  .accordion-button {
    font-weight: 600;
  }
  @media (max-width: 768px) {
    max-width: 90vw;
    .title {
      font-size: 3rem;
      margin-bottom: 2vh;
    }
  }

`

export default function Sponsors() {
  const {ref, inView} = useInView({root:null, rootMargin: "0px", threshold: 0});
  const faqs = [
    {header: '행사 신청/확인은 어떻게 하나요?', body: `본 행사는 festa.io를 통해서 신청할 수 있습니다. 무료 입장권 신청 후 추첨으로 선정합니다. \n우측 상단의 신청 버튼을 클릭하여 이동해주세요. \n신청 후 https://festa.io/my/tickets 에서 내역 확인이 가능합니다.`},
    {header: '당첨된 후 티켓을 양도(대리 참석)할 수 있을까요?', body: '반드시 무상 양도만 가능합니다. 페스타의 QR 티켓 이미지 소지 및 예약자의 정보가 확인 가능한 경우 참석이 가능합니다. \n양도시에는 기념품 추첨에서 제외될 수 있습니다. 양해 부탁드리겠습니다. \n매매된 참가권으로 확인될 경우 그 즉시 입장이 제한되며 향후 신청 시 제약이 따를 수 있습니다.'},
    {header: '행사 당일 주차 지원이 가능한가요?', body: '주차지원은 불가합니다. 가급적 대중교통을 이용하시기를 권장드립니다.'},
    {header: '당일 현장 등록이 가능한가요?', body: '본 행사는 사전에 신청하신 분들만 참석이 가능합니다.'},
    {header: '행사 종료 후 발표 영상이 공개되나요?', body: '본 행사는 영상 녹화를 따로 진행하지 않을 예정입니다. 참가자분들의 양해 부탁드립니다.'},
    {header: '개인적인 문의를 드리고 싶어요.', body: 'support@lazyconf.dev 로 이메일 부탁드립니다. 확인이 느릴 수 있으니 너른 양해 부탁드립니다.'},
  ]

  const cocs = [
    {header: '서로를 존중해 주세요.', body: '활발한 토론은 건강한 개발자 생태계에 도움이 되지만, 비판이 아닌 비난은 해가 됩니다. \n 의견을 공감하려 노력하고, 갈등을 녹여가며 함께해주세요. 서로를 이해하기 위해 노력해주세요.'},
    {header: '적극적으로 참여해주세요.', body: '적극적인 참여는 서로의 거리를 줄이고 보다 큰 가치를 만들어 냅니다. \n 서로가 서로에게 배울 수 있는 현장이 될 수 있도록 참여해주세요.'},
    {header: '자유롭게 도움을 구하세요.', body: '행사 도중 도움이 필요하실 경우엔 staff에게 편하게 도움을 요청하세요. \n 또한 타인에게 위협을 가하거나 불편을 느끼게하는 행동을 보았을 땐 staff에게 즉시 알려주세요.'},
  ]


  return (
    <Element name={"Faqs"} id="faqs">
       <Section className={`d-flex flex-column mt-5 gap-5 ${inView ? 'in' : ''}`} ref={ref}>
        <div className="mb-5">
          <p className="title">FAQ</p>
          <Accordion>
            {faqs.map((faq, index) => (
              <Accordion.Item eventKey={index}>
                <Accordion.Header>{faq.header}</Accordion.Header>
                <Accordion.Body>
                  {faq.body}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
          </div>

          <div>
          <p className="title">CoC</p>
          <Accordion>
          {cocs.map((coc, index) => (
              <Accordion.Item eventKey={index}>
                <Accordion.Header>{coc.header}</Accordion.Header>
                <Accordion.Body>
                  {coc.body}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
          </div>
      </Section>
    </Element>
  );
}
