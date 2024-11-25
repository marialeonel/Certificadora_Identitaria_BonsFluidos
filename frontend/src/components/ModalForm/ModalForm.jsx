import Input from '../Input/Input'
import Button from '../Button/Button'
import Textarea from '../Textarea/Textarea'
import { useState, useEffect } from 'react'

function ModalForm({ onClose, action, post }) {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    useEffect(() => {
        if(action === 'Edição'){
            setTitle(post.title)
            setContent(post.content)
            setImage(post.imageUrl)
        }
    }, [post])

    function handleCriar() {
        onClose()
    }

    function handleEditar() {
        onClose()
    }

    function handleImageChange(e) {
        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setImage(reader.result)
            }
            reader.readAsDataURL(file)
        }
    }

    return (
        <div className='fixed flex top-0 items-center justify-center w-screen h-screen bg-gray-900/25'>
            <form className='bg-white px-3 py-6 w-screen sm:p-6 sm:w-[560px] rounded-sm'>
                <Button onClick={onClose} className={'absolute w-1 h-6 rounded-full bg-gray-500'}>x</Button>
                <div className='flex flex-row items-center justify-center mb-10'>
                    <h1 className={'text-xl font-bold'}>{action} de um post</h1>
                </div>
                <div>
                    <Input className={'mb-5'} label={'Título do Post'} value={title} name={title} onChange={(e) => {setTitle(e.target.value)}}></Input>
                    <Textarea label={'Conteúdo'} value={content} name={content} onChange={(e) => {setContent(e.target.value)}}></Textarea>
                </div>
                <div className='mt-5'>
                    <input type="file" accept='image/*' className='break-words' onChange={handleImageChange}/>
                </div>
                <div>
                    <Button className={'mt-10'} onClick={action === 'criacao' ? handleCriar : handleEditar}>Salvar</Button>
                </div>
            </form>
        </div>
    )
  }
  
  export default ModalForm