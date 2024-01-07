import styled from "styled-components";
import Banner from "../images/main-banner.jpg";
// import MinBanner from "../images/main-banner-min.jpg";
import BannerBackground from "../images/banner-background.jpg";
import { ReactComponent as Title } from '../images/banner-title.svg';
import { ReactComponent as Time } from '../images/conference-time.svg';
import { useEffect, useState } from "react";
import { useIsMobile } from "../hooks/useIsMobile";

// Components

const StyledHero = styled.header`
  position: relative;
  height: calc(100vh - var(--nav-height));
  color: white;

  .banner {
    max-width: 1920px;
    height: 100%;
    background: url(${Banner}) top left no-repeat;
    background-size: cover;
    margin: 0 auto;  
  }

  .mobile-banner {
    height: 100%;
    background: url(${BannerBackground}) top left no-repeat;
    background-size: cover;
  }


  @media (min-width: 1920px) {
    .banner {
      max-width: 100%;
      background-size: 100% 100%;
    }
  }

  @media (max-width: 910px) {
  }

  svg {
    font-size: 50px;
  }
`;



export default function Hero() {
  const isMobile = useIsMobile();
  
  return (
    <StyledHero>
      <div className={`${isMobile ? 'mobile-banner': 'banner'}`}>
        {isMobile ? 
          <>
          <Title className="position-absolute" style={{top: '15%', left: '5%'}} width="90%"/>
          <Time className="position-absolute" style={{bottom: '5%', left: '5%'}} width="90%"/>
          </>
          : ''}
          
        </div>
    </StyledHero>
  );
}
