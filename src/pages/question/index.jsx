import React from 'react';
import Cards from '../../components/cards';
import BackWard from '../../assets/backward-solid.svg';

export default function Question() {
  return (
    <>
      <main>
        <button className="backward-button">
          <a href="/">
            <img className="backward" src={BackWard} alt="" />
          </a>
        </button>
        <Cards />
      </main>
    </>
  );
}
