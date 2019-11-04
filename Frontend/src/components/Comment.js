import React from 'react';

const Comment = (props) => {
  const { text, userName, userEmail } = props;

  return (
    <div>
      <p>{text}</p>
      <span> - {userName}</span>
    </div>
  );
}

export default Comment;
