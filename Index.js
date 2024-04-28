import React, { useEffect } from 'react';
import axios from 'axios';
import Navigation from './Navigation'; // Importe o componente de navegação, se necessário

const App = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://10.0.2.2:8081'); // Substitua localhost pelo endereço IP do seu servidor se estiver em um dispositivo físico
        console.log('Resposta do servidor:', response.data);
      } catch (error) {
        console.error('Erro ao fazer a solicitação:', error);
      }
    };
  }, []);

  return <Navigation />;
};

export default App;
