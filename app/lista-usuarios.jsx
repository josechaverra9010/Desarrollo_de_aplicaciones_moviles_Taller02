import { useState } from 'react';
import { View, TextInput, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Text, Card, useTheme } from 'react-native-paper';
import { useRouter } from 'expo-router';
import usuarios from '../assets/usuarios.json';

export default function ListaUsuarios() {
  const router = useRouter();
  const { colors } = useTheme();
  
  const onePieceColors = {
    background: '#1a1a2e',
    primary: '#f9a825',
    secondary: '#d32f2f',
    text: '#ffffff',
    cardBackground: '#2e3a59',
    borderColor: '#f9a825',
  };

  const [lista, setLista] = useState(usuarios);
  const [busqueda, setBusqueda] = useState('');

  const handleSearch = (query) => {
    setBusqueda(query);
    if (query) {
      const filtrados = usuarios.filter(item =>
        item.nombre.toLowerCase().includes(query.toLowerCase())
      );
      setLista(filtrados);
    } else {
      setLista(usuarios);
    }
  };

  const renderItem = ({ item }) => (
    <Card
      style={[styles.card, { backgroundColor: onePieceColors.cardBackground, borderColor: onePieceColors.borderColor }]}
      onPress={() => router.push({ pathname: '/detalle-usuario', params: { id: item.id } })}
    >
      <View style={styles.cardContent}>
        <Image source={require('../assets/usuario.png')} style={[styles.avatar, { borderColor: onePieceColors.primary }]} />
        <View style={styles.userInfo}>
          <Text variant="titleMedium" style={[styles.nombre, { color: onePieceColors.text }]}>{item.nombre}</Text>
          <Text variant="bodyMedium" style={{ color: onePieceColors.text }}>{item.email}</Text>
        </View>
      </View>
    </Card>
  );

  return (
    <View style={[styles.container, { backgroundColor: onePieceColors.background }]}>
      <TextInput
        placeholder="Buscar usuario..."
        value={busqueda}
        onChangeText={handleSearch}
        style={[styles.searchbar, { backgroundColor: onePieceColors.cardBackground, color: onePieceColors.text, borderColor: onePieceColors.borderColor }]}
        placeholderTextColor={onePieceColors.text}
      />
      <FlatList
        data={lista}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 16 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  searchbar: {
    height: 40,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    borderWidth: 1,
  },
  card: {
    marginBottom: 12,
    borderRadius: 12,
    borderWidth: 2,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
    borderWidth: 2,
  },
  userInfo: {
    flex: 1,
  },
  nombre: {
    fontWeight: 'bold',
  },
});