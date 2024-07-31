import React, { useContext } from 'react';
import { ContextData } from './ContextData';

const Card = () => {
  const data = useContext(ContextData);

  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '8px', maxWidth: '300px' }}>
      <h2>Información de Usuario</h2>
      <p><strong>Tu mascota favorita:</strong> {data.favoritePet}</p>
      <p><strong>Tu comida favorita:</strong> {data.favoriteFood}</p>
      <p><strong>Tu bebida favorita:</strong> {data.favoriteDrink}</p>
      <p><strong>¿Eres mayor de edad?</strong> {data.isAdult ? 'Sí' : 'No'}</p>
      <p><strong>¿Eres borracho?</strong> {data.isDrunk ? 'Sí' : 'No'}</p>
    </div>
  );
};

export default Card;
