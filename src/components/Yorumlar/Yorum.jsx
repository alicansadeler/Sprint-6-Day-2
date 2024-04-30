import React from 'react';

const Yorum = (props) => {
  const { yorum } = props;

  return (
    <div className="comment-text">
      <span className="user">{yorum.username}</span>{' '}
      <span className="comment">{yorum.text}</span>
    </div>
  );
};

export default Yorum;
