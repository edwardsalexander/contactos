import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ContactoListScreen from '../screens/ContactoListScreen';
import AddContactoScreen from '../screens/AddContactoScreen';

const Stack = createStackNavigator();

export default function App() {
return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="ContactoList">
        <Stack.Screen name="ContactoList" component={ContactoListScreen} options={{ title: 'Agenda de contactos' }} />
        <Stack.Screen name="AddContacto" component={AddContactoScreen} options={{ title: 'Agregar Contacto' }} />
    </Stack.Navigator>
    </NavigationContainer>
);
}