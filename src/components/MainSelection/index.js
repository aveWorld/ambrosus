import React from 'react';
import { ReactSVG } from 'react-svg';

export default function MainSelection({ img, title, subtitle, reverse }) {
  return (
    <div className="main-page__selection">
      {!reverse ? (
        <>
          <ReactSVG
            src={img}
            className="main-page__selection__img padding-right"
          />
          <div className="main-page__selection__div">
            <h3 className="main-page__selection__div__title">{title}</h3>
            <p className="main-page__selection__div__subtitle">{subtitle}</p>
          </div>
        </>
      ) : (
        <>
          <div className="main-page__selection__div padding-right">
            <h3 className="main-page__selection__div__title">{title}</h3>
            <p className="main-page__selection__div__subtitle">{subtitle}</p>
          </div>
          <ReactSVG src={img} className="main-page__selection__img" />
        </>
      )}
    </div>
  );
}
