import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const CadastroScreen = () => {
  const [cpf, setCpf] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [profissao, setProfissao] = useState('');
  const [senha, setSenha] = useState('');

  const handleCadastro = () => {
    // Aqui você pode enviar os dados de cadastro para o backend
    // Por exemplo: chamar uma função que faz uma requisição POST para /api/cadastrar
    console.log('CPF:', cpf);
    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Profissão:', profissao);
    console.log('Senha:', senha);
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
