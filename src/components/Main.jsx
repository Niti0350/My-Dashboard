import React from 'react';
import './main.css';
import PageTitle from './PageTitle';


function Main() {
  console.log('Main component rendered');
  return (
    <main id="main" className="main">
      <PageTitle/>
    </main>
  );
}

export default Main;