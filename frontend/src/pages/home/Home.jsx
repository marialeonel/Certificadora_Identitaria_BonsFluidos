
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header'
import Sonic from '../../assets/png-transparent-sonic-3d-sonic-chaos-foot-tails-sonic-drive-in-hedgehog-miscellaneous-animals-sonic-the-hedgehog-thumbnail.png'



function Home() {


  return (
    <div className='flex flex-col min-h-screen'>
      <Header/>
      <main>
        <img src={Sonic} alt="" />
      </main>
      <Footer/>
    </div>
  );
}

export default Home;
