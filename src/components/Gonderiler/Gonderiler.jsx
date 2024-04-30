import React from 'react';
import Gonderi from './Gonderi';
import './Gonderiler.css';

const Gonderiler = (props) => {
  /* Adım 1: Bu component kullanıldığı yere bakarak hangi propları almalıyız. */
  const { gonderiBegen, gonderiler } = props;
  return (
    <div className="posts-container-wrapper">
      {gonderiler.map((gonderi) => {
        return <Gonderi gonderi={gonderi} gonderiyiBegen={gonderiBegen} />;
      })}
    </div>
  );
};

export default Gonderiler;
