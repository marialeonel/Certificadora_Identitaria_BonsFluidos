import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input/Input';

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Bem-vindo à Landing Page</h1>
      <button onClick={() => navigate('/blog')}>Acessar Blog</button>
    </div>

  );
}

export default Home;
