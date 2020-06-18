import React, { useContext } from 'react';
import { ContentBox, InnerContentBox } from '../containers/ContentContainers';
import Greeting from './greeting/Greeting';
import Picture from './picture/Picture';
import AboutMe from './about_me/AboutMe';
import Skills from './skills/Skills';
import Projects from './Projects';
import Playlists from './play_lists/PlayLists';
import BottomIcons from './bottom_icons/BottomIcons';
import StateContext from '../context';

const Content = () => {
  const [value] = useContext(StateContext);
  return (
    <ContentBox darkMode={value.darkMode}>
      <InnerContentBox>
        <Greeting />
        <Picture />
        <AboutMe />
        <Skills />
        <Projects />
        <Playlists />
        <BottomIcons />
      </InnerContentBox>

    </ContentBox>
  );
};


export default Content;
