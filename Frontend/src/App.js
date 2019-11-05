import React, {useState, useEffect} from 'react';
import Comment from './components/Comment.js';
import CommentForm from './components/CommentForm.js';

const fetchLatestComments = (setData) => {
  fetch('/comments')
    .then(response => response.json())
    .then(data => setData(data))
    .catch(error => { console.error(error); });
}

const postNewComment = (commentData, setAuthorId) => {
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
    .then(data => setAuthorId(data.author_id))
    .catch(error => { console.error(error); });
}

function App() {
  const [latestComments, setLatestComments] = useState([])
  const newAuthorId = 0;
  const [authorId, setAuthorId] = useState(newAuthorId);

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
    await postNewComment(
      (authorId > 0
        ? { text: comment, id: authorId }
        : { authorName: name, authorEmail: email, text: comment, id: authorId }
      ),
      setAuthorId,
    );
    fetchLatestComments(setLatestComments);
  }

  return (
    <div className="container-fluid">
      <main className="mx-auto" style={{ maxWidth: '700px' }}>
        <h1>Last 5 Comments</h1>
        <div className="p-3">
          {latestComments.map(comment => (<Comment {...comment} key={comment.id}/>))}
        </div>
        <CommentForm
          repeatAuthor={authorId !== 0}
          onSubmit={handleSubmit}
        />
      </main>
    </div>
  );
}

export default App;
