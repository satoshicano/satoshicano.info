import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon
} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import InboxIcon from 'material-ui/svg-icons/inbox';
import data from '../data.json';

export default function MyLinkList () {
  const MyListItems = data.LinkLists.map((item)=>{
    return <div key={item.name}>
      <Divider absolute={item.divide}/>
      <a href={item.url} target='_blank'>
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={item.name} />
        </ListItem>
      </a>
    </div>;
  });
  return <List>{MyListItems}</List>;
}
