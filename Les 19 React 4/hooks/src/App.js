import { useState, useEffect } from 'react';

import './App.css';

import Counter from './Counter';

function App() {
  const [resourceType, setResourceType] = useState('people');
  const [starwars, setStarwars] = useState([]);

  useEffect(() => {
    fetch(`https://swapi.dev/api/${resourceType}`)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setStarwars(json.results);
      })
  }, [resourceType])

  return (
    <>
      <header>
        <h1>How many?</h1>
        <Counter />
      </header>

      <main>
        <section>
          <button onClick={() => setResourceType('people')}>People</button>
          <button onClick={() => setResourceType('planets')}>Planets</button>
          <h1>Starwars {resourceType}</h1>
          {starwars.map(item => {
            return <h3>{item.name}</h3>
          })}
        </section>
      </main>
    </>

  );
}

export default App;
