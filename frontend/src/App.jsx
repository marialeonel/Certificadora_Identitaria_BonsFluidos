import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/landing-page/LandingPage';
import Blog from './components/blog/Blog';
import Login from './components/login/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
