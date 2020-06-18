import React, { useContext } from 'react';
import { ProjectImageWrapper, ProjectSection } from './singleProjectStyled';
import StateContext from '../../context';



const SingleProject = ({
  title, url, github, src, alt, text,
}) => {
  const [value] = useContext(StateContext);

  return (
    <ProjectSection darkMode={value.darkMode}>
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
    </ProjectSection>
  );
};


export default SingleProject;
