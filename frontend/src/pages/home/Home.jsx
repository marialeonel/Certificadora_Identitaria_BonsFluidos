import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import ModalForm from '../../components/ModalForm/ModalForm'
import Button from '../../components/Button/Button'

function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const navigate = useNavigate()

  function handleClose() {
    setModalIsOpen(false)
  }

  return (
    <div className='flex bg-rose-800 w-full max-h-full'>
      <h1>Bem-vindo à Landing Page</h1>
      <button onClick={() => navigate('/blog')}>Acessar Blog</button>
      <Button onClick={() => setModalIsOpen(true)}>Criar Post</Button>
      {modalIsOpen && <ModalForm onClose={handleClose} action={'Criação'}/>}
    </div>
  );
}

export default Home;
