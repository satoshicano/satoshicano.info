import React from 'react';
import {Card, CardContent} from 'material-ui/Card';
import Text from 'material-ui/Text';
import {Skills} from '../data.json';

export default function PersonalSkill() {
  const SkillLists = Skills.map((item) => {
    return <div key={item.category}>
      <Text type="body1">{item.category}</Text>
      <Text component="p">item.description</Text>
    </div>;
  });
  return <div style={{paddingTop: '15px'}}>
    <Card>
      <CardContent>
        <Text type="headline" component="h2">
          Personal Skills
        </Text>
        {SkillLists}
      </CardContent>
    </Card>
  </div>;
}
