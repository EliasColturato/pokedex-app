import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import PokemonDetail from './pages/pokemon-detail';

const RoutesApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:name" element={<PokemonDetail />} />
      </Routes>
    </Router>
  );
};

export default RoutesApp;
