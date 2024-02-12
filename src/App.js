import { Route, Routes } from "react-router-dom"
import './App.css';
import Home from './Components/Home/index.js';
import Portfolio from './Components/Portfolio/index.js';

function App() {
  return (
      <Routes>
          <Route
          path='portfolio'
          element={<Portfolio />}
          />
          <Route
          path='/'
          element={<Home />}
          />
      </Routes>
  );
}

export default App;
