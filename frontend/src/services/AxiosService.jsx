import axios from 'axios';

const axiosService = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 10000
});

axiosService.interceptors.request.use(
    (config) => {
        const isPublic = config.headers?.isPublic;
        if(!isPublic) {
            const token = localStorage.getItem('accessToken');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }

        return config;

    }, (error) => {
        return Promise.reject(error);
    }
);

axiosService.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response.status === 401) {
            console.log('Token expired or invalid.');
            localStorage.removeItem('accessToken'); 
            localStorage.removeItem('user'); 
            window.location.href = '/login';
        } else if (error.response) {
            console.error('Erro de resposta do servidor:', error.response.data);

        } else if (error.request) {
            console.error('Erro ao se conectar ao servidor:', error.request);

        } else {
            console.error('Erro desconhecido:', error.message);

        }

        return Promise.reject(error);
    }
);

export default axiosService;

/* para rotas públicas: GET /all e 
try {
    const response = await axiosService.get('/public-endpoint', {
      headers: { isPublic: true }, // especifica q é uma rota pública
    });
}
  [...]
*/


/* para rotas protegidas:
try {
    const response = await axiosService.get('/protected-endpoint'); // sem `isPublic`, o token vai ser adicionado
    console.log(response.data);
  }
    [...]
*/