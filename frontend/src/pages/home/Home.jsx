
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header'
import  Mao from '../../assets/mao_segurando_abs.jpg'


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
              <button>Contate-nos</button>
            </div>
            <div>
              <img src={Mao} alt="" className='h-16'/>
            </div>
          </div>
        </div>
        <div>
          <div>

          </div>
          <div>
            <span>Diálogo sobre menstruação</span>
            <span>Naturalizar a menstruação e seu ciclo</span>
            <span>Combater pobreza menstrual</span>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default Home;
