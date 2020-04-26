import React from 'react';
import { ContentBox, InnerContentBox } from '../Style/ContentContainers';
import Greeting from './Greeting';
import Picture from './Picture';
import AboutMe from './AboutMe';

const Content = () => (
  <ContentBox>
    <InnerContentBox>
      <Greeting />
      <Picture />
      <AboutMe />
      <p>{'this is the content box'.repeat(700)}</p>

    </InnerContentBox>

  </ContentBox>
);


export default Content;
