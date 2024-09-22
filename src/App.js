import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  const message = "¡Bienvenido a la página de anime!";

  return (
    <div>
      <NavBar />
      <ItemListContainer message={message} />
    </div>
  );
};

export default App;
