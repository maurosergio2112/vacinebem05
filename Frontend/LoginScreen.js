import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const LoginScreen = ({ navigation }) => {
  const handleLogin = async (values) => {
    try {
      const response = await axios.post('/api/login', values);
      console.log('Resposta do servidor:', response.data);
      // Aqui você pode fazer algo com a resposta do servidor, como redirecionar o usuário para outra tela
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      console.log(error.response.data);
      // Aqui você pode tratar o erro, exibindo uma mensagem para o usuário, por exemplo
    }
  };

  return (
    <View>
      <Text>Login</Text>
      <Formik
        initialValues={{ cpf: '', senha: '' }}
        validationSchema={Yup.object().shape({
          cpf: Yup.string().required('CPF é obrigatório'),
          senha: Yup.string().required('Senha é obrigatória'),
        })}
        onSubmit={handleLogin}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View>
            <TextInput
              placeholder="CPF"
              onChangeText={handleChange('cpf')}
              onBlur={handleBlur('cpf')}
              value={values.cpf}
            />
            {touched.cpf && errors.cpf && <Text>{errors.cpf}</Text>}
            <TextInput
              placeholder="Senha"
              onChangeText={handleChange('senha')}
              onBlur={handleBlur('senha')}
              value={values.senha}
              secureTextEntry
            />
            {touched.senha && errors.senha && <Text>{errors.senha}</Text>}
            <Button title="Entrar" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
      <Text onPress={() => navigation.navigate('Cadastro')}>Não tem uma conta? Cadastrar-se</Text>
    </View>
  );
};

export default LoginScreen;
