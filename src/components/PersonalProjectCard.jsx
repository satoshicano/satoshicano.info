import React from 'react';
import {Card, CardContent} from 'material-ui/Card';
import Text from 'material-ui/Text';

export default function PersonalProject() {
  return <div style={{paddingTop: '15px'}}>
    <Card>
      <CardContent>
        <Text type="headline" component="h2">
          Personal Project
        </Text>
        <Text type="body1">JointHub</Text>
        <Text component="p">
          web service
        </Text>
      </CardContent>
    </Card>
  </div>;
}
