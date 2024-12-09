import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import Login from "./pages/login/Login";
import Agenda from "./pages/agenda/Agenda";
import Post from "./pages/post/Post";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/post" element={<Post />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
