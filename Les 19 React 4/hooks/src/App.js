import { useState, useEffect } from 'react';

import './App.css';

import Counter from './Counter';

function App() {
  const [resourceType, setResourceType] = useState('people');
  const [starwars, setStarwars] = useState([]);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
   fetch(`https://swapi.dev/api/${resourceType}/`)
    .then(response => response.json())
    .then(json => {
      console.log(json);
      setStarwars(json.results);
    })
  }, [resourceType]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      tick();
    }, 1000)

    return () => clearInterval(intervalId);
  }, [date]);

  function tick() {
    console.log(date)
    setDate(new Date());
   }

  return (
    <>
    <header>
      <div>It is: {date.toLocaleTimeString()}</div>
      <h1>How many?</h1>
      <Counter />
    </header>

    <main>
      <section>
        <button onClick={() => setResourceType('people')}>People</button>
        <button onClick={() => setResourceType('planets')}>Planets</button>
        <h2>Starwars {resourceType}</h2>
        {starwars.map(item => 
          <h3>{item.name}</h3>
        )}
      </section>
    </main>
    </>
  )
}

export default App;