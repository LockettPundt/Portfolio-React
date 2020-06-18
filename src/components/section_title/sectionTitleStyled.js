import styled from 'styled-components';


const green = 'rgb(125, 187, 145)';
const StyledSectionTitle = styled.div`

  .title {
    font-size: 2rem;
    font-weight: 300;
    
    @media screen and (max-width: 768px) {
      font-size: 1.9rem;
    }
    
    @media screen and (max-width: 400px) {
      font-size: 1.45rem;
    }
  }
  
  .greenRow {
    width: 100%;
    height: 1px;
    transition: 0.4s ease-in-out;
    background-color: ${(props) => (props.darkMode ? 'black' : green)};
  }

`;

export default StyledSectionTitle;