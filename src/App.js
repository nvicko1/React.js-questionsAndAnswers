import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [questons, setQuestions] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>questions and answers above</h3>
        <section className="info">
          {questons.map(question => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
