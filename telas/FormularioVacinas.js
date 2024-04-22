import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const perguntas = [
  { id: 1, texto: 'Já tomou a vacina contra gripe (Influenza)?' },
  { id: 2, texto: 'Já tomou a vacina pneumocócica conjugada (VPC13)?' },
  { id: 3, texto: 'Já tomou a vacina contra hepatite B?' },
  { id: 4, texto: 'Já tomou a vacina contra febre amarela?' },
  { id: 5, texto: 'Já tomou a vacina HPV4 contra o Papilomavírus humano?' },
  { id: 6, texto: 'Já tomou a vacina VSR contra o Vírus Sincicial Respiratório?' },
  { id: 7, texto: 'Já tomou a Vacina dupla bacteriana do tipo adulto dT?' },
  { id: 8, texto: 'Já tomou a vacina contra hepatite B?' },
];

const FormularioVacinas = () => {
  const [respostas, setRespostas] = useState(Array(perguntas.length).fill(null));

  const handleResposta = (index, resposta) => {
    const novasRespostas = [...respostas];
    novasRespostas[index] = resposta;
    setRespostas(novasRespostas);
  };

  const renderPergunta = (pergunta, index) => {
    return (
      <View key={pergunta.id} style={styles.perguntaContainer}>
        <Text style={styles.perguntaTexto}>{pergunta.texto}</Text>
        <View style={styles.botoesContainer}>
          <TouchableOpacity
            style={[styles.botao, respostas[index] === 'sim' && styles.botaoSelecionado]}
            onPress={() => handleResposta(index, 'sim')}
          >
            <Text style={[styles.botaoTexto, respostas[index] === 'sim' && styles.botaoTextoSelecionado]}>Sim</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.botao, respostas[index] === 'não' && styles.botaoSelecionado]}
            onPress={() => handleResposta(index, 'não')}
          >
            <Text style={[styles.botaoTexto, respostas[index] === 'não' && styles.botaoTextoSelecionado]}>Não</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Responda às perguntas sobre vacinas:</Text>
      {perguntas.map((pergunta, index) => renderPergunta(pergunta, index))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  perguntaContainer: {
    marginBottom: 20,
  },
  perguntaTexto: {
    fontSize: 16,
    marginBottom: 10,
  },
  botoesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  botao: {
    width: '45%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: 'center',
  },
  botaoSelecionado: {
    backgroundColor: '#007bff',
    borderColor: '#007bff',
  },
  botaoTexto: {
    fontSize: 16,
    color: '#333',
  },
  botaoTextoSelecionado: {
    color: '#fff',
  },
});

export default FormularioVacinas;
