import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Button from '../../components/Button/Button'

function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const navigate = useNavigate()

  function handleClose() {
    setModalIsOpen(false)
  }

  return (
    <div>
      <h1>Bem-vindo à Landing Page</h1>
      <button onClick={() => navigate('/blog')}>Acessar Blog</button>
      <Button onClick={() => setModalIsOpen(true)}>Criar Post</Button>
    </div>
  );
}

export default Home;
