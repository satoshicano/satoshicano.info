import React from 'react';
import {Card, CardContent} from 'material-ui/Card';
import Text from 'material-ui/Text';

export default function InternshipCard() {
  return <Card>
    <CardContent>
      <Text type="headline" component="h2">
        Interhship Experience
      </Text>
      <Text type="body1">text</Text>
    </CardContent>
  </Card>;
}
