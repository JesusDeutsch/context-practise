import React, { createContext, useState } from 'react';

const ContextData = createContext();

const ContextDataProvider = ({ children }) => {
  const [data, setData] = useState({
    favoritePet: 'Gato',
    favoriteFood: 'KFC',
    favoriteDrink: 'Coca-Cola',
    isAdult: true,
    isDrunk: false,
  });

  return (
    <ContextData.Provider value={data}>
      {children}
    </ContextData.Provider>
  );
};

export { ContextData, ContextDataProvider };
