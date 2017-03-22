import React from 'react';
import AboutMe from './AboutMe';
import Language from './Language';

export default function LeftContent() {
  return <div style={{paddingTop: '64px'}}>
    <AboutMe/>
    <Language/>
  </div>;
}
