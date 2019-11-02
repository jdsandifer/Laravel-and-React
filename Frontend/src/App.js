import React, {useState, useEffect} from 'react';
import './App.css';
import Comment from './components/Comment.js';

function App() {
  const [latestComments, setLatestComments] = useState([{text: 'hi there! first comment', userName: 'joeMan', userEmail: 'something@some.com'}]);

  // useEffect(() => {
  //   fetch()
  //     .then(({data}) => setLatestComments(data))
  // })

  return (
    <main className="App">
      <h1>Latest Comments</h1>
      <div>
        {latestComments.map(comment => (<Comment {...comment} />))}
      </div>
      <div>form to add comments</div>
    </main>
  );
}

export default App;
