import React, { useContext } from 'react';
import styled from 'styled-components';
import SectionContainer from './SectionContainer';
import SectionTitle from './SectionTitle';
import StateContext from '../context';

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
const Playlist = ({ children }) => {
  const [value, dispatch] = useContext(StateContext);

  return (
    <SectionContainer>
      <SectionTitle title="Playlists" />
      <Links darkMode={value.darkMode}>
        <a
          darkMode={value.darkMode}
          href="https://open.spotify.com/playlist/47qmBzq9lFfouIGCMegyCC?si=F1LIprBkT3uGqCvSIA0MmA"
          target="_blank"
          rel="noopener noreferrer"
        >
          Winter 2020
        </a>
        <a
          darkMode={value.darkMode}
          href="https://open.spotify.com/playlist/5tLZnrh1UizSywAoXfKy0G?si=WW--7RIGSIun8J6y845P0Q"
          rel="noopener noreferrer"
          target="_blank"
        >
          Spring 2020
        </a>
      </Links>
    </SectionContainer>

  );
};

export default Playlist;
