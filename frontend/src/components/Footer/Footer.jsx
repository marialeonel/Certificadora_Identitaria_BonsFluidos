import BonsFluidosLogo from '../../assets/bonsfluidoslogo.png'

const Footer = () => {
    return (
        <footer className="w-full py-4 border-t shadow-black items-center justify-between bg-rose-900 lg:text-left border-b-2 border-neutral-200" id='footer'>
                <div className='w-full mx-auto max-w-7xl px-6 py-10'>
                  <div className='grid grid-cols-1 md:grid-cols-3 items-center gap-8'>
                    <div className='flex flex-col justify-center items-start'>
                      <p className='text-sm text-gray-400'>Combatendo a pobreza menstrual.</p>
                      <p className='mb-4 text-sm text-gray-400'>Dignidade para a mulher!</p>
                      <a href="https://www.instagram.com/bonsfluidosutfpr/" className='hover:underline text-sm text-gray-400'>@bonsfluidosutfpr</a>
                    </div>
                    <div className="flex justify-center items-center">
                        <img
                            className="h-12 w-auto"
                            src={BonsFluidosLogo}
                            alt="Bons fluídos logo"
                        />
                    </div>
                    <div className="flex flex-col justify-center items-start md:items-end">
                      <span className='text-gray-400 text-sm'>Contate-nos:</span>
                      <p className='text-gray-400 text-sm'>Av. Alberto Carazzai, 1640 - Centro, Cornélio Procópio - PR</p>
                    </div>
                  </div>
                </div>
                {/* Copyright */}
                <div className='w-full text-center py-4'>
                <span className='font-semibold text-neutral-600 dark:text-neutral-400 cursor-pointer'>Copyright®  2024 Bons Fluidos All Rights Reserved</span>
                </div>  
        </footer>
    );
};

export default Footer;