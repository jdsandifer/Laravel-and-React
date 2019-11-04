import React, {useState, useEffect} from 'react';
import './App.css';
import Comment from './components/Comment.js';
import CommentForm from './components/CommentForm.js';

const fetchLatestComments = (setData) => {
  fetch('/comments')
    .then(response => response.json())
    .then(data => setData(data))
    .catch(error => { console.warn(error); });
}

const postNewComment = (commentData) => {
  fetch('/comments',
    {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json, text-plain, */*",
        "X-Requested-With": "XMLHttpRequest",
        "X-CSRF-TOKEN": 'test1234'
      },
      method: 'post',
      credentials: "same-origin",
      body: JSON.stringify(commentData),
    })
    .then(response => console.log(response))
    .catch(error => { console.warn(error); });
}

function App() {
  const [latestComments, setLatestComments] = useState([]);

  // Get latest comments on mount
  useEffect(
    () => { fetchLatestComments(setLatestComments); },
    [],
  );

  const handleSubmit = (name, email, comment) => {
    console.log(name, email, comment);
    postNewComment({ userName: name, userEmail: email, text: comment });
  }

  return (
    <main className="App">
      <h1>Latest Comments</h1>
      <div>
        {latestComments.map(comment => (<Comment {...comment} key={comment.id}/>))}
      </div>
      <CommentForm onSubmit={handleSubmit} />
    </main>
  );
}

export default App;
