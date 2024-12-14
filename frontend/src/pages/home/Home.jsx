import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header'
import Mao from '../../assets/mao_segurando_abs.jpg'
import Button from '../../components/Button/Button';
import GirlFlower from '../../assets/girlwithflower.png';
import AbsDelicado from '../../assets/absdelicado.png';
import Statistics from '../../components/Statistics/Statistics';
import { useEffect, useState } from 'react';
import axiosService from '../../services/AxiosService';
import PostPreview from '../../components/PostPreview/PostPreview';
import ObjectiveList from '../../components/ObjectiveList/ObjectiveList';


function Home() {
  const [events, setEvents] = useState([])

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axiosService.get('/public-endpoint', {
          headers: { isPublic: true },
        })
        setEvents(response.data)
      } catch (error) {
        console.error('Erro ao buscar os eventos:', error)
      }
    };

    fetchEvents();
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
        <div className='bg-rose-600 w-full h-96 mt-10'>
          <div>
            <div>
              <h2 className='text-2xl font-semibold py-6 text-center'>ÚLTIMAS NOTÍCIAS</h2>
              <div className="flex flex-row flex-wrap justify-center gap-10 py-10 md:px-0 lg:px-20">
                {events.length > 0 ? (
                  events.slice(0, 4).map((event) => (
                    <PostPreview key={event.id} post={event} />
                  ))
                ) : (
                  <p className="text-center text-white">Nenhum post encontrado.</p>
                )}
              </div>
            </div>
            <div className='flex justify-center'>
              <Button className='bg-rose-900 text-white font-bold py-2 w-40 items-center text-center hover:bg-rose-400 transition duration-300'>Ver mais</Button>
            </div>
          </div>
        </div>
        <div className='bg-rose-700 w-full h-96'>
          <Statistics className='' />
        </div>
        <div className=''>
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
