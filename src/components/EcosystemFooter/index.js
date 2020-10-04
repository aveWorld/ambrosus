import React from 'react';
import { ReactSVG } from 'react-svg';

//Components
import Button from '../Button';

//Assets
import Tick from '../../assets/svg/tick.svg';
import FooterImg from '../../assets/svg/ecosystem-img.svg';

export default function EcosystemFooter() {
  return (
    <div className="ecosystem__footer">
      <div className="ecosystem__footer__left">
        <ReactSVG src={FooterImg} />
      </div>
      <div className="ecosystem__footer__right">
        <h3 className="ecosystem__footer__title">
          Get Started With Ambrosus Today
        </h3>
        <p className="ecosystem__footer__subtitle">
          Join the Ambrosus Ecosystem to build the future of industrial product
          management, and decentralized business solutions. Start building as:
        </p>
        <div className="ecosystem__footer__tick-block">
          <ReactSVG
            src={Tick}
            className="ecosystem__footer__tick-block__tick"
          />
          <p className="ecosystem__footer__tick-block__text">
            An Entrepreneur Launching Your Own Company / Token / Vertical
          </p>
        </div>
        <div className="ecosystem__footer__tick-block">
          <ReactSVG
            src={Tick}
            className="ecosystem__footer__tick-block__tick"
          />
          <p className="ecosystem__footer__tick-block__text">
            A Developer Building A DAPP
          </p>
        </div>
        <div className="ecosystem__footer__tick-block">
          <ReactSVG
            src={Tick}
            className="ecosystem__footer__tick-block__tick"
          />
          <p className="ecosystem__footer__tick-block__text">
            An Ambassador Growing AMB-NET
          </p>
        </div>
        <div className="ecosystem__footer__tick-block">
          <ReactSVG
            src={Tick}
            className="ecosystem__footer__tick-block__tick"
          />
          <p className="ecosystem__footer__tick-block__text">
            A Node Operator On The Network
          </p>
        </div>
        <div className="ecosystem__footer__right__btn">
          <Button text="Contact Us" />
        </div>
      </div>
    </div>
  );
}
