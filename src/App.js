import { Route, Routes } from "react-router-dom"
import './App.css';
import Welcome from './Components/Welcome';
import Home from './Components/Home';

function App() {
  return (
      <Routes>
          <Route
          path='/'
          element={<Welcome />}
          />
          <Route
          path='home'
          element={<Home />}
          />
      </Routes>

  );
}

export default App;
