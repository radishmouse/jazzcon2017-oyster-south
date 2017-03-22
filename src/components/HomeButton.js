import React from 'react';
import LinkList from './LinkList';
import oyster from './oyster-south-logo.svg';
import {logo} from './HomeButton.css';

const logoImage = <img src={oyster} className={logo} alt="Oyster South"/>

const HomeButton = ({href}) => (
  <LinkList 
    align='top'
    linkArray={[
      {
        text: logoImage,
        href: href
      }
    ]}
  />  
);

export default HomeButton;