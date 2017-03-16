import React from 'react';
import {Card, CardHeader} from 'material-ui/Card';
import LinkComponent from './LinkComponent';
import data from '../data.json';

const AboutMe = () => (
  <Card>
    <CardHeader
      title="Satoshi Cano Nakamatsu"
      subtitle="Web Application developer"
    />
    <LinkComponent obj={data.Mail}/>
    <LinkComponent obj={data.Info}/>
    <LinkComponent obj={data.GitHub}/>
    <LinkComponent obj={data.Qiita}/>
    <LinkComponent obj={data.Twitter}/>
    <LinkComponent obj={data.GPlus}/>
    <LinkComponent obj={data.Wantedly}/>
    <LinkComponent obj={data.Facebook}/>
  </Card>
);

export default AboutMe;
