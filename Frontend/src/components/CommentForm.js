import React, {useState, useEffect} from 'react';

const CommentForm = (props) => {
  const { savedName, savedEmail, onSubmit } = props;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

  // If we get the user's name from the parent, sync it.
  useEffect(
    () => {
      setName(savedName);
    },
    [savedName],
  );

  // If we get the user's email from the parent, sync it.
  useEffect(
    () => {
      setEmail(savedEmail);
    },
    [savedEmail],
  );

  const [success, setSuccess] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name, email, comment);
    setName('');
    setEmail('');
    setComment('');
    setSuccess(true);
  }

  return (
    <div>
      <h3>Add Your Comment</h3>
      { success && (
        <div className="alert alert-success" role="alert">
          "Success! Your comment has been added."
        </div>
      )}
      <form className="p-3" onSubmit={handleSubmit}>
        <div className="form-group row">
          <label
            className="col-sm-3 col-form-label"
            for="name"
          >
            Author Name
          </label>
          <div className="col-sm-9">
            <input
              id="name"
              className="form-control"
              readonly={savedName}
              type="text"
              required={true}
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group row">
          <label
            className="col-sm-3 col-form-label"
            for="email"
          >
            Author Email
          </label>
          <div className="col-sm-9">
            <input
              id="email"
              className="form-control"
              readonly={savedEmail}
              type="email"
              required={true}
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group row">
          <label
            className="col-sm-3 col-form-label"
            for="comment"
          >
            Comment
          </label>
          <div className="col-sm-9">
            <input
              id="comment"
              className="form-control"
              type="text"
              required={true}
              value={comment}
              onChange={e => setComment(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <input className="btn btn-success" type="submit" value="Submit" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default CommentForm;
