import React from 'react';
import {plain, blue, grey} from './Link.css';

const Link = ({href='#', kind='plain', children}) => {

  let cssClass = plain;
  
  switch(kind) {
    case 'blue':
      cssClass = blue;
      break;
    case 'grey':
      cssClass = grey;
      break;
    default:
      cssClass = plain;
      break;
  }


  return (
    <a href={href}
      className={cssClass}>
      {children}
    </a>
  );
};

export default Link;