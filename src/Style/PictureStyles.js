import styled from 'styled-components';


const MainAbout = styled.div`
  display: flex;
  width: 100%;
  font-size: inherit;
  margin: var(--sectionMargin);
  
  .textBox {
    margin: 0;
    display: inherit;
    flex-direction: column;
    width: 50%;
    justify-content: center;
    
  }
  
  .textBox .name {
    font-weight: 400;
    margin: 1rem 0rem;
  }
  
  .textBox p {
    font-size: 2rem;
    font-weight: 300;
    margin: 0;
    
    @media screen and (max-width: 600px) {
      font-size: 2.6rem;
    }
    
    @media screen and (max-width: 400px) {
    font-size: 3.3rem;
    }
    
  }
  
  .imgWrapper {
    width: 50%;
  }
  
  .imgWrapper img {
    border-radius: 50%;
    width: 100%;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.3);
  }
`;


export default MainAbout;
