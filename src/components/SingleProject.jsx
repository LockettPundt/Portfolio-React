import React, { useContext } from 'react';
import styled from 'styled-components';
import StateContext from '../context';

const Project = styled.section`
  margin: 4rem auto;
  font-size: inherit;
  
  .title {
    font-size: 2.3rem;
    @media screen and (max-width: 600px) {
      font-size: 1.6rem;
    }
  }
  
  i {
    font-size: 2.3rem;
    @media screen and (max-width: 600px) {
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

const ProjectImageWrapper = styled.div`
  width: 80%;
  margin: 4rem auto;
  
  img {
    width: 100%;
    height: auto;
  }
`;

const SingleProject = ({
  title, url, github, src, alt, text,
}) => {
  const [value] = useContext(StateContext);

  return (
    <Project darkMode={value.darkMode}>
      <div>
        <a
          className="title"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </a>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github" />
        </a>
      </div>
      {text}
      <ProjectImageWrapper>
        <img src={src} alt={alt} />
      </ProjectImageWrapper>
    </Project>
  );
};


export default SingleProject;
