import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Kirby from "../../assets/kirby.jpg"


function Post () {
    return (
        <>
        <div className="flex flex-col min-h-screen">
            <Header />
                <main className="flex-grow">
                    <div className="pt-20 px-4 lg:px-20">
                        <div className="bg-slate-50 border-rose-950 border-8 rounded-3xl">
                            <div className="text-center mb-6">
                                <h1 className="text-2xl font-bold text-gray-800">Título de Notícia do Blog do Bons Fluídos</h1>
                            </div>
                            <div className="flex flex-col-1 gap-10 items-center mb-8 text-gray-600 justify-center">
                                <p className="text-sm">by <span className="font-medium"> Aluna de tal </span></p>
                                <p className="text-sm">11 de dezembro de 2090</p>
                            </div>
                            <div className="flex justify-center mb-8">
                                <img src={Kirby} alt="Kirby" className="w-full max-w-lg h-64 bg-gray-200 rounded-md"/>
                            </div>
                            <div className="text-justify text-gray-700 leading-relaxed space-y-4">
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