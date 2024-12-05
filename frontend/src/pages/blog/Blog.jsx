import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';


function Blog() {
  const navigate = useNavigate();

  return (
    <>
    <Header/>
    <div>
      <h1>Blog</h1>
      <p>Esta é a página do blog onde você pode visualizar posts.</p>
      <button onClick={() => navigate('/login')}>Login</button>
        <div className="bg-logo-color p-20">
          <h1 className="text-4xl font-bold text-center mb-3 text-white">
            BLOG
          </h1>
          <p className="text-xl text-center text-white">
            Novidades do projeto Bons Fluídos
          </p>
        </div>
        <div>
          <Input className="w-full px-4 py-2" placeholder="Pesquise aqui..."/>
          <Button>+ Adicionar post</Button>
        </div>
    </div>
    <Footer/>
    </>
  );
}

export default Blog;
