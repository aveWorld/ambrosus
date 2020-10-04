import React from 'react';
import { ReactSVG } from 'react-svg';

// Assets
import Image1 from '../../assets/svg/preFooter1.svg';
import Image2 from '../../assets/svg/preFooter2.svg';
import Image3 from '../../assets/svg/preFooter3.svg';
import Image4 from '../../assets/svg/preFooter4.svg';

// Component
import Button from '../Button';

export default function PreFooter() {
  return (
    <div className="pre-footer">
      <h2 className="pre-footer__title">Get Started With Ambrosus</h2>
      <div className="pre-footer__icons">
        <div className="pre-footer__icons__icon">
          <ReactSVG src={Image1} />
          <p className="pre-footer__icons__p">Ambrosus Ecosystem</p>
        </div>
        <div className="pre-footer__icons__icon">
          <ReactSVG src={Image2} />
          <p className="pre-footer__icons__p">Ambrosus Team</p>
        </div>
        <div className="pre-footer__icons__icon">
          <ReactSVG src={Image3} />
          <p className="pre-footer__icons__p">Amber Token</p>
        </div>
        <div className="pre-footer__icons__icon">
          <ReactSVG src={Image4} />
          <p className="pre-footer__icons__p">Ambrosus Blog</p>
        </div>
      </div>
      <div className="pre-footer__button">
        <Button text="Contact Us" />
      </div>
    </div>
  );
}
