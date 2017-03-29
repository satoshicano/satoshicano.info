import React from 'react';
import {
  List,
  ListItem,
  ListItemText
} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import {LinkLists} from '../data.json';

function imagePath(icon) {
  switch (icon) {
  case 'mail':
    return require('../img/ico_email.svg');
  case 'earth':
    return require('../img/ico_web.svg');
  case 'github':
    return require('../img/ico_github.svg');
  case 'qiita':
    return require('../img/book.png');
  case 'twitter':
    return require('../img/ico_twitter.svg');
  case 'gplus':
    return require('../img/ico_google_plus.svg');
  case 'wantedly':
    return require('../img/web_w_icon_128.png');
  case 'facebook':
    return require('../img/facebook-2-xxl.png');
  default:
  }
}

export default function MyLinkList () {
  const MyListItems = LinkLists.map((item) => {
    return <div key={item.name}>
      <Divider absolute={item.divide}/>
      <a href={item.url} target='_blank'>
        <ListItem button>
          <img alt={item.icon} src={imagePath(item.icon)} style={{width: '16px', height: '16px'}}/>
          <ListItemText primary={item.name}/>
        </ListItem>
      </a>
    </div>;
  });
  return <List>{MyListItems}</List>;
}
