import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    // Aqui você pode enviar os dados de login para o backend
    // Por exemplo: chamar uma função que faz uma requisição POST para /api/login
    console.log('CPF:', cpf);
    console.log('Senha:', senha);
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
