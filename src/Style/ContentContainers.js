import styled from 'styled-components';

const grey = 'rgb(241, 236, 228)';
const black = 'rgb(70, 70, 70)';
export const ContentBox = styled.section`
  background-color: ${(props) => (props.darkMode ? black : grey)};
  transition: 0.4s ease-in-out;
  height: auto;
  color: ${(props) => (props.darkMode ? '#ffc89f' : 'rgb(38, 38, 39)')};
  overflow-y: scroll;
  scroll-behavior: smooth;
  
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
  font-size: 1.6rem;
  
  @media screen and (max-width: 400px) {
    font-size: 1.2rem;
  }

`;

export const GreetingBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 35vh auto 40rem auto;

`;
