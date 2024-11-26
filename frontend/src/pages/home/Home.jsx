import { useNavigate } from 'react-router-dom'
import ModalForm from '../../components/ModalForm/ModalForm';

function Home() {
  const navigate = useNavigate()

  return (
    <div className='flex bg-rose-800 w-full max-h-full'>
      <h1>Bem-vindo à Landing Page</h1>
      <button onClick={() => navigate('/blog')}>Acessar Blog</button>
    </div>
  );
}

export default Home;
