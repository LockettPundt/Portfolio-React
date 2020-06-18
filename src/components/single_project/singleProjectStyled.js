import styled from 'styled-components';

export const ProjectSection = styled.section`
  margin: 4rem auto;
  font-size: inherit;
  
  .title {
    font-size: 2.3rem;
    @media screen and (max-width: 768px) {
      font-size: 1.6rem;
    }
  }
  
  i {
    font-size: 2.3rem;
    @media screen and (max-width: 768px) {
      font-size: 1.6rem;
    }
  }
  
  a {
    margin-right: 1rem;
    transition: 0.4s ease-in-out;
    text-decoration: none;
    color: ${(props) => (props.darkMode ? '#ffc89f' : 'rgb(38, 38, 39)')};
  }
  
  a:hover {
  color: var(--hoverPink);
  transform: scale(1.3);
  transition: 0.3s ease-in-out;
  }
  
  i:hover {
  color: var(--hoverPink);
  transform: scale(1.3);
  transition: 0.3s ease-in-out;
  }
`;

export const ProjectImageWrapper = styled.div`
  width: 80%;
  margin: 4rem auto;
  
  img {
    width: 100%;
    height: auto;
  }
`;