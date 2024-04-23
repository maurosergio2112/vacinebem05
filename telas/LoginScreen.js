import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';

const LoginScreen = ({ navigation }) => {
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    axios.post('https://seu-backend.com/api/login', {
      cpf: cpf,
      senha: senha
    })
    .then(response => {
      console.log('Resposta do servidor:', response.data);
      // Aqui você pode fazer algo com a resposta do servidor, como redirecionar o usuário para outra tela
    })
    .catch(error => {
      console.error('Erro ao fazer login:', error);
      // Aqui você pode tratar o erro, exibindo uma mensagem para o usuário, por exemplo
    });
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
