/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Link } from 'react-router-dom';

const Configuration = () => (
  <div className="homepage_container">
    <Link to="/store">
      <h1 className="homepage_title">Blazapp</h1>
    </Link>
  </div>
);
export default Configuration;