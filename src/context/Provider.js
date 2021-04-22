// src/context/Provider.js

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider({children}) {

  const [cars, setCars] = useState({
    red: false,
    blue: false,
    yellow: false,
  });

  const [signal, setSignal] = useState({color: 'red'});

 const moveCar = (car, side) => {
    setCars((prevCars) => ({
        ...prevCars,
        [car]: side,
      }))
  };

  const changeSignal = (signalColor) => {
    setSignal({ color: signalColor });
    }

    return (
      <CarsContext.Provider value={{ ...cars, ...signal, moveCar, changeSignal }}>
        {children}
      </CarsContext.Provider>
    );
  }

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
