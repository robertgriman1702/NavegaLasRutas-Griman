import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer saludo={"¡Bienvenido a Pegazo!"} />
    </>
  );
}

export default App;