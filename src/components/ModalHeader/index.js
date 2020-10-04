import React from 'react';
import { ReactSVG } from 'react-svg';
import EcosystemFooter from '../EcosystemFooter';

//Assets
import ExitImg from '../../assets/svg/exit-img.svg';

export default function ModalHeader({ onClick }) {
  return (
    <div className="modal-header">
      <ReactSVG
        src={ExitImg}
        className="modal-header__exit"
        onClick={onClick}
      />
      <EcosystemFooter />
    </div>
  );
}
