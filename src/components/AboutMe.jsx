import React from 'react';
import {Card, CardContent} from 'material-ui/Card';
import Text from 'material-ui/Text';
import MyLinkList from './MyLinkList';

export default function AboutMe() {
  return <Card>
    <CardContent>
      <Text type="headline" component="h2">
        Satoshi Cano Nakamatsu
      </Text>
      <Text type="body1">Web Application Developer</Text>
      <MyLinkList/>
    </CardContent>
  </Card>;
}
