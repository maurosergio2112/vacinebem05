import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Formik } from 'formik';
import axios from 'axios';

const FormularioVacinas = ({ perguntas }) => {
  const initialValues = Object.fromEntries(perguntas.map((_, index) => [`resposta${index}`, null]));

  const handleSalvarRespostas = async (values) => {
    const iosUrl = 'http://localhost:5000';
    const androidUrl = 'http://10.0.2.2:5000';
    const url = Platform.OS === 'ios' ? iosUrl : androidUrl;

    const respostasConvertidas = Object.values(values).map(resposta => resposta === 'sim' ? true : false);
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
      <Formik
        initialValues={initialValues}
        onSubmit={handleSalvarRespostas}
      >
        {({ handleChange, handleSubmit, values }) => (
          <>
            {perguntas.map((pergunta, index) => (
              <TouchableOpacity key={index} onPress={() => handleChange(`resposta${index}`, values[`resposta${index}`] === 'sim' ? 'não' : 'sim')}>
                <Text style={styles.pergunta}>{pergunta}</Text>
                <Text style={styles.resposta}>{values[`resposta${index}`] || 'Não respondido'}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity style={styles.botaoSalvar} onPress={handleSubmit}>
              <Text style={styles.botaoSalvarTexto}>Salvar Respostas</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  pergunta: {
    marginBottom: 5,
  },
  resposta: {
    marginBottom: 15,
  },
  botaoSalvar: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  botaoSalvarTexto: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default FormularioVacinas;
