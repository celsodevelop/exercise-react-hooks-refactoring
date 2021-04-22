// src/context/Provider.js

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CarsContext from './CarsContext';


function Provider({ children }) {

   const [cars, setCars] = useState({
        red: false,
        blue: false,
        yellow: false,
      })

   const moveCar = (car, side) => {
    setCars({
        ...cars,
        [car]: side,
    })
  };
    return (
      <CarsContext.Provider value={{ ...cars, moveCar}}>
        {children}
      </CarsContext.Provider>
    );
  }

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
