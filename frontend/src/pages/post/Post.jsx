import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import { AuthContext } from "../../context/AuthContext"
import { useContext, useState, useEffect } from "react";
import axiosService from "../../services/AxiosService"
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useParams } from 'react-router-dom'

function Post () {
    const { isAuthenticated } = useContext(AuthContext)
    const { id } = useParams()
    const navigate = useNavigate()
    const [post, setPost] = useState(null)
    
    useEffect(() => {
        const getPost = async (id) => {
            try{
            const data = await axiosService.get(`/posts/${id}`)
            console.log(data.data)
            setPost(data.data)
          }catch(error){
            handleNavigate()
            console.error(error)
          }
        }
    
        getPost(id)
    }, [id])

    function handleNavigate(){
        navigate('/blog')
    }

    const dataFormatada = (data) => {
        const date = new Date(data)
        return format(date, "dd, MMM 'de' yyyy", { locale: ptBR })
    }

    if (!post) {
        return <div>Carregando...</div>;
    }
    const baseUrl = "http://localhost:3000/uploads/";
    const imageUrl = `${baseUrl}${post.imageUrl}`;

    return (
        <>
        <div className="flex flex-col min-h-screen">
            <Header />
                <main className="flex-grow py-10 px-12">
                    <div className="pt-20 px-4 lg:px-64">
                        <div className="max-x-screen-lg mx-auto py-10 px-6">
                            {isAuthenticated && <div className="flex flex-col sm:flex-row gap-4 justify-end mb-4">
                                <Button className='bg-red-900 text-white font-bold py-2 w-40 items-center text-center hover:bg-red-600 transition duration-300' >Excluir</Button>
                                <Button className='bg-gray-900 text-white font-bold py-2 w-40 items-center text-center hover:bg-gray-600 transition duration-300' >Editar</Button>
                            </div>
                            }
                            
                            <div className="mb-8">
                                <h1 className="text-4xl font-bold text-gray-800">{post.title}</h1>
                            </div>
                            <div className="flex flex-col-1 justify-between mb-8 text-gray-600">
                                <p className="text-sm">by <span className="font-medium">Bons Fluidos</span></p>
                                <p className="text-sm">{dataFormatada(post.createdAt)}</p>
                            </div>
                            <div className="flex mb-8">
                                <img src={imageUrl} className="w-auto max-w-lg h-auto bg-gray-200 rounded-md"/>
                            </div>
                            <div className="text-justify text-gray-700 py-20">
                                {post.content}
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