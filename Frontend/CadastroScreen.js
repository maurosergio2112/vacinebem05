import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';

const CadastroScreen = ({ navigation }) => { // Adicione o parâmetro de navegação
  const [cpf, setCpf] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [profissao, setProfissao] = useState('');
  const [senha, setSenha] = useState('');

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
      // Verifica se o cadastro foi bem-sucedido
      if (response.data && response.data.message === 'Usuário cadastrado com sucesso!') {
        // Redireciona o usuário para a próxima tela
        navigation.navigate('FormularioVacinas.js');
      }
    } catch (error) {
      console.error('Erro ao cadastrar:', error.message); // Substituído por error.message
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
