import React from 'react';
import {Card, CardContent} from 'material-ui/Card';
import Text from 'material-ui/Text';

export default function Language() {
  return <Card>
    <CardContent>
      <Text type="headline" component="h2">Language</Text>
      <Text type="body1">Japanese</Text>
      <Text component="p">Native Language</Text>
      <Text type="body1">Spanish</Text>
      <Text component="p">Native Language</Text>
      <Text type="body1">English</Text>
    </CardContent>
  </Card>;
}
