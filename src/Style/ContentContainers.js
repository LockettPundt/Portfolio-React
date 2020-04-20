import styled from 'styled-components';


export const ContentBox = styled.div`
  background-color: rgb(241, 236, 228);
  width: 75%;
  height: auto;
  overflow-y: scroll;
  
  @media screen and (max-width: 600px) {
    width: 100%;
    height: auto;
  }
`;

export const InnerContentBox = styled.div`
  width: 80%;
  height: 100vh;
  margin: 0 auto 3rem auto;
  overflow: visible;
`;

export const GreetingBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 31vh auto 40rem auto;
  
  @media screen and (max-width: 1780px) {
    margin: 33vh auto 52vh auto;
    
  }
  @media screen and (max-width: 1450px) {
    margin: 36vh auto 52vh auto;
    
  }
  @media screen and (max-width: 1150px) {
    margin: 40vh auto 52vh auto;
  }
  @media screen and (max-width: 800px) {
    margin: 43vh auto 50vh auto;
    
  }
  
  @media screen and (max-width: 600px) {
    margin: 50vh auto 50vh auto;
    
  }

`;
