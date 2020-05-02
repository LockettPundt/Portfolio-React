import React, { useContext } from 'react';
import { ContentBox, InnerContentBox } from '../Style/ContentContainers';
import Greeting from './Greeting';
import Picture from './Picture';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Projects from './Projects';
import Playlists from './PlayLists';

import StateContext from '../context';

const Content = () => {
  const [value, dispatch] = useContext(StateContext);
  return (
    <ContentBox darkMode={value.darkMode}>
      <InnerContentBox>
        <Greeting />
        <Picture />
        <AboutMe />
        <Skills />
        <Projects />
        <Playlists />
      </InnerContentBox>

    </ContentBox>
  );
};


export default Content;
