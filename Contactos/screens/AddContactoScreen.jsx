import React, { useState } from 'react';
import {
View,
Text,
TextInput,
Button,
StyleSheet,
Alert
} from 'react-native';

export default function AddContactoScreen({ navigation, route }) {
const [nombre, setNombre] = useState('');

const [numero, setNumero] = useState('');    

const { addContacto } = route.params || {};

const isNombreValid = nombre.trim().length >= 3;

const isNumeroValid = numero.trim().length >= 6

const handleAdd = () => { 
    if (!isNombreValid) {
    Alert.alert('Error', 'El nombre debe de tener al menos tres caracteres');
    return;
    } 
    if (!isNumeroValid) { 
    Alert.alert('Error', 'El numero de telefono debe ser valido')
    return;
    
    }
    const newContacto = {
    id: Date.now(),
    nombre: nombre.trim(),
    numero: numero.trim(), 
    favorito: false,
    };


    if (typeof addContacto === 'function') {
    addContacto(newContacto);
    } else {
    console.warn('addContacto no esta definido');
    }

    navigation.goBack();
    };

return (
    <View style={styles.container}>
    <Text style={styles.header}>Agregar contacto</Text>

    <TextInput
        style={styles.input}
        placeholder="Nombre (mín. 3 caracteres)"
        value={nombre}
        onChangeText={setNombre}
    />

    { !isNombreValid && nombre.length > 0 && (
        <Text style={styles.errorText}>
        El nombre debe de tener minimo tres caracteres.
        </Text>
    )}

    <TextInput
        style={styles.input}
        placeholder="Numero de telefono (min. 6 digitos)"
        keyboardType="phone-pad"        
        value={numero}       
        onChangeText={setNumero}
    />

    { !isNumeroValid && numero.length > 0 && (
        <Text style={styles.errorText}>
        El numero debe de ser valido.
        </Text>
    )}

    
    <View style={styles.buttons}>
        <Button
        title="Agregar contacto"
        onPress={handleAdd}
        disabled={!isNombreValid || !isNumeroValid}
        />
        {(nombre.length > 0 || numero.length > 0) && (
        <Button
            title="Limpiar"
            onPress={() => {
            setNombre('');
            setNumero('');
            }}
        />
        )}
    </View>
    </View>
);
}
const styles = StyleSheet.create({
container:  { flex: 1, padding: 16, backgroundColor: '#FFA500' },
header:     { fontSize: 22, fontWeight: 'bold', marginBottom: 12 },
input:      {
borderWidth: 1,
borderColor: '#ccc',
padding: 8,
borderRadius: 4,
marginBottom: 8,
},
errorText:  { color: 'red', marginBottom: 8 },
buttons:    { flexDirection: 'row', justifyContent: 'space-between' },
});
