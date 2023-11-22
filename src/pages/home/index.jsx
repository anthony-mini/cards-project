import React from 'react';
import Logo from '../../assets/logo.svg';

export default function Home() {
  return (
    <>
      <main>
        <header className="header-container">
          <img className="header-logo" src={Logo} alt="" />
          <h1 className="header-title">The Designer's Odyssey</h1>
        </header>
        <h1>Home</h1>
        <a href="/question">question</a> <br />
        <a href="/challenges">challenges</a>
      </main>
    </>
  );
}
