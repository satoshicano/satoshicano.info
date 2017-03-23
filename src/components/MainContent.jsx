import React from 'react';
import InternshipCard from './InternshipCard';
import EducationCard from './EducationCard';
import PersonalProjectCard from './PersonalProjectCard';
import PersonalSkillCard from './PersonalSkillCard';

export default function MainContent() {
  return <div style={{paddingTop: '64px'}}>
    <InternshipCard/>
    <EducationCard/>
    <PersonalProjectCard/>
    <PersonalSkillCard/>
  </div>;
}
