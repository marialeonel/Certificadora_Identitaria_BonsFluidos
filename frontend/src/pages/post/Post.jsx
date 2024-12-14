import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Kirby from "../../assets/kirby.jpg";
import Button from "../../components/Button/Button";
import AuthContext from "../../context/AuthContext"
import { useContext } from "react";

function Post () {

    const { isAuthenticated } = useContext(AuthContext)

    return (
        <>
        <div className="flex flex-col min-h-screen">
            <Header />
                <main className="flex-grow py-10 px-12">
                    <div className="pt-20 px-4 lg:px-20">
                        <div className="max-x-screen-lg mx-auto py-10 px-6">
                            {isAuthenticated && <div className="flex flex-col sm:flex-row gap-4 justify-end mb-4">
                            <Button className='bg-red-900 text-white font-bold py-2 w-40 items-center text-center hover:bg-red-600 transition duration-300' >Excluir</Button>
                            <Button className='bg-gray-900 text-white font-bold py-2 w-40 items-center text-center hover:bg-gray-600 transition duration-300' >Editar</Button>
                            </div>
                            }
                            
                            <div className="text-center mb-8">
                                <h1 className="text-4xl font-bold text-gray-800">Título de Notícia do Blog do Bons Fluídos</h1>
                            </div>
                            <div className="flex flex-col-1 gap-96 mb-8 text-gray-600 justify-center">
                                <p className="text-sm">by <span className="font-medium"> Aluna de tal </span></p>
                                <p className="text-sm">11 de dezembro de 2090</p>
                            </div>
                            <div className="flex justify-center mb-8">
                                <img src={Kirby} alt="Kirby" className="w-auto max-w-lg h-auto bg-gray-200 rounded-md"/>
                            </div>
                            <div className="text-justify text-gray-700 leading-relaxed space-y-4 px-52 py-20">
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis
                            dignissim diam. Nunc sit amet mattis velit. Vivamus efficitur augue at
                            amet lorem consectetur ultricies.
                            </p>
                            <p>
                            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                            posuere cubilia curae; Quisque maximus justo eu sapien aliquet, nec
                            vulputate orci vulputate. Sed nulla mi, pharetra et dapibus in, porta
                            vel enim.
                            </p>
                            <p>
                            Maecenas id urna nisi. Pellentesque vel vulputate lacus, nec facilisis
                            augue. Pellentesque eget vulputate lacus.
                            </p>
                            </div>
                        </div>
                    </div>
                </main>
            <Footer />
        </div>
        
        </>
    );
}

export default Post;