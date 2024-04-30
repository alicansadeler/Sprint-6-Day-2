import React, { useState } from 'react';

import AramaCubugu from './components/AramaCubugu/AramaCubugu.jsx';
import Gonderiler from './components/Gonderiler/Gonderiler.jsx';
import sahteVeri from './sahteVeri.js';
import './App.css';

const App = () => {
  const [gonderiler, setGonderiler] = useState(sahteVeri);
  const [aramaKriteri, setAramaKriteri] = useState('');

  const aramaHandler = (value) => {
    setAramaKriteri(value);
    if (value === '') {
      setGonderiler(sahteVeri);
      return;
    }

    const aramaSonuclari = gonderiler.filter((gonderi) => {
      if (gonderi.username.includes(value)) {
        return gonderi;
      } else {
        return false;
      }
    });
    setGonderiler(aramaSonuclari);
  };

  const gonderiyiBegen = (gonderiID) => {
    const yeniGonderiler = gonderiler.map((gonderi) => {
      if (gonderi.id === gonderiID) {
        return { ...gonderi, likes: gonderi.likes + 1 };
      } else {
        return gonderi;
      }
    });
    setGonderiler(yeniGonderiler);
  };

  return (
    <div className="App">
      <AramaCubugu aramaKriteri={aramaKriteri} aramaHandler={aramaHandler} />
      <Gonderiler gonderiyiBegen={gonderiyiBegen} gonderiler={gonderiler} />
    </div>
  );
};

export default App;
