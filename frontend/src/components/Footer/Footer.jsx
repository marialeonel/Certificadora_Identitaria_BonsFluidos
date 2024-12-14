import BonsFluidosLogo from '../../assets/bonsfluidoslogo.png'

const Footer = () => {
    return (
        <footer className="relative bottom-0 flex flex-col w-full py-4 border-t shadow-black items-center justify-center bg-rose-900 lg:text-left" id='footer'>
                <div className='flex flex-row justify-center w-[90%] py-10'>
                  <div className='grid grid-cols-1 md:grid-cols-3 items-center gap-[60px] md:gap-8'>
                    <div className='flex flex-col justify-center'>
                      <p className='text-sm text-white'>Combatendo a pobreza menstrual.</p>
                      <p className='mb-4 text-sm text-white'>Dignidade para a mulher!</p>
                      <a href="https://www.instagram.com/bonsfluidosutfpr/" className='hover:underline text-sm text-white font-bold'>@bonsfluidosutfpr</a>
                    </div>
                    <div className="flex justify-center items-center">
                        <img
                            className="h-12 w-auto"
                            src={BonsFluidosLogo}
                            alt="Bons fluídos logo"
                        />
                    </div>
                    <div className="flex flex-col justify-center items-start">
                      <span className='text-white text-md font-bold'>Contate-nos</span>
                      <p className='text-white text-sm'>Av. Alberto Carazzai, 1640 - Centro, Cornélio Procópio - PR</p>
                    </div>
                  </div>
                </div>
                {/* Copyright */}
                <div className='w-[90%] flex flex-col  text-center py-4 border-t border-gray-300 mt-6'>
                <span className='font-regular text-white text-sm'>Copyright®  2024 Bons Fluidos All Rights Reserved</span>
                </div>  
        </footer>
    );
};

export default Footer;