import React from 'react';
import Yorum from './Yorum';
import './Yorumlar.css';

const Yorumlar = (props) => {
  const { yorumlar } = props;
  return (
    <div>
      {yorumlar.map((comment) => {
        return <Yorum key={comment.id} yorum={comment} />;
      })}
    </div>
  );
};

export default Yorumlar;
