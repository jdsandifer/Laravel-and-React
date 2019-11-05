import React from 'react';

const Comment = (props) => {
  const { text, userName } = props;

  return (
    <div className="card mb-2">
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          {text}
          <footer className="blockquote-footer">{userName}</footer>
        </blockquote>
      </div>
    </div>
  );
}

export default Comment;
