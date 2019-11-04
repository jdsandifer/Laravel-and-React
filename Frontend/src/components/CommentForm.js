import React, {useState} from 'react';

const CommentForm = (props) => {
  const { onSubmit } = props;

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
      <h2>Add A Comment</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:
          <input
            type='name'
            required={true}
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
        <label>Email:
          <input
            type='email'
            required={true}
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <label>Comment:
          <textarea
            required={true}
            value={comment}
            onChange={e => setComment(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
        {success && "Success! Your comment has been added."}
      </form>
    </div>
  );
}

export default CommentForm;