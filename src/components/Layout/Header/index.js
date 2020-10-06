import React, { useState } from 'react';
import { ReactSVG } from 'react-svg';
import { Link } from 'react-router-dom';

//components
import Button from '../../Button';
import ModalHeader from '../../ModalHeader';
import Burger from './Burger';

//Assets
import HeaderLogo from '../../../assets/svg/headerLogo.svg';

export default function Header() {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    if (!modal) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
    setModal(!modal);
  };
  return (
    <>
      <header className="header">
        <div className="header__wrapper">
          <Link to="/">
            <ReactSVG src={HeaderLogo} />
          </Link>
          <div className="burger-menu">
            <Burger />
          </div>
          <div className="header__links">
            <Link to="/amber-token" className="header__links__link">
              Amber Token
            </Link>
            <Link to="/ecosystem-overview" className="header__links__link">
              Ecosystem Overview
            </Link>
          </div>
          <div className="header__wrapper__btn-div" onClick={handleModal}>
            <Button text="Get started" />
          </div>
        </div>
      </header>
      {modal && <ModalHeader onClick={handleModal} />}
    </>
  );
}
