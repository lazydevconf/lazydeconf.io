import styled from "styled-components";
import Banner from "../images/main-banner.jpg";
// import MinBanner from "../images/main-banner-min.jpg";
import BannerBackground from "../images/banner-background.jpg";
import { ReactComponent as Title } from '../images/banner-title.svg';
import { ReactComponent as Time } from '../images/conference-time.svg';

// Components

const StyledHero = styled.header`
  position: relative;
  height: calc(100vh - var(--nav-height));
  color: white;

  .banner {
    max-width: 100%;
    height: 100%;
    background: url(${Banner});
    background-position: top left;
    background-repeat: no-repeat;
    background-size: cover;
    margin: 0 auto;  
  }
  svg {
    display: none;
  }

  @media (max-width: 720px) {
    .banner {
      max-width: auto;
      background: url(${BannerBackground}) top left no-repeat;
      background-size: cover;  
    } 
    svg {
      display: block;
      font-size: 50px;
      width: 90%;
    }
  }
  
  @media (min-width:720px) and (min-aspect-ratio: 16/9) {
    height: calc(100vw * 1080 / 1920);
  }

`;



export default function Hero() {
  
  return (
    <StyledHero>
      <div className='banner'>
        <Title className="position-absolute" style={{maxWidth: '400px', top: '15%', left: '5%'}} width="90%"/>
        <Time className="position-absolute" style={{bottom: '5%', left: '5%'}} width="90%"/>
        </div>
    </StyledHero>
  );
}
