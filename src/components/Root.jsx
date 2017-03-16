import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';
import LeftContent from './LeftContent';
import MainContent from './MainContent';

injectTapEventPlugin();

export default function Root() {
  return <MuiThemeProvider>
      <div>
        <AppBar title="satoshicano's info" showMenuIconButton={false}/>
        <LeftContent/>
        <MainContent/>
      </div>
    </MuiThemeProvider>;
}
