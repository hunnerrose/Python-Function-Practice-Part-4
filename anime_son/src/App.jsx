import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import Library from './components/Library';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/animes'>Animes</Link>
            </li>
          </ul>
        </header>
        <main>
          <Routes>
            <Route path='/'/>
            <Route path='/animes' element={<Library />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
