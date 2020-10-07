/** Core * */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

const Burger = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const closeMenu = () => setMenuIsOpen(false);

  useEffect(() => {
    menuIsOpen
      ? (document.body.parentElement.className = 'hideScroll')
      : (document.body.parentElement.className = '');
    menuIsOpen
      ? (document.body.className = 'hideScroll')
      : (document.body.className = '');
  }, [menuIsOpen]);

  const handleStateChange = (state) => {
    setMenuIsOpen(state.isOpen);
  };

  return (
    <>
      <Menu
        className="header__side-menu"
        right
        customCrossIcon={<div className="close-menu">X</div>}
        isOpen={menuIsOpen}
        onStateChange={(state) => handleStateChange(state)}
      >
        <main>
          <p className="header-wrapper-navbar-items" onClick={closeMenu}>
            <Link
              to="/amber-token"
              className="header__links__link burger__link"
            >
              Amber Token
            </Link>
          </p>
          <p className="header-wrapper-navbar-items" onClick={closeMenu}>
            <Link
              to="/ecosystem-overview"
              className="header__links__link burger__link"
            >
              Ecosystem Overview
            </Link>
          </p>
        </main>
      </Menu>
    </>
  );
};

export default Burger;
