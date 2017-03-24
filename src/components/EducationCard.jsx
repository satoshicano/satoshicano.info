import React from 'react';
import {Card, CardContent} from 'material-ui/Card';
import Text from 'material-ui/Text';
import {Education} from '../data.json';

export default function EducationCard() {
  const MyEducationHistory = Education.map((item) => {
    return <div key={item.name}>
      <Text type="body1">{item.name}</Text>
      <Text type="body1">{item.period}</Text>
      <Text type="body1">{item.relation}</Text>
    </div>;
  });
  return <div style={{paddingTop: '15px'}}>
    <Card>
      <CardContent>
        <Text type="headline" component="h2">
          Education
        </Text>
        {MyEducationHistory}
      </CardContent>
    </Card>
  </div>;
}
