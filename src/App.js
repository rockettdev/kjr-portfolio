import { Route, Routes } from "react-router-dom"
import './App.css';
import Welcome from './Components/Welcome';
import Home from './Components/Home/index.js';

function App() {
  return (
      <Routes>
          <Route
          path='/'
          element={<Welcome />}
          />
          <Route
          path='portfolio'
          element={<Home />}
          />
      </Routes>
  );
}

export default App;
