import React from 'react';
import Yorumlar from '../Yorumlar/Yorumlar';
import BegenBolumu from './BegenBolumu';
import GonderiBasligi from './GonderiBasligi';

const Gonderi = (props) => {
  const { gonderi, gonderiyiBegen } = props;
  /* ADIM 3: Gönderiyi beğen fonksiyonu bu component'e geliyor ama beğeni sayısı hem yanlış(sahtaVeri'den bakılabilir) hem de artmıyor. problemler neler olabilir? İpucu: BegenBolumu component'ine ve gonderiyiBegen fonksiyona bakabilirsin*/
  return (
    <div className="post-border">
      <GonderiBasligi
        username={gonderi.username}
        thumbnailUrl={gonderi.thumbnailUrl}
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={gonderi.imageUrl}
        />
      </div>
      <BegenBolumu
        begeniSayisi={gonderi.likes}
        gonderiyiBegen={gonderiyiBegen}
        gonderiId={gonderi.id}
      />
      <Yorumlar yorumlar={gonderi.comments} />
    </div>
  );
};

export default Gonderi;
