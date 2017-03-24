import React from 'react';
import {Card, CardContent} from 'material-ui/Card';
import Text from 'material-ui/Text';
import {Project} from '../data.json';

export default function PersonalProject() {
  const ProjectList = Project.map((item) => {
    return <a key={item.name} href={item.url} target='_blank'>
      <Text type="body1">item.name</Text>
      <Text component="p">item.description</Text>
    </a>;
  });
  return <div style={{paddingTop: '15px'}}>
    <Card>
      <CardContent>
        <Text type="headline" component="h2">
          Personal Project
        </Text>
        {ProjectList}
      </CardContent>
    </Card>
  </div>;
}
