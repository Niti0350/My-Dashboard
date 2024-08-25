import React from 'react';
import './nav.css';
import NavNotice from './NavNotice';
import NavMessage from './NavMessage';
import NavAvatar from './NavAvatar';

function Nav() {
  console.log('Nav component rendered');
  return (<nav className="header-nav ms-auto ">
      <ul className="d-flex align-items-centre">
       <NavNotice/>
       <NavMessage/>
       <NavAvatar />
      </ul>
    </nav>
  );
}

export default Nav;