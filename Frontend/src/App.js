import React, {useState, useEffect} from 'react';
import './App.css';
import Comment from './components/Comment.js';

function App() {
  const [latestComments, setLatestComments] = useState([]);

  useEffect(
    () => {
      fetch('/comments')
        .then(response => response.json())
        .then(data => setLatestComments(data))
        .catch(error => { console.warn(error); });
    },
    [],
  );

  return (
    <main className="App">
      <h1>Latest Comments</h1>
      <div>
        {latestComments.map(comment => (<Comment {...comment} key={comment.id}/>))}
      </div>
      <div>form to add comments</div>
    </main>
  );
}

export default App;
