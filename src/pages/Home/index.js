import React, { useState } from 'react';
import { ReactSVG } from 'react-svg';
import { Link } from 'react-router-dom';

// Assets
import AmbrosusLogo from '../../assets/svg/ambrosusBig.svg';
import HeaderImg from '../../assets/svg/mainPageImg.svg';
import Image1 from '../../assets/svg/mainPage1.svg';
import Image2 from '../../assets/svg/mainPage2.svg';
import Image3 from '../../assets/svg/mainPage3.svg';
import Image4 from '../../assets/svg/mainPage4.svg';
import Image5 from '../../assets/svg/mainPage5.svg';

//Components
import Button from '../../components/Button';
import MainSelection from '../../components/MainSelection';
import PreFooter from '../../components/PreFooter';
import ModalHeader from '../../components/ModalHeader';

export default function Home() {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    if (!modal) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
    setModal(!modal);
  };
  return (
    <>
      {modal && <ModalHeader onClick={handleModal} />}
      <div className="main-page">
        <div className="main-page__header">
          <div className="main-page__header__left">
            <ReactSVG src={AmbrosusLogo} className="main-page__header__logo" />
            <h3 className="main-page__header__left__title">
              Fully Operable. Fully Decentralized.
            </h3>
            <p className="main-page__header__left__p">
              <span className="main-page__header__span">Ambrosus</span>is a
              fully-developed public-permissioned blockchain ecosystem,
              optimally designed for scalably integrating distributed ledger
              technology with Internet of Things (IoT) Devices and enterprise
              software management systems.
            </p>
            <div className="main-page__header__left__footer">
              <div onClick={handleModal}>
                <Button text="Get started" />
              </div>
              <Link
                to="amber-token"
                className="main-page__header__left__footer__link"
              >
                Amber Token
              </Link>
              <Link
                to="ecosystem-overview"
                className="main-page__header__left__footer__link"
              >
                Ecosystem Overview
              </Link>
            </div>
          </div>
          <div className="main-page__header__right">
            <ReactSVG src={HeaderImg} className="main-page__header__image" />
          </div>
        </div>
        <div className="main-page__content container">
          <MainSelection
            img={Image1}
            title="Over 700 Live Distributed Validator and Storage Nodes"
            subtitle="For validating transactions and storing bundles of data, Ambrosus has a live network of 
          globally distributed node operators. Based upon a Proof of 
          Authority Consensus Design, data is securely validated and immutably stored upon reaching the Ambrosus blockchain."
          />
          <MainSelection
            img={Image2}
            title="Over 700 Live Distributed Validator and Storage Nodes"
            subtitle="For validating transactions and storing bundles of data, Ambrosus has a live network of 
          globally distributed node operators. Based upon a Proof of 
          Authority Consensus Design, data is securely validated and immutably stored upon reaching the Ambrosus blockchain."
            reverse
          />
          <MainSelection
            img={Image3}
            title="Over 700 Live Distributed Validator and Storage Nodes"
            subtitle="For validating transactions and storing bundles of data, Ambrosus has a live network of 
          globally distributed node operators. Based upon a Proof of 
          Authority Consensus Design, data is securely validated and immutably stored upon reaching the Ambrosus blockchain."
          />
          <MainSelection
            img={Image4}
            title="Over 700 Live Distributed Validator and Storage Nodes"
            subtitle="For validating transactions and storing bundles of data, Ambrosus has a live network of 
          globally distributed node operators. Based upon a Proof of 
          Authority Consensus Design, data is securely validated and immutably stored upon reaching the Ambrosus blockchain."
            reverse
          />
          <MainSelection
            img={Image5}
            title="Over 700 Live Distributed Validator and Storage Nodes"
            subtitle="For validating transactions and storing bundles of data, Ambrosus has a live network of 
          globally distributed node operators. Based upon a Proof of 
          Authority Consensus Design, data is securely validated and immutably stored upon reaching the Ambrosus blockchain."
          />
        </div>
        <PreFooter />
      </div>
    </>
  );
}
