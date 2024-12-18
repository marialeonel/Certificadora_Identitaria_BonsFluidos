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
import deleteIcon from '../../assets/delete.png'
import editIcon from '../../assets/edit.png'
import ModalForm from "../../components/ModalForm/ModalForm";
import ModalConfirm from "../../components/ModalConfirm/ModalConfirm";

function Post () {
    const { isAuthenticated } = useContext(AuthContext)
    const { id } = useParams()
    const navigate = useNavigate()
    const [post, setPost] = useState(null)
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [confirmIsOpen, setConfirmIsOpen] = useState(false)
    
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
    
    const excluirPost = async (id) => {
        <ModalConfirm action={'excluir'}></ModalConfirm>
        try {
            await axiosService.delete(`/posts/${id}`)
            setPost(null)
            handleNavigate()
        } catch (error) {
            handleNavigate()
            console.error(error)
        }
    }

    return (
        <>
        <div>
            <Header/>
                <main className="flex w-full py-20 justify-center items-center px-8">
                    <div className="flex flex-col justify-center max-w-[800px] items-end mt-8">
                        {isAuthenticated && <div className="flex w-full md:justify-end md:w-[300px] flex-row justify-between gap-4 mb-4">
                                <Button className='bg-red-600' icon={deleteIcon} onClick={() => setConfirmIsOpen(true)}>Excluir</Button>
                                <Button className='bg-gray-500' icon={editIcon} onClick={() => setModalIsOpen(true)}>Editar</Button>
                            </div>
                        }     
                        <div className='flex w-full flex-col justify-center items-center'>
                            <h1 className="text-xl sm:text-4xl font-bold text-gray-800 mb-4">{post.title}</h1>
                            <div className="flex w-full justify-between text-gray-600">
                                <p className="text-sm">by <span className="font-medium">Bons Fluidos</span></p>
                                <p className="text-sm">{dataFormatada(post.createdAt)}</p>
                            </div>
                            <div>
                                <img crossorigin="anonymous" src={imageUrl} className="w-auto h-auto bg-gray-200 rounded-md my-14"/>
                            </div>
                            <div className="text-justify text-gray-700 text-wrap">
                                {post.content}
                            </div>
                        </div>
                    </div>
                </main>
                {modalIsOpen && <ModalForm onClose={() => setModalIsOpen(false)} action={'Edição'} post={post}></ModalForm>}
                {confirmIsOpen && <ModalConfirm action={'excluir'} onClose={() => setConfirmIsOpen(false)} onAction={() => excluirPost(post.id)}></ModalConfirm>}
            <Footer />
        </div>
        
        </>
    );
}

export default Post;