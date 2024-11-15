import ReactDOM from 'react-dom/client';
import App from '.';
import { AuthProvider } from './src/context/AuthContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
