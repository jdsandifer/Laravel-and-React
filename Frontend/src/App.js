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
    .then(response => response.json())
    .catch(error => { console.warn(error); });
}

function App() {
  const [latestComments, setLatestComments] = useState([]);

  // Get latest comments on mount
  useEffect(
    () => { fetchLatestComments(setLatestComments); },
    [],
  );

  // Get the latest comment every 60 seconds, too.
  const sixtySeconds = 60000;  // in milliseconds
  useEffect(
    () => {
      const commentsUpdater = setInterval(
        () => { fetchLatestComments(setLatestComments); },
        sixtySeconds,
      );
      return () => clearInterval(commentsUpdater);
    },
    [],
  );

  const handleSubmit = async (name, email, comment) => {
    await postNewComment({ userName: name, userEmail: email, text: comment });
    fetchLatestComments(setLatestComments);
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
