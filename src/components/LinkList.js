import React from 'react';
import Link from './Link';
import {
  listAlignBottom,
  listAlignMiddle,
  listAlignTop,
  listCentered
} from './LinkList.css';

const _default = [{
  text: 'text',
  href: '#'
}];

const cssNames = {
  bottom: listAlignBottom,
  top: listAlignTop,
  middle: listAlignMiddle,
  centered: listCentered
};

const LinkList = ({linkArray=_default, align='middle'}) => (
  <div 
    className={cssNames[align]}
  >
    {
      linkArray.map(({ text, href='#', kind='plain' }) => (
      <Link 
        href={href} 
        kind={kind}
      >
        {text}
      </ Link>
    ))
    }
  </div>
);

export default LinkList;