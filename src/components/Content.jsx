import React from 'react';
import { ContentBox, InnerContentBox } from '../Style/ContentContainers';
import Greeting from './Greeting';

const Content = () => (
  <ContentBox>
    <InnerContentBox>
      <Greeting />
      <p>{'this is the content box'.repeat(700)}</p>

    </InnerContentBox>

  </ContentBox>
);


export default Content;
