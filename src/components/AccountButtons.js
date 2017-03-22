import React from 'react';
import LinkList from './LinkList';

const NavBar = ({navObjects=[]}) => (
  <LinkList 
    align='middle'
    linkArray={navObjects}
  />  
);

export default NavBar;