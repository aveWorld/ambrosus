import React from 'react';
import { ReactSVG } from 'react-svg';

//Assets
import CardImg from '../../assets/svg/amber-token-img.svg';
import Tick from '../../assets/svg/tick.svg';
import FooterImg from '../../assets/svg/ecosystem-img.svg';

// Components
import Button from '../../components/Button';
import EcosystemFooter from '../../components/EcosystemFooter';

export default function Ecosystem() {
  return (
    <>
      <div className="ecosystem__head">
        <h1 className="ecosystem__head__title">Ambrosus: Ecosystem Overview</h1>
        <p className="ecosystem__head__subtitle">
          The Ambrosus Ecosystem - AMB-NET - is comprised of three primary types
          of Masternodes, each for servicing a specific part of the Network:{' '}
        </p>
        <div className="ecosystem__head__cards">
          <div className="ecosystem__head__cards__card">
            <ReactSVG src={CardImg} className="ecosystem__head__card__image" />
            <h4 className="ecosystem__head__card__title">Atlas Masternodes</h4>
            <p className="ecosystem__head__card__subtitle">
              Atlas Masternodes provide storage on the Ambrosus Network, by
              securely sheltering ‘bundles’ of data uploaded by Hermes
              Masternodes.{' '}
            </p>
          </div>
          <div className="ecosystem__head__cards__card">
            <ReactSVG src={CardImg} className="ecosystem__head__card__image" />
            <h4 className="ecosystem__head__card__title">Apollo Masternodes</h4>
            <p className="ecosystem__head__card__subtitle">
              As validators, Apollo Masternodes validate transactions on
              AMB-NET, by maintaining the state, and confirming new blocks
              created on the blockchain.{' '}
            </p>
          </div>
          <div className="ecosystem__head__cards__card">
            <ReactSVG src={CardImg} className="ecosystem__head__card__image" />
            <h4 className="ecosystem__head__card__title">Hermes Masternodes</h4>
            <p className="ecosystem__head__card__subtitle">
              Open-Sourced, Hermes allows users to connect data, existing
              software, and IoT devices and applications to the Ambrosus
              Blockchain. Beyond providing interconnectivity, Hermes also allow
              for data collecting, management, storage and bundling - All in one
              tool capable of being deployed from anywhere in the world.
            </p>
          </div>
        </div>
        <p className="ecosystem__head__subtitle ecosystem__head__bottom-text">
          The Ambrosus Ecosystem Involves Nodes, Sidechains, and Open-Source
          Tools for Operationalizing the Next-generation of Industrial Data
          Management.
        </p>
      </div>
      <div className="ecosystem__main">
        <div className="ecosystem__main__block">
          <h3 className="ecosystem__main__block__title">
            The Ambrosus Explorer
          </h3>
          <p className="ecosystem__main__block__subtitle">
            Visualize activity on the Ambrosus Network from Block Creation to
            Live Nodes on the Network.
          </p>
        </div>
        <div className="ecosystem__main__block">
          <h3 className="ecosystem__main__block__title">
            The Ambrosus Node Onboarding Procedure
          </h3>
          <p className="ecosystem__main__block__subtitle">
            Get started with operating your own Masternode using the Ambrosus
            Shell. Validate Transactions, Experiment on Test-Net, or launch your
            own Hermes Masternode!{' '}
          </p>
        </div>
        <div className="ecosystem__main__block">
          <h3 className="ecosystem__main__block__title">
            The Ambrosus Sidechain Infrastructure
          </h3>
          <p className="ecosystem__main__block__subtitle">
            Launch a sidechain on AMB-NET to tokenize a project, create a
            blockchain-based protocol, and provide turn-key solutions to
            specific enterprises and industries.{' '}
          </p>
        </div>
        <div className="ecosystem__main__block">
          <h3 className="ecosystem__main__block__title">Amb.to</h3>
          <p className="ecosystem__main__block__subtitle">
            Use Open-Source Front-End Tools to Track and Trace Products on the
            blockchain, with geographical monitoring and accepted industry
            standards.{' '}
          </p>
        </div>
        <div className="ecosystem__main__block">
          <h3 className="ecosystem__main__block__title">
            Open-Source Software Developer Kits
          </h3>
          <p className="ecosystem__main__block__subtitle">
            Build Dapps in common programming languages to quickly and easily
            create solutions and tools for enterprises and entrepreneurs.{' '}
          </p>
        </div>
        <p className="ecosystem__main__bottom-text">
          Taken altogether, the different tools in the Ambrosus Ecosystem allow
          any enterprise, developer, or entrepreneur to quickly and easily build
          blockchain-based applications, launch tokenized projects, or integrate
          existing IoT devices and software on a robust blockchain
          infrastructure.{' '}
        </p>
      </div>
      <div className="ecosystem__footer__wrapper">
        <EcosystemFooter />
      </div>
    </>
  );
}
