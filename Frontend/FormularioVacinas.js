import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform, Button } from 'react-native'; // Adicionando Button do react-native
import axios from 'axios';

const FormularioVacinas = () => {
  const [respostas, setRespostas] = useState(Array(perguntas.length).fill(null));

  const handleResposta = (index, resposta) => {
    const novasRespostas = [...respostas];
    novasRespostas[index] = resposta;
    setRespostas(novasRespostas);
  };

  const handleSalvarRespostas = async () => {
    const iosUrl = 'http://localhost:5000';
    const androidUrl = 'http://10.0.2.2:5000';
    const url = Platform.OS === 'ios' ? iosUrl : androidUrl;

    const respostasConvertidas = respostas.map(resposta => resposta === 'sim' ? true : false);
    const data = {
      respostas: respostasConvertidas
    };

    try {
      const response = await axios.post(`${url}/api/salvarRespostas`, data);
      console.log('Resposta do servidor:', response.data);
      // Aqui você pode fazer algo com a resposta do servidor
    } catch (error) {
      console.error('Erro ao salvar respostas:', error);
      console.log(error.response.data) 
      // Aqui você pode tratar o erro, exibindo uma mensagem para o usuário, por exemplo
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Responda às perguntas sobre vacinas:</Text>
      {perguntas.map((pergunta, index) => renderPergunta(pergunta, index))}
      <TouchableOpacity style={styles.botaoSalvar} onPress={handleSalvarRespostas}>
        <Text style={styles.botaoSalvarTexto}>Salvar Respostas</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FormularioVacinas;
