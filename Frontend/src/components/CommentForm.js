import React, {useState, useEffect} from 'react';

const CommentForm = (props) => {
  const { repeatAuthor, onSubmit } = props;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

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
          Success! Your comment has been added.
        </div>
      )}
      <form className="p-3" onSubmit={handleSubmit}>
        {!repeatAuthor && (
          <>
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
                  type="email"
                  required={true}
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
            </div>
          </>
        )}
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
