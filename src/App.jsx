import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage/HomePage';
import CocktailPage from './pages/CocktailPage/CocktailPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route for home page */}
        <Route path="/" element={<HomePage />} />

        {/* Route for specific page */}
        <Route path="/cocktails/:id" element={<CocktailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
