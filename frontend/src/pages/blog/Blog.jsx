import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import searchIcon from '../../assets/search.svg';
import PostPreview from '../../components/PostPreview/PostPreview';
import {useState, useEffect, useContext} from 'react'
import axiosService from '../../services/AxiosService'
import ModalForm from '../../components/ModalForm/ModalForm'
import { AuthContext } from '../../context/AuthContext'


function Blog() {
  const [posts, setPosts] = useState([])
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const { isAuthenticated } = useContext(AuthContext)
  const [postsFiltrados, setPostsFiltrados] = useState([])
  const [busca, setBusca] = useState('')

  const fetchPosts = async () => {
    try {
      const response = await axiosService.get('/posts/all')
      setPosts(response.data.posts)
    } catch (error) {
      console.error('Erro ao buscar os eventos:', error)
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    const filtrados = posts.filter((post) => 
      post.title.toLowerCase().includes(busca.toLowerCase()) ||
      post.content.toLowerCase().includes(busca.toLowerCase())
    )

    setPostsFiltrados(filtrados)
  }, [posts, busca])

  const handleBusca = (e) => {
    setBusca(e.target.value)
  }

  return (
    <>
    <Header/>
    <div className='pt-14 min-h-screen'>
        <div className="bg-logo-color p-20">
          <h1 className="text-4xl font-bold text-center mb-3 text-white">
            BLOG
          </h1>
          <p className="text-xl text-center text-white">
            Novidades do projeto Bons Fluídos
          </p>
        </div>
        <div className='flex md:flex-row flex-col justify-between gap-5 py-10 px-10 md:px-10 lg:px-[15%]'>
          <Input className='md:w-[350px] w-full' placeholder='Pesquise aqui...' icon={searchIcon} onChange={handleBusca}></Input>
          {isAuthenticated && <Button className='md:w-[200px] w-full' onClick={() => setModalIsOpen(true)}>+ Adicionar Novo Post</Button>}
        </div>
        <div className="flex w-[100%] h-auto justify-center items-center my-8 px-4 md:px-12">
          <div className="flex flex-row flex-wrap justify-center items-center gap-16 mb-12">
            {postsFiltrados.length > 0 ? (
              postsFiltrados.slice().reverse().map((post) => (
                <PostPreview key={post.id} post={post}/>
              ))
            ) : (
              <p className="text-center text-gray-500">Nenhum post encontrado.</p>
            )}
          </div>
        </div>
        {modalIsOpen && <ModalForm onClose={() => setModalIsOpen(false)} action={'Criação'} fetch={fetchPosts}></ModalForm>}
    </div>
    <Footer/>
    </>
  );
}

export default Blog;
