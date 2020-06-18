import styled from 'styled-components';


const AppBox = styled.main`
  display: flex;
  width: 100%;
  height: 100vh;
  
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
  
`;

export default AppBox;
