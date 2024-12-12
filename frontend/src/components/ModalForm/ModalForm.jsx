import Input from '../Input/Input'
import Button from '../Button/Button'
import Textarea from '../Textarea/Textarea'
import { useState, useEffect } from 'react'
import axiosService from '../../services/AxiosService'

function ModalForm({ onClose, action, post }) {
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
    }, [])

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
        } catch (error) {
          console.error(error)
        }
    }

    const handleEditar = async () => {
        const updatedPost = {
            id: post.id,
            title: title,
            content: content,
            isEvent: category
        }
        try {
            if(updatedPost && post.id !== undefined) {
                await axiosService.put(post.id, updatedPost)
                onClose()
            }
        }catch(error){
            console.error(error)
        }
    }

    function handleImageChange(e) {
        const file = e.target.files[0]
        if (file) {
            setImage(file)
        }
    }

    return (
        <div className='fixed flex top-0 items-center justify-center w-screen h-screen bg-gray-900/25'>
            <form className='bg-white px-3 py-6 h-screen w-screen sm:p-6 sm:w-[560px] sm:h-auto rounded-sm'>
                <button className='bg-gray-200 h-6 w-6 rounded-full text-gray-600 text-xs font-medium hover:bg-gray-300' onClick={onClose}>X</button>
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
                <div className='mt-5'>
                    <input type="file" accept='image/*' className='break-words' onChange={handleImageChange}/>
                </div>
                <div>
                    <Button type={'button'} className={'mt-10'} onClick={action === 'Criação' ? handleCriar : handleEditar}>Salvar</Button>
                </div>
            </form>
        </div>
    )
  }
  
  export default ModalForm