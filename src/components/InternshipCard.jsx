import React from 'react';
import {Card, CardContent} from 'material-ui/Card';
import Text from 'material-ui/Text';
import {Internship} from '../data.json';

export default function InternshipCard() {
  const MyInternItems = Internship.map((item) => {
    return <div key={item.name}>
        <Text type="body1">@{item.name}</Text>
        <Text type="body1">{item.place}</Text>
        <Text type="body1">{item.period}</Text>
        <Text type="body1">{item.work}</Text>
      </div>;
  });
  return <Card>
    <CardContent>
      <Text type="headline" component="h2">
        Interhship Experience
      </Text>
      {MyInternItems}
    </CardContent>
  </Card>;
}
