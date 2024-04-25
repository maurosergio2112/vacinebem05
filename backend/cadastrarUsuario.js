import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Platform } from 'react-native';
import axios from 'axios';

const CadastroScreen = () => {
  const [cpf, setCpf] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [profissao, setProfissao] = useState('');
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

  const handleCadastro = async () => {
    const data = {
      cpf: cpf,
      nome: nome,
      email: email,
      profissao: profissao,
      senha: senha
    };
    try {
      const response = await axios.post('/api/cadastrarUsuario', data);
      console.log('Resposta do servidor:', response.data);
      // Aqui você pode fazer algo com a resposta do servidor, como redirecionar o usuário para outra tela
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
      console.log(error.response.data) 
      // Aqui você pode tratar o erro, exibindo uma mensagem para o usuário, por exemplo
    }
  };

  return (
    <View>
      <Text>Cadastro</Text>
      <TextInput
        placeholder="CPF"
        onChangeText={setCpf}
        value={cpf}
      />
      <TextInput
        placeholder="Nome"
        onChangeText={setNome}
        value={nome}
      />
      <TextInput
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        placeholder="Profissão"
        onChangeText={setProfissao}
        value={profissao}
      />
      <TextInput
        placeholder="Senha"
        onChangeText={setSenha}
        value={senha}
        secureTextEntry
      />
      <Button title="Cadastrar" onPress={handleCadastro} />
    </View>
  );
};

export default CadastroScreen;
