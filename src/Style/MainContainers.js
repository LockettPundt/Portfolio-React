import styled from 'styled-components';


const AppBox = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export default AppBox;
