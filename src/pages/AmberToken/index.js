import React from 'react';
import { ReactSVG } from 'react-svg';

//Assets
import MainImg from '../../assets/svg/amberTokenMain.svg';
import CardImg from '../../assets/svg/amber-token-img.svg';

// Component
import PreFooter from '../../components/PreFooter';

export default function AmberToken() {
  return (
    <>
      <div className="amber-token__header">
        <div className="amber-token__header__left">
          <h1 className="amber-token__header__left__title">The Amber Token:</h1>
          <p className="amber-token__header__left__p">
            The Ambrosus Ecosystem - AMB-NET - is comprised of three primary
            types of Masternodes, each for servicing a specific part of the
            Network:
          </p>
          <p className="amber-token__header__left__p">
            Amber is used in the Ambrosus Ecosystem to manage applications,
            validate transactions, secure data, and as a store of value.
          </p>
        </div>
        <div className="amber-token__header__right">
          <ReactSVG src={MainImg} className="amber-token__header__right__img" />
        </div>
      </div>
      <div className="amber-token__main container">
        <h3 className="amber-token__main__h3">
          For Running a Node on the Ambrosus Blockchain the Following Tokens
          Thresholds are Required in line with the Ambrosus Proof of Authority
          Consensus Model and Crypto-Economic Design:
        </h3>
        <div className="amber-token__main__cards">
          <div className="amber-token__main__card">
            <ReactSVG src={CardImg} className="amber-token__main__card__img" />
            <h4 className="amber-token__main__card__h4">Atlas Masternodes</h4>
            <p className="amber-token__main__card__p">Zeta: 10,000 AMB</p>
            <p className="amber-token__main__card__p">Sigma: 30,000 AMB </p>
            <p className="amber-token__main__card__p">Omega: 75,000 AMB</p>
          </div>
          <div className="amber-token__main__card">
            <ReactSVG src={CardImg} className="amber-token__main__card__img" />
            <h4 className="amber-token__main__card__h4">Apollo Masternodes</h4>
            <p className="amber-token__main__card__p">1,000,000 AMB</p>
          </div>
          <div className="amber-token__main__card">
            <ReactSVG src={CardImg} className="amber-token__main__card__img" />
            <h4 className="amber-token__main__card__h4">Atlas Masternodes</h4>
            <p className="amber-token__main__card__p">Open-Sourced</p>
          </div>
        </div>
        <div className="amber-token__main__block">
          <h3 className="amber-token__main__block__text">
            Bundle Cost: $25 USD Paid in Amber
          </h3>
        </div>
      </div>
      <PreFooter />
    </>
  );
}
