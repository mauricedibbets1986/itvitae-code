import { Route, Routes } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';

import Home from './pages/Home';
import Characters from './pages/Characters';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <> 
      <h1>Hello world</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/characters">Characters</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/> {/*mag ook JSX zijn bv een h1*/}
        <Route path="/characters" element={<Characters />} />
      </Routes>
    </>
  );
}

export default App;
