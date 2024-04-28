import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';

const HomeScreen = () => {
  const [dadosUsuario, setDadosUsuario] = useState({});
  const [vacinasSim, setVacinasSim] = useState([]);
  const [vacinasNao, setVacinasNao] = useState([]);

  // Simulação de dados do usuário e vacinas
  useEffect(() => {
    // Simulação de dados do usuário
    setDadosUsuario({
      nome: 'Fulano de Tal',
      email: 'fulano@example.com',
      profissao: 'Profissional da Saúde',
    });

    // Simulação de vacinas marcadas como "sim" e "não"
    setVacinasSim([
      { id: 1, texto: 'Vacina contra gripe (Influenza)' },
      { id: 4, texto: 'Vacina contra febre amarela' },
      { id: 5, texto: 'Vacina HPV4 contra o Papilomavírus humano' },
    ]);

    setVacinasNao([
      { id: 2, texto: 'Vacina pneumocócica conjugada (VPC13)' },
      { id: 3, texto: 'Vacina contra hepatite B' },
      { id: 6, texto: 'Vacina VSR contra o Vírus Sincicial Respiratório' },
      { id: 7, texto: 'Vacina dupla bacteriana do tipo adulto dT' },
      { id: 8, texto: 'Vacina contra hepatite B' },
    ]);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.secao}>
        <Text style={styles.titulo}>Seus Dados</Text>
        <Text>Nome: {dadosUsuario.nome}</Text>
        <Text>Email: {dadosUsuario.email}</Text>
        <Text>Profissão: {dadosUsuario.profissao}</Text>
      </View>
      <View style={styles.secao}>
        <Text style={styles.titulo}>Vacinas Marcadas como "Sim"</Text>
        {vacinasSim.map((vacina) => (
          <Text key={vacina.id}>{vacina.texto}</Text>
        ))}
      </View>
      <View style={styles.secao}>
        <Text style={styles.titulo}>Vacinas Marcadas como "Não"</Text>
        {vacinasNao.map((vacina) => (
          <Text key={vacina.id}>{vacina.texto}</Text>
        ))}
      </View>
      <TouchableOpacity style={styles.atalho} onPress={() => console.log('Atalho pressionado')}>
        <Text style={styles.textoAtalho}>Atalho 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.atalho} onPress={() => console.log('Atalho pressionado')}>
        <Text style={styles.textoAtalho}>Atalho 2</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  secao: {
    marginBottom: 20,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  atalho: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  textoAtalho: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
