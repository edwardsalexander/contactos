import React, { useState } from 'react';
import {
View,
Text,
Button,
ScrollView,
StyleSheet,
TouchableOpacity,
} from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';

export default function ContactoListScreen({ navigation }) {
const [contactos, setContactos] = useState([
    { id: 1, nombre: 'Edwards', numero: '0212345543', favorito: false },
    { id: 2, nombre: 'Gabriel', numero: '3012345678', favorito: false },
    { id: 3, nombre: 'Alex', numero: '1234567891', favorito: false },
]);

const [filterMode, setFilterMode] = useState('all');

const addContacto = (nuevoContacto) => {
    setContactos(prev => [...prev, nuevoContacto]);
};

const toggleFavorito = (id) => {
    setContactos(prev =>
    prev.map(c =>
        c.id === id ? { ...c, favorito: !c.favorito } : c
    )
    );
};

const displayedContactos =
    filterMode === 'favoritos'
    ? contactos.filter(c => c.favorito)
    : contactos;
const editarContacto = (id) => {
    console.log('Editar contacto con ID:', id);
};

const eliminarContacto = (id) => {
    console.log('Eliminar contacto con ID:', id);
};


return (
    <View style={styles.container}>
    <Text style={styles.header}>Contactos</Text>

    <View style={styles.filterRow}>
        <Button
        title="Todos"
        onPress={() => setFilterMode('all')}
        color={filterMode === 'all' ? '#d61d1d' : undefined}
        />
        <Button
        title="Favoritos"
        onPress={() => setFilterMode('favoritos')}
        color={filterMode === 'favoritos' ? '#d61d1d' : undefined}
        />
    </View>

    <ScrollView style={styles.list}>
    {displayedContactos.map((contacto) => (
    <View key={contacto.id} style={styles.contactoRow}>
    <View style={styles.contactoInfo}>
        <Text style={styles.contactoText}>
        {contacto.nombre} - {contacto.numero}
        </Text>
    </View>

    <View style={styles.iconGroup}>
        <TouchableOpacity onPress={() => toggleFavorito(contacto.id)}>
        <Text style={styles.favoriteIcon}>
            {contacto.favorito ? '★' : '☆'}
        </Text>
        </TouchableOpacity>

        
        <TouchableOpacity
        style={styles.iconButton}
        onPress={() => editarContacto(contacto.id)}
        >
        <Feather name="edit" size={20} color="#007BFF" />
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.iconButton}
        onPress={() => eliminarContacto(contacto.id)}
        >
        <FontAwesome name="trash" size={20} color="#000" />
        </TouchableOpacity>
    </View>
    </View>
))}
</ScrollView>


    <Button
        title="Agregar contacto"
        onPress={() => navigation.navigate('AddContacto', { addContacto })}
    />
    </View>
);
}
const styles = StyleSheet.create({
container: {
    flex: 1,
    padding: 19,
    backgroundColor: '#FFA500',
},
header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
},
filterRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 12,
},
list: {
    flex: 1,
    marginBottom: 12,
},
contactoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
},
contactoText: {
    fontSize: 16,
    marginRight: 10,
},
favoriteIcon: {
    fontSize: 20,
    color: '#d61d1d',
    marginLeft: 6,
},
iconGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
},
iconButton: {
    marginLeft: 10,
},
addButton: {
    backgroundColor: '#ff0000',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
},
addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
},
});
