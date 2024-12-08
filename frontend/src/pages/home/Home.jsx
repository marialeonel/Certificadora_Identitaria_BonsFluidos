import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header'
import  Mao from '../../assets/mao_segurando_abs.jpg'
import Button from '../../components/Button/Button';
import GirlFlower from '../../assets/girlwithflower.png';
import AbsDelicado from '../../assets/absdelicado.png';

function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header/>
      <main>
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
              <Button className='bg-rose-900 text-white font-bold px-1 py-2 rounded-3xl w-48 text-center shadow-lg hover:bg-red-600 hover:border-none transition duration-300' >Contate-nos</Button>
            </div>
            <div>
              <img src={Mao} alt="" className='h-auto'/>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
          <div>
            <img src={GirlFlower} alt='Desenho de uma garota segurando uma flor' className='h-60 ml-80 transition-transform duration-300 hover:scale-110' />
          </div>
          <div className='grid grid-cols-1'>
            <h2 className='text-2xl font-semibold mb-4 text-center'>NOSSOS OBJETIVOS</h2>
            <span className='mb-4 text-justify'>Diálogo sobre menstruação</span>
            <span className='mb-4 text-justify'>Naturalizar a menstruação e seu ciclo</span>
            <span className='mb-4 text-justify'>Combater pobreza menstrual</span>
          </div>
        </div>
        <div className='bg-rose-600 w-full h-96 mt-10'>
          <div>
            <div>
            <h2 className='text-2xl font-semibold py-6 text-center'>ÚLTIMAS NOTÍCIAS</h2>
            </div>
            <div>
            <Button>Ver mais</Button>
            </div>
          </div>
        </div>
        <div className='bg-rose-700 w-full h-96'>
          <div className='mr-4 ml-4 py-20'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 items-center px-8'>
              <div>
                <h1 className='text-white text-8xl text-center'>+1.8 <span className='text-6xl'>bi</span></h1>
                <p className='text-center'>De pessoas menstruam em todo planeta</p>
              </div>
              <div>
                <h1 className='text-white text-8xl text-center'>+4 <span className='text-6xl'>mi</span></h1>
                <p className='text-center'>De pessoas não tem acesso a itens de cuidado menstruais</p>
              </div>
              <div>
                <h1 className='text-white text-8xl text-center'> 713 <span className='text-6xl'>mil</span></h1>
                <p className='text-center'>De pessoas que menstruam vivem sem acesso a banheiro em casa</p>
              </div>  
            </div>
          </div>
        </div>
        <div className=''>
        <h1 className='text-2xl font-semibold py-6 text-center'>DOAÇÕES</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
            <div>
              <img src={AbsDelicado} alt='' className='transition-transform duration-300 hover:scale-110'/>
            </div>
            <div className='mr-14'>
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
              <Button>QUERO AJUDAR!</Button>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default Home;
