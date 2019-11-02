import React from 'react';

const Comment = (props) => {
  const { text, userName, userEmail } = props;

  return (
    <div>
      <p>{text}</p>
      <div style={{textAlign: 'right'}}> - {userName}</div>
    </div>
  );
}

export default Comment;
