import React, { useState } from 'react';
import githubIcon from '../images/github-sign.png';
import linkedinIcon from '../images/001-linkedin.png';
import twitterIcon from '../images/twitter.svg';
import emailIcon from '../images/email-icon.png';

export default function Footer(props) {
  return (
    <footer className="bg-light text-center  sticky-bottom">
      <div>
        <a href="mailto:liumanben1990@gmail.com" className="mx-1">
          <img src={emailIcon} width="25px" alt="github"></img>
        </a>
        <a href="https://github.com/BenLiu104" className="mx-1">
          <img src={githubIcon} width="25px" alt="github"></img>
        </a>
        <a
          href="https://www.linkedin.com/in/ben-liu-543487188/"
          className="mx-1"
        >
          <img src={linkedinIcon} width="25px" alt="linkedin"></img>
        </a>
        <a href="https://twitter.com/liumanpan" className="mx-1">
          <img src={twitterIcon} alt="Bootstrap" width="25" />
        </a>
      </div>
      <div
        className="text-center p-3 mt-2"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
      >
        © {new Date().getFullYear()} Copyright
      </div>
    </footer>
  );
}
