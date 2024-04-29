import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const CadastroScreen = () => {
  const handleCadastro = async (values) => {
    try {
      const response = await axios.post('/api/cadastrarUsuario', values);
      console.log('Resposta do servidor:', response.data);
      // Aqui você pode fazer algo com a resposta do servidor, como redirecionar o usuário para outra tela

      const cadastrarUsuario = async (req, res) => {
        // Lógica para cadastrar o usuário no banco de dados
        // ...
        // Se o cadastro for bem-sucedido
        res.status(200).json({ message: 'Usuário cadastrado com sucesso!' });
      };
      
    } catch (error) {
      console.error('Erro ao cadastrar:', error.message); // Alterado para error.message
      console.log(error.response.data);
      // Aqui você pode tratar o erro, exibindo uma mensagem para o usuário, por exemplo
    }
  };

  return (
    <View>
      <Text>Cadastro</Text>
      <Formik
        initialValues={{ cpf: '', nome: '', email: '', profissao: '', senha: '' }}
        validationSchema={Yup.object().shape({
          cpf: Yup.string().required('CPF é obrigatório'),
          nome: Yup.string().required('Nome é obrigatório'),
          email: Yup.string().email('Email inválido').required('Email é obrigatório'),
          profissao: Yup.string().required('Profissão é obrigatória'),
          senha: Yup.string().required('Senha é obrigatória'),
        })}
        onSubmit={handleCadastro}
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
              placeholder="Nome"
              onChangeText={handleChange('nome')}
              onBlur={handleBlur('nome')}
              value={values.nome}
            />
            {touched.nome && errors.nome && <Text>{errors.nome}</Text>}
            <TextInput
              placeholder="Email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            {touched.email && errors.email && <Text>{errors.email}</Text>}
            <TextInput
              placeholder="Profissão"
              onChangeText={handleChange('profissao')}
              onBlur={handleBlur('profissao')}
              value={values.profissao}
            />
            {touched.profissao && errors.profissao && <Text>{errors.profissao}</Text>}
            <TextInput
              placeholder="Senha"
              onChangeText={handleChange('senha')}
              onBlur={handleBlur('senha')}
              value={values.senha}
              secureTextEntry
            />
            {touched.senha && errors.senha && <Text>{errors.senha}</Text>}
            <Button title="Cadastrar" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default CadastroScreen;
