import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import BonsFluidosLogo from '../../assets/bonsfluidoslogo.png'

const Header = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleNavigateTop = (link) => {
      navigate(link)
      window.scrollTo(0,0)
      setMenuOpen(false);
    }

    const handleNavigateToDoacoes = () => {
      navigate('/')
      setTimeout(() => {
          const element = document.getElementById('doacoes')
          if (element) {
              element.scrollIntoView({ behavior: 'smooth' })
          }
      }, 100)
      setMenuOpen(false);
    }

    const handleNavigateToContato = () => {
      setTimeout(() => {
          const element = document.getElementById('footer')
          if (element) {
              element.scrollIntoView({ behavior: 'smooth' })
          }
      }, 100)
      setMenuOpen(false);
    }

    return(
      <header className='fixed bg-slate-50 w-full z-[998]'>
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

              <div className="md:hidden">
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="text-black focus:outline-none"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke={'#df204a'}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {menuOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                      />
                    )}
                  </svg>
                </button>
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
        {menuOpen && (
          <div className="fixed inset-0 z-[990] bg-slate-50 flex flex-col items-center justify-center gap-6">
            <button
              onClick={() => handleNavigateTop("/")}
              className="text-darker-dark font-semibold text-2xl hover:bg-rose-600 hover:text-white hover:w-full hover:rounded-none transition duration-300 px-6 py-3"
            >
              Home
            </button>
            <button
              onClick={() => handleNavigateTop("/blog")}
              className="text-darker-dark font-semibold text-2xl hover:bg-rose-600 hover:text-white hover:w-full hover:rounded-none transition duration-300 px-6 py-3"
            >
              Blog
            </button>
            <button
              onClick={handleNavigateToDoacoes}
              className="text-darker-dark font-semibold text-2xl hover:bg-rose-600 hover:text-white hover:w-full hover:rounded-none transition duration-300 px-6 py-3"
            >
              Doações
            </button>
            <button
              onClick={handleNavigateToContato}
              className="text-darker-dark font-semibold text-2xl hover:bg-rose-600 hover:text-white hover:w-full hover:rounded-none transition duration-300 px-6 py-3"
            >
              Contato
            </button>
            <button
              onClick={() => handleNavigateTop("/agenda")}
              className="text-darker-dark font-semibold text-2xl hover:bg-rose-600 hover:text-white hover:w-full hover:rounded-none transition duration-300 px-6 py-3"
            >
              Eventos
            </button>
          </div>
        )}
      </header>
    );
}

export default Header;