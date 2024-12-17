import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useNavigate } from 'react-router-dom'

function LastPost({ post }) {
    const baseUrl = "http://localhost:3000/uploads/";
    const imageUrl = `${baseUrl}${post.imageUrl}`;
    const navigate = useNavigate()

    const dataFormatada = (data) => {
        const date = new Date(data)
        return format(date, "dd, MMM 'de' yyyy", { locale: ptBR })
    }

    function handleNavigate(){
        navigate(`/post/${post.id}`)
    }

    return (
        <div className='group flex justify-center md:flex-row items-center flex-col min-h-[150px] max-w-[500px] gap-[32px] min-w-[150px] rounded-lg transition duration-300 hover:scale-105' onClick={handleNavigate}>
            <img crossorigin="anonymous" src={imageUrl} className='bg-white h-full max-h-[160px] w-[180px] rounded-lg '/>
            <div className='flex flex-col justify-center align-center gap-4'>
                <div className='flex justify-between text-white text-xs gap-2'>
                    <p>{dataFormatada(post.createdAt)}</p>
                    <p>•</p>
                    <p>By <span className='font-bold'>Bons Fluidos</span></p>
                </div>
                <h1 className='font-bold text-md text-wrap text-white'>{post.title}</h1>
            </div>
        </div>
    )
}
  
export default LastPost