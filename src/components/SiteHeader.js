import React from 'react';

import NavBar from './NavBar';
import AccountButtons from './AccountButtons';
import HomeButton from './HomeButton';
import {header, headerWrapper} from './SiteHeader.css';

const mainHeader = (
  <div className={header}>
    <HomeButton href="#" />
    <NavBar
      navObjects={[
        { text: "about" },
        { text: "southern oysters" },
        { text: "events" },
        { text: "shop" },
        { text: "contact" }
      ]}
    />
    <AccountButtons
      navObjects={[
        { text: "membership", href: "#", kind: "blue" },
        { text: "sign in", href: "#" }
      ]}
      />
  </div>
);

const SiteHeader = ({subNavArray=[]}) => (
    <div className={headerWrapper}>
      {mainHeader}
      <NavBar
        isSubNav={true}
        navObjects={subNavArray}
      />
    </div>
);

export default SiteHeader;