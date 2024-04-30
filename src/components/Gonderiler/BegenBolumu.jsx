import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';

const BegenBolumu = (props) => {
  const { gonderiyiBegen, begeniSayisi, gonderiId } = props;
  const [begenildiMi, setBenildiMi] = useState(false);

  const begeniHandler = () => {
    if (begenildiMi === false) {
      setBenildiMi(true);
      gonderiyiBegen(gonderiId);
    }
  };

  return (
    <div>
      <div className="like-section" key="likes-icons-container">
        <div
          onClick={begeniHandler}
          data-testid="like-button"
          className="like-section-wrapper"
        >
          <FontAwesomeIcon icon={faHeart} color={begenildiMi ? 'red' : ''} />
        </div>
        <div className="like-section-wrapper">
          <FontAwesomeIcon icon={faComment} />
        </div>
      </div>
      <p className="like-number">{begeniSayisi} likes</p>
    </div>
  );
};

export default BegenBolumu;
