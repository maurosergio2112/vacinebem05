import React, { useEffect } from 'react';
import axios from 'axios';
import Navigation from './Navigation';

const App = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.1.2:8081');
        console.log('Resposta do servidor:', response.data);
      } catch (error) {
        console.error('Erro ao fazer a solicitação:', error);
      }
    };
    fetchData(); // Chame a função fetchData para iniciar a solicitação
  }, []);

  return <Navigation />;
};

export default App;
