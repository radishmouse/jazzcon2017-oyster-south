import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';

import Link from '../src/components/Link';
import LinkList from '../src/components/LinkList';
import NavBar from '../src/components/NavBar';
import AccountButtons from '../src/components/AccountButtons';
import HomeButton from '../src/components/HomeButton';
import SiteHeader from '../src/components/SiteHeader';

const listDisplay = {
  height: '300',
}

storiesOf('SiteHeader', module)
  .add('main nav', () => (
      <SiteHeader />
  ))
  .add('with sub nav', () => (
      <SiteHeader
        subNavArray={[
          { text: "our mission" },
          { text: "who we serve" },
          { text: "our board" }
        ]}
      />
  ));

storiesOf('HomeButton', module)
  .add('example account buttons', () => (
    <div style={listDisplay}>
      <HomeButton
        href="#"
      />
    </div>
  ));

storiesOf('AccountButtons', module)
  .add('example account buttons', () => (
    <div style={listDisplay}>
      <AccountButtons
        navObjects={[
          { text: "membership", href: "#", kind: "blue"},
          { text: "sign in", href: "#" }
        ]}
      />
    </div>
  ));

storiesOf('NavBar', module)
  .add('navs', () => (
    <div style={listDisplay}>
      <NavBar
        navObjects={[
          { text: "about" },
          { text: "southern oysters" },
          { text: "events" },
          { text: "shop" },
          { text: "contact" }
        ]}
      />
    </div>
  ))
  .add('subnavs', () => (
    <div style={listDisplay}>
      <NavBar
        isSubNav={true}
        navObjects={[
          { text: "our mission" },
          { text: "who we serve" },
          { text: "our board" }
        ]}
      />
    </div>
  ));

storiesOf('LinkList', module)
  .add('single', () => (
    <div style={listDisplay}>
      <LinkList />
    </div>
  ))
  .add('multiple, top', () => (
    <div style={listDisplay}>
      <LinkList 
        align='top'
        linkArray={[
          { text: "walter" },
          { text: "the dude" },
          { text: "donny" }
        ]}
      />
    </div>
  ))
  .add('multiple, middle', () => (
    <div style={listDisplay}>
      <LinkList 
        align='middle'
        linkArray={[
          { text: "walter" },
          { text: "the dude" },
          { text: "donny" }
        ]}
      />
    </div>
  ))
  .add('multiple, bottom', () => (
    <div style={listDisplay}>
      <LinkList 
        align='bottom'
        linkArray={[
          { text: "walter" },
          { text: "the dude" },
          { text: "donny" }
        ]}
      />
    </div>
  ))

storiesOf('Link', module)
  .add('plain', () => (
    <Link>
      sign in
    </Link>
  ))
  .add('blue', () => (
    <Link kind="blue">
      membership
    </Link>
  ))
  .add('grey', () => (
    <Link kind="grey">
      join the club
    </Link>
  ));