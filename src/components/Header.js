import React from 'react';
import '../css/Header.css';

const Header = () => {
  return(
    <div className="title">
      <a
        href="https://en.wikipedia.org/wiki/Special:Random"
      >
        read random articles here.
      </a>
      <h1>
        WIKI MAN
      </h1>
    </div>
  );
};

export default Header;
