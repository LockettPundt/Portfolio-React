import React, { useContext } from 'react';
import Links from './playListStyled';
import SectionContainer from '../section_container/SectionContainer';
import SectionTitle from '../section_title/SectionTitle';
import StateContext from '../../context';


const Playlist = ({ children }) => {
  const [value] = useContext(StateContext);

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
