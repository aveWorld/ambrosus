import React from 'react';
import { ReactSVG } from 'react-svg';
import { Link } from 'react-router-dom';

// Assets
import Logo from '../../../assets/svg/footer-logo.svg';
import Image1 from '../../../assets/svg/footer1.svg';
import Image2 from '../../../assets/svg/footer2.svg';
import Image3 from '../../../assets/svg/footer3.svg';
import Image4 from '../../../assets/svg/footer4.svg';
import Image5 from '../../../assets/svg/footer5.svg';
import Image6 from '../../../assets/svg/footer6.svg';
import Image7 from '../../../assets/svg/footer7.svg';
import Image8 from '../../../assets/svg/footer8.svg';
import Image9 from '../../../assets/svg/footer9.svg';
import Image10 from '../../../assets/svg/footer10.svg';
import Image11 from '../../../assets/svg/footer11.svg';

export default function Footer() {
  const copyrightText = `Ambrosus 2017-${new Date().getFullYear()}, All Rights Reserved `;
  return (
    <div className="footer">
      <div className="footer-wrapper container">
        <Link to="/" className="footer__item">
          <ReactSVG src={Logo} />
        </Link>
        <div className="footer__icons footer__item">
          <Link to="/">
            <ReactSVG src={Image1} />
          </Link>
          <Link to="/">
            <ReactSVG src={Image2} />
          </Link>
          <Link to="/">
            <ReactSVG src={Image3} />
          </Link>
          <Link to="/">
            <ReactSVG src={Image4} />
          </Link>
          <Link to="/">
            <ReactSVG src={Image5} />
          </Link>
          <Link to="/">
            <ReactSVG src={Image6} />
          </Link>
          <Link to="/">
            <ReactSVG src={Image7} />
          </Link>
          <Link to="/">
            <ReactSVG src={Image8} />
          </Link>
          <Link to="/">
            <ReactSVG src={Image9} />
          </Link>
          <Link to="/">
            <ReactSVG src={Image10} />
          </Link>
          <Link to="/">
            <ReactSVG src={Image11} />
          </Link>
        </div>
        <span className="footer__copyright footer__item">{copyrightText}</span>
      </div>
    </div>
  );
}
