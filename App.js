import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Navigation from './Navigation';
import 'react-native-gesture-handler';
import axios from 'axios';



const App = () => {
  const response = axios.get("https://vacinebem05-ehpsdem0i-mauro-sergios-projects.vercel.app/teste")
  .then(response => { 
    console.log(response.data)
  })
  .catch(error => { 
    console.error('Erro ao fazer a solicitação:', error);
  });

  

  return <Navigation />;
};

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
