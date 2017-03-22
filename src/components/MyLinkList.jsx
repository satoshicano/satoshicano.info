import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon
} from 'material-ui/List';
import InboxIcon from 'material-ui/svg-icons/inbox';
import data from '../data.json';

export default function MyLinkList () {
  const MyListItems = data.LinkLists.map((item)=>{
    return <a key={item.name} href={item.url} target='_blank'>
      <ListItem button>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary={item.name} />
      </ListItem>
    </a>;
  });
  return <List>{MyListItems}</List>;
}
