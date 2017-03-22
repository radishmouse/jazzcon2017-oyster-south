import React from 'react';
import LinkList from './LinkList';
import {subnav} from './NavBar.css';

const NavBar = ({navObjects=[], isSubNav=false}) => (
  isSubNav ?
    <div className={subnav}>
      <LinkList 
        align='centered'
        linkArray={navObjects}
      />  
    </div>
    :
    <LinkList 
      align='bottom'
      linkArray={navObjects}
    />  
);

export default NavBar;