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


function Home() {
  const [posts, setPosts] = useState([])

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

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='pt-14'>
        <div className='max-w-7xl mx-auto px-12 sm:px-6 lg:px-8 py-20'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
            <div>
              <h2 className='text-2xl font-semibold mb-4 text-center'>SOBRE NÓS</h2>
              <p className='mb-4 text-justify'>
                O projeto Bons Fluidos tem como objetivo levar dignidade para meninas que têm o direito à educação prejudicado por menstruarem, seja pela falta de absorventes ou por não saberem lidar com a transição de fase em suas vidas.
              </p>
              <p className='mb-4 text-justify'>O projeto tem como público alvo meninas de escolas públicas de Cornélio Procópio que ofertam anos finais do ensino fundamental e ensino médio.
              </p>
              <p className='mb-4 text-justify'>
                Se sua escola tem interesse em abrir esse diálogo, entre em contato conosco!
              </p>
              <div className='flex justify-center'>
                <Button className='bg-rose-900 text-white font-bold py-2 w-40 items-center text-center hover:bg-rose-600 transition duration-300' >Contate-nos</Button>
              </div>
            </div>
            <div>
              <img src={Mao} alt="Mão segurando um absorvente" className='h-auto' />
            </div>
          </div>
        </div>
        <div className='flex justify-center'>
          <h2 className='text-2xl font-semibold mb-4 text-center'>NOSSOS OBJETIVOS</h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
          <div className='flex justify-center'>
            <img src={GirlFlower} alt='Desenho de uma garota segurando uma flor' className='h-80 ml-80 transition-transform duration-300 hover:scale-110' />
          </div>
          <div className='grid grid-cols-1'>
            <ObjectiveList objectives={objectives} />
          </div>
        </div>
        <div className='bg-rose-600 w-full mt-10'>
          <div className='flex flex-col w-full'>
            <h2 className='text-2xl font-semibold py-6 text-center text-white'>ÚLTIMAS NOTÍCIAS</h2>
            <div className="flex flex-wrap gap-[32px] justify-center">
              {posts.length > 0 ? (
                posts.slice(0,4).reverse().map((post) => (
                  <LastPost key={post.id} post={post} />
                ))
              ) : (
                <p className="text-center text-white">Nenhum post encontrado.</p>
              )}
            </div>
          </div>
          <div className='flex justify-center'>
            <Button className='bg-rose-900 text-white w-[200px] hover:bg-rose-400 transition duration-300 my-8'>Ver mais</Button>
          </div>
        </div>
        <div className='bg-rose-700 w-full'>
          <Statistics />
        </div>
        <div>
        <h1 className='text-2xl font-semibold py-6 text-center' id='doacoes'>DOAÇÕES</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
            <div className='flex justify-center'>
              <img src={AbsDelicado} alt='' className='h-96 ml-36 transition-transform duration-300 hover:scale-110' />
            </div>
            <div className='mr-40'>
              <p className='mb-4 text-justify'>O projeto Bons Fluidos tem como objetivo levar dignidade
                para meninas que têm o direito à educação prejudicado por
                menstruarem, seja pela falta de absorventes ou por não
                saberem lidar com a transição de fase em suas vidas.</p>
              <p className='mb-4 text-justify'>
                O projeto tem como público alvo meninas de escolas públicas
                de Cornélio Procópio que ofertam anos finais do ensino fundamental e ensino médio.
              </p>
              <p className='mb-4 text-justify'>Se sua escola tem interesse em abrir esse diálogo,
                entre em contato conosco!
              </p>
              <div className='flex justify-center'>
                <Button className='bg-rose-900 text-white font-bold py-2 w-40 items-center text-center hover:bg-rose-600 transition duration-300'>QUERO AJUDAR!</Button>
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
