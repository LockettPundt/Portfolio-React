import styled from 'styled-components';


const IconsBox = styled.div`
  display: flex;
  
  font-size: 2.8rem;
  width: 90%;
  padding-bottom: 3rem;
  margin:  2rem auto;
  justify-content: space-between;
  
  a {
    margin-right: 1rem;
    transition: 0.4s ease-in-out;
    text-decoration: none;
    color: ${(props) => (props.darkMode ? '#ffc89f' : 'rgb(38, 38, 39)')};
  }
  
  i:hover {
  color: var(--hoverPink);
  transform: scale(1.3);
  transition: 0.3s ease-in-out;
  }
  
  @media screen and (max-width: 800px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.8rem;
  }

`;


export default IconsBox;