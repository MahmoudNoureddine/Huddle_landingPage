import React from 'react';
import styled from 'styled-components';

function Hero() {
  return <Container>
      
    <Main>
      <Head>
        <LogoImg src="/images/logo.svg" />
        <TryButton>Try it Free</TryButton>
      </Head>

      <MainContent>
        <LeftContent>
         
        <TextTitile>
          <h1>Build The Community <br />
          Your Fans Will Love</h1>
        </TextTitile>
        <Description>
        Huddle re-imagines the way we build communities. You have a voice, but so does your audience. 
        Create connections with your users as you engage in genuine discussion. 
        </Description>
        <GetStartBtn>Get Started for Free</GetStartBtn>
         </LeftContent>
         <RightContent>
           <ContentImg  src="/images/illustration-mockups.svg"/>
          
        </RightContent>  
      </MainContent>
    </Main>

  </Container>;
}

export default Hero;

const Container = styled.div`
  
  width: 100vw;
  height: 100vh;
  

  &:before {
    content: '';
    background: url('/images/bg-hero-desktop.svg') no-repeat center center / cover;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    
    z-index: 1;
  }
`
const Main = styled.div`
  
  padding: 0 50px;
` 

const Head = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 15px;
`

const LogoImg = styled.img`
   width: 150px;
   cursor: pointer;
   z-index: 100;
`


const TryButton = styled.button`
  width: 150px;
  padding: 7px;
  border-radius: 15px;
  border: none;
  z-index: 100;
  cursor: pointer;
  box-shadow: -1px 4px 10px 0px rgba(0,0,0,0.74);

  &:hover {
    letter-spacing: 1.5px;
    transform: scale(0.75);
  }
`

const MainContent = styled.div`
  height: calc(100vh - 70px);
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-gap: 30px;
`

const TextTitile = styled.h1`
   margin-top: 200px;
   
  
`

const Description = styled.p`
  max-width: 500px;
  margin-top: 20px;
  line-height: 1.5;
`

const LeftContent = styled.div`
 display: flex;
 flex-direction: column;
 align-items: start;
 
 z-index: 100;
 `
 
 



const GetStartBtn = styled.button`
  width: 220px;
  padding: 10px;
  border-radius: 20px;
  margin-top: 20px;
  border: none;
  background: hsl(322, 100%, 66%);
  color: white;
  cursor: pointer;
  margin-bottom: 20px;
  box-shadow: -1px 4px 10px 0px rgba(0,0,0,0.74);
`

const RightContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`

const ContentImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`