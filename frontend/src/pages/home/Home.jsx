import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header'
import Mao from '../../assets/mao_segurando_abs.jpg'
import Button from '../../components/Button/Button';
import GirlFlower from '../../assets/girlwithflower.png';
import AbsDelicado from '../../assets/absdelicado.png';
import Statistics from '../../components/Statistics/Statistics';
import { useEffect, useState } from 'react';
import axiosService from '../../services/AxiosService';
import LastPost from '../../components/LastPost/LastPost'
import ObjectiveList from '../../components/ObjectiveList/ObjectiveList';
import { useNavigate } from 'react-router-dom'

function Home() {
  const [posts, setPosts] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axiosService.get('/posts/all')
        setPosts(response.data.posts)
      } catch (error) {
        console.error('Erro ao buscar os eventos:', error)
      }
    };

    fetchPosts();
  }, []);

  const objectives = [
    "Levar dignidade as mulheres",
    "Combater a pobreza menstrual",
    "Educar sobre a saúde íntima",
    "Distribuir absorventes gratuitos",
  ]

  const handleNavigate = () => {
    navigate('/blog')
  }

  return (
    <div className='flex flex-col w-full'>
      <Header />
      <main className='pt-24 w-full'>
        <div className='max-w-7xl mx-auto px-12 py-16'>
          <div className='flex justify-center items-center flex-col md:gap-24 lg:flex-row gap-16'>
            <div className='flex flex-col gap-4'>
              <h1 className='text-5xl mb-16 text-center font-kaushan font-black text-darker-dark'>Sobre Nós</h1>
              <p className='text-justify'>
                O projeto Bons Fluidos tem como objetivo levar dignidade para meninas que têm o direito à educação prejudicado por menstruarem
              </p>
              <p className='text-justify '>O projeto tem como público alvo meninas de escolas públicas de Cornélio Procópio que ofertam anos finais do ensino fundamental e ensino médio.
              </p>
              <p className='text-justify'>
                Se sua escola tem interesse em abrir esse diálogo, entre em contato conosco!
              </p>
              <div className='flex justify-center mt-10'>
                <Button className='bg-rose-600 text-white font-bold py-2 md:w-[50%] items-center text-center hover:bg-rose-900 transition duration-300'>Contate-nos</Button>
              </div>
            </div>
            <div>
              <img src={Mao} alt="Mão segurando um absorvente" className='w-[100%] md:max-w-[500px] lg:max-w-[800px]' />
            </div>
          </div>
        </div>
        <div className='relative flex flex-col justify-center md:mt-24 px-12'>
          <h1 className='text-5xl mb-24 text-center font-kaushan font-black text-darker-dark'>Nossos Objetivos</h1>
          <div className='flex flex-col-reverse md:flex-row justify-center gap-[10%] items-center'>
            <img src={GirlFlower} alt='Desenho de uma garota segurando uma flor' className='relative bottom-0 h-[400px]' />
            <div>
              <ObjectiveList objectives={objectives}/>
            </div>
          </div>
        </div>
        <div className='flex flex-col w-full bg-rose-600 py-32 px-12'>
          <h1 className='text-5xl mb-24 text-center font-kaushan font-black text-white'>Últimas Notícias</h1>
          <div className='flex justify-center items-center'>
            <div className="max-w-[1200px] min-w-[150px] flex flex-wrap flex-row gap-8 justify-center">
              {posts.length > 0 ? (
                  posts.slice(0, 4).reverse().map((post) => (
                  <LastPost key={post.id} post={post} />
                ))
              ) : (
                <p className="text-center text-white col-span-2">
                  Nenhum post encontrado.
                </p>
              )}
            </div>
          </div>
          <div className='flex justify-center'>
            <Button className='bg-darker-dark w-[200px] transition duration-300 my-8' onClick={handleNavigate}>Ver Mais</Button>
          </div>
        </div>
        <div className='bg-rose-700 w-full'>
          <Statistics />
        </div>
        <div className='py-24 px-12'>
          <h1 className='text-5xl mb-16 text-center font-kaushan font-black text-darker-dark' id='doacoes'>Doações</h1>
          <div className='flex flex-col md:flex-row justify-center items-center md:gap-12 lg:gap-24 gap-16'>
            <img src={AbsDelicado} alt='' className='max-h-96 transition-transform duration-300 hover:scale-110' />
            <div className='max-w-[500px]'>
                <p className='mb-4 text-justify'>O projeto Bons Fluidos tem como objetivo levar dignidade
                  para meninas que têm o direito à educação prejudicado por
                  menstruarem, seja pela falta de absorventes ou por não
                  saberem lidar com a transição de fase em suas vidas.</p>
                <p className='mb-4 text-justify'>
                  O projeto tem como público alvo meninas de escolas públicas
                  de Cornélio Procópio que ofertam anos finais do ensino fundamental e ensino médio.
                </p>
                <p className='mb-12 text-justify'>Se sua escola tem interesse em abrir esse diálogo,
                  entre em contato conosco!
                </p>
                <div className='flex justify-center'>
                  <Button className='bg-rose-900 text-white font-bold py-2 items-center text-center hover:bg-rose-600 transition duration-300'>Quero Ajudar!</Button>
                </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
