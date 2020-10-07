import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function NotFound() {
  return (
    <div className="not-found">
      <Helmet>
        <title>Not Found</title>
      </Helmet>
      <h1 className="not-found__title">404 - Page Not Found</h1>
      <Link to="/" className="not-found__link">
        Go Home
      </Link>
    </div>
  );
}
