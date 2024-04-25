import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Platform } from 'react-native';
import axios from 'axios';

const LoginScreen = ({ navigation }) => {
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');

  useEffect(() => {
    const iosUrl = 'http://localhost:5000';
    const androidUrl = 'http://10.0.2.2';
    const url = Platform.OS === 'ios' ? iosUrl : androidUrl;

    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        // Faça algo com a resposta, se necessário
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
        // Trate o erro, se necessário
      }
    };

    fetchData(); // Chama a função fetchData ao montar o componente

  }, []); // Passando um array vazio para executar o useEffect apenas uma vez

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/login', { cpf, senha });
      console.log('Resposta do servidor:', response.data);
      // Aqui você pode fazer algo com a resposta do servidor, como redirecionar o usuário para outra tela
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      console.log(error.response.data) 
      // Aqui você pode tratar o erro, exibindo uma mensagem para o usuário, por exemplo
    }
  };

  return (
    <View>
      <Text>Login</Text>
      <TextInput
        placeholder="CPF"
        onChangeText={setCpf}
        value={cpf}
      />
      <TextInput
        placeholder="Senha"
        onChangeText={setSenha}
        value={senha}
        secureTextEntry
      />
      <Button title="Entrar" onPress={handleLogin} />
      <Text onPress={() => navigation.navigate('Cadastro')}>Não tem uma conta? Cadastrar-se</Text>
    </View>
  );
};

export default LoginScreen;
