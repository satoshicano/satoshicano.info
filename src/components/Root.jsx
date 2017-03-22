import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Text from 'material-ui/Text';
import Layout from 'material-ui/Layout';
import LeftContent from './LeftContent';
import MainContent from './MainContent';

injectTapEventPlugin();

export default function Root() {

  return <MuiThemeProvider>
    <Layout container gutter={24}>
      <Layout item xs={12}>
        <AppBar>
          <Toolbar>
            <Text type="title" colorInherit>satoshicano's site</Text>
          </Toolbar>
        </AppBar>
      </Layout>
      <Layout item xs={12} sm={6}>
        <LeftContent/>
      </Layout>
      <Layout item xs={12} sm={6}>
        <MainContent/>
      </Layout>
    </Layout>
  </MuiThemeProvider>;
}
