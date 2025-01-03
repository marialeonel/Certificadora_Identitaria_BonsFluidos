import Input from '../Input/Input'
import Button from '../Button/Button'
import Textarea from '../Textarea/Textarea'
import { useState, useEffect } from 'react'
import axiosService from '../../services/AxiosService'
import CloseButton from '../CloseButton/CloseButton'

function ModalForm({ onClose, action, post, fetch }) {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [category, setCategory] = useState('post')
    const [image, setImage] = useState(null)

    useEffect(() => {
        if(action === 'Edição'){
            setTitle(post.title)
            setContent(post.content)
            setImage(post.imageUrl)
            if(post.isEvent === true){
                setCategory('evento')
            }else{
                setCategory('post')
            }
        }
    }, [action, post])

    const handleCriar = async () => {
        const isEvent = category === 'post' ? 'false' : 'true'
      
        const formData = new FormData()
        formData.append('title', title)
        formData.append('content', content)
        formData.append('isEvent', isEvent)
        
        if (image) {
          formData.append('image', image)
        }
      
        try {
          await axiosService.post('/posts/new-post', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          onClose()
          await fetch()
        } catch (error) {
          console.error(error)
        }
    }

    const handleEditar = async () => {
        const isEvent = category === 'post' ? 'false' : 'true'
    
        const formData = new FormData()
        formData.append('title', title)
        formData.append('content', content)
        formData.append('isEvent', isEvent)
    
        if (image) {
            formData.append('image', image)
        } else {
            formData.append('imageUrl', post.imageUrl)
        }
    
        try {
            await axiosService.put(`/posts/${post.id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            onClose()
            await fetch()
        } catch (error) {
            console.error("Erro ao editar o post", error)
        }
    }

    function handleImageChange(e) {
        const file = e.target.files[0]
        if (file) {
            setImage(file)
        }
    }

    return (
        <div className='fixed flex top-0 items-center justify-center w-screen h-screen bg-gray-900/25 z-[999]'>
            <form className='bg-white px-3 py-6 h-screen w-screen sm:p-6 sm:w-[560px] sm:h-auto rounded-sm'>
                <CloseButton onClose={onClose}></CloseButton>
                <div className='flex flex-row items-center justify-center mb-10'>
                    <h1 className={'text-xl font-bold'}>{action} de um post</h1>
                </div>
                <div>
                    <Input className={'mb-5'} label={'Título do Post'} value={title} name={title} onChange={(e) => {setTitle(e.target.value)}}></Input>
                    <div className='flex flex-col'>
                        <label htmlFor='isEvent' className='text-sm/6 font-medium text-gray-900 mb-2'>Categoria</label>
                        <select required id={'isEvent'} onChange={(e) => {setCategory(e.target.value)}} value={category} className='w-full rounded-md mb-5 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-light sm:text-sm/6'>
                            <option value='post'>Post</option>
                            <option value='evento'>Evento</option>
                        </select>
                    </div>
                    <Textarea label={'Conteúdo'} value={content} name={content} onChange={(e) => {setContent(e.target.value)}}></Textarea>
                </div>
                <div className='mt-4'>

                    {action === 'Edição' && image && (
                        <div className="mt-2 p-2 bg-gray-100 rounded-md shadow-sm border-b border-gray-300">
                            <p className="text-sm font-medium text-gray-700">Imagem atual:</p>
                            <p className="text-sm text-blue-600 truncate">{post.imageUrl}</p>
                        </div>
                    )}

                    <div className="mt-2">
                        <input type="file" accept="image/*" className="break-words" onChange={handleImageChange} />
                    </div>
                </div>
                <div>
                    <Button type={'button'} className={'mt-10'} onClick={action === 'Criação' ? handleCriar : handleEditar}>Salvar</Button>
                </div>
            </form>
        </div>
    )
  }
  
  export default ModalForm