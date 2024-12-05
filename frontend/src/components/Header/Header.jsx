import { useNavigate } from "react-router-dom";
import BonsFluidosLogo from '../../assets/bonsfluidoslogo.png'

const Header = () => {
    const navigate = useNavigate();

    return(
        <header className='bg-slate-50 w-full'>
        <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
          <div className='relative flex items-center justify-between h-16'>
              <div className='flex justify-center items-center h-screen'>
                  <div className="flex-shrink-0">
                        <img
                            className="h-10 max-h-screen w-auto"
                            src={BonsFluidosLogo}
                            alt="Bons fluídos logo"
                            onClick={() => navigate('/')}
                        />
                  </div>
              </div>
            
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <button
                  onClick={() => navigate('/')}
                  className="text-black hover:bg-rose-600 hover:text-white transition duration-300 px-3 py-2 rounded-3xl text-sm font-medium">
                  Home
                  </button>
                  <button
                  onClick={() => navigate('/blog')}
                  className="text-black hover:bg-rose-600 hover:text-white transition duration-300 px-3 py-2 rounded-3xl text-sm font-medium">
                  Blog
                  </button>
                  <button
                  className="text-black hover:bg-rose-600 hover:text-white transition duration-300 px-3 py-2 rounded-3xl text-sm font-medium">
                  Doações
                  </button>
                  <button
                  className="text-black hover:bg-rose-600 hover:text-white transition duration-300 px-3 py-2 rounded-3xl text-sm font-medium">
                  Contato
                  </button>
                  <button
                  onClick={() => navigate('/agenda')}
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