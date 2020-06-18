import styled from 'styled-components';

const Links = styled.div`
  display: flex;
  flex-direction: column;
  a {
    margin: 2rem 0;
    transition: 0.4s ease-in-out;
    text-decoration: none;
    color: ${(props) => (props.darkMode ? '#ffc89f' : 'rgb(38, 38, 39)')};
  }
  
  a:hover {
  color: var(--hoverPink);
  transition: 0.3s ease-in-out;
  }

`;


export default Links;