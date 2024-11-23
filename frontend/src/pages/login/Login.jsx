import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import {AuthContext} from '../../context/AuthContext'
import axiosService from '../../services/AxiosService'
import heartLogo from '../../assets/heart-logo.png'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'

export default function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 

  const handleLogin = async () => {
    try {
      const response = await axiosService.post('/authentication/login', { email, password });
      const { token, refreshToken } = response.data;

      login({ email }, { accessToken: token, refreshToken });
      navigate('/blog');
    } catch (error) {
      setError('Login falhou. Por favor, verifique se suas credenciais estão corretas.');
      console.error(error);
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-24 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Logo: Projeto Bons Fluidos"
            src={heartLogo}
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Bem vindo de volta, membro do projeto Bons Fluídos!
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div className="mt-2">
              <Input 
                id="email" 
                name="email" 
                label="Email"
                type="email"
                placeholder="email@address.com" 
                onChange={(e) => setEmail(e.target.value)}
              >
              </Input>
            </div>

            <div className="mt-2">
              <Input 
                id="password" 
                name="password" 
                label="Senha"
                type="password"
                placeholder="* * * * * * * *" 
                onChange={(e) => setPassword(e.target.value)}
              >
              </Input>
            </div>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <div>
              <Button onClick={handleLogin}>Login</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
  