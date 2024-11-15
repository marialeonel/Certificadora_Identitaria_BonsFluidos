import { useNavigate } from 'react-router-dom';

function Blog() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Blog</h1>
      <p>Esta é a página do blog onde você pode visualizar posts.</p>
      <button onClick={() => navigate('/login')}>Login</button>
    </div>
  );
}

export default Blog;
