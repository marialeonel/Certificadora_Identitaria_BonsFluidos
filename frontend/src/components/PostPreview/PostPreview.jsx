import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useNavigate } from 'react-router-dom'

function PostPreview({ post, className }) {
    const baseUrl = "http://localhost:3000/uploads/";
    const imageUrl = `${baseUrl}${post.imageUrl}`;
    const navigate = useNavigate()

    function handleNavigate(){
        navigate(`/post/${post.id}`)
    }

    const dataFormatada = (data) => {
        const date = new Date(data)
        return format(date, "dd, MMM 'de' yyyy", { locale: ptBR })
    }

    return (
        <div className='group w-auto max-w-[320px] hover:shadow-[0_4px_8px_rgba(0,0,0,0.2)] rounded-lg transition-shadow duration-300' onClick={handleNavigate}>
            <img crossorigin="anonymous" src={imageUrl} className='w-full h-[300px] transition-all duration-300 rounded-lg group-hover:rounded-b-none'/>
            <div className='flex flex-col py-4 justify-between items-center px-3 gap-6'>
                <h1 className='text-xl font-bold text-start'>{post.title}</h1>
                <div className='flex w-[100%] justify-between text-sm text-dark'>
                    <p>By <span className='font-bold'>Bons Fluidos</span></p>
                    <p>{dataFormatada(post.createdAt)}</p>
                </div>
            </div>
        </div>
    )
}
  
export default PostPreview