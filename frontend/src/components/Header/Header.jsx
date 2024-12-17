import { useNavigate } from "react-router-dom";
import BonsFluidosLogo from '../../assets/bonsfluidoslogo.png'

const Header = () => {
    const navigate = useNavigate();

    const handleNavigateTop = (link) => {
      navigate(link)
      window.scrollTo(0,0)
    }

    const handleNavigateToDoacoes = () => {
      navigate('/')
      setTimeout(() => {
          const element = document.getElementById('doacoes')
          if (element) {
              element.scrollIntoView({ behavior: 'smooth' })
          }
      }, 100)
    }

    const handleNavigateToContato = () => {
      setTimeout(() => {
          const element = document.getElementById('footer')
          if (element) {
              element.scrollIntoView({ behavior: 'smooth' })
          }
      }, 100)
    }

    return(
      <header className='fixed bg-slate-50 w-full z-[999]'>
        <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
          <div className='relative flex items-center justify-between h-16'>
              <div className='flex justify-center items-center h-screen'>
                  <div>
                        <img
                            className="h-10 max-h-screen w-auto"
                            src={BonsFluidosLogo}
                            alt="Bons fluídos logo"
                            onClick={() => navigate('/')}
                        />
                  </div>
              </div>
            
              <div className="hidden md:block">
                <div className="flex gap-4">
                  <button
                  onClick={() => handleNavigateTop('/')}
                  className="text-black hover:bg-rose-600 hover:text-white transition duration-300 px-3 py-2 rounded-3xl text-sm font-medium">
                  Home
                  </button>
                  <button
                  onClick={() => handleNavigateTop('/blog')}
                  className="text-black hover:bg-rose-600 hover:text-white transition duration-300 px-3 py-2 rounded-3xl text-sm font-medium">
                  Blog
                  </button>
                  <button
                  onClick={handleNavigateToDoacoes}
                  className="text-black hover:bg-rose-600 hover:text-white transition duration-300 px-3 py-2 rounded-3xl text-sm font-medium">
                  Doações
                  </button>
                  <button
                  onClick={handleNavigateToContato}
                  className="text-black hover:bg-rose-600 hover:text-white transition duration-300 px-3 py-2 rounded-3xl text-sm font-medium">
                  Contato
                  </button>
                  <button
                  onClick={() => handleNavigateTop('/agenda')}
                  className="text-black hover:bg-rose-600 hover:text-white transition duration-300 px-3 py-2 rounded-3xl text-sm font-medium">
                  Eventos
                  </button>
              </div>
            </div>
          </div>
        </div>  
      </header>
    );
}

export default Header;