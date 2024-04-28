import React, { useEffect } from 'react';
import axios from 'axios';
import Navigation from './Navigation'; // Importe o componente de navegação, se necessário

const App = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://vacinebem05-a8p9kkpnx-mauro-sergios-projects.vercel.app/",
          {
            headers: {
              Authorization: "0OD2wkIFuzjGUqiaGqQahrXz",
            },
          }
        );
        console.log(response.data);
      } catch (error) {
        console.error("Erro ao fazer a solicitação:", error);
      }
    };

    fetchData();
  }, []);

  return <Navigation />;
};

export default App;
