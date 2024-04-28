// Arquivo Navigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './Frontend/LoginScreen';
import CadastroScreen from './Frontend/CadastroScreen';
import HomeScreen from './Frontend/HomeScreen';
import FormularioVacinas from './Frontend/FormularioVacinas';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="Formulario" component={FormularioVacinas} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
