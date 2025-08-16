import { useState, useEffect } from 'react';
import { View, FlatList, Image, TextInput, StyleSheet } from 'react-native';
import { Text, Button, Card, useTheme } from 'react-native-paper';
import { useRouter } from 'expo-router';

// Import the JSON data file
import productos from '../assets/productos.json';

export default function ListaElementos() {
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

  const [lista, setLista] = useState(productos);
  const [busqueda, setBusqueda] = useState('');

  useEffect(() => {
    if (busqueda) {
      const filtrados = productos.filter(item =>
        item.titulo.toLowerCase().includes(busqueda.toLowerCase())
      );
      setLista(filtrados);
    } else {
      setLista(productos);
    }
  }, [busqueda]);

  const renderItem = ({ item }) => (
    <Card style={[styles.card, { backgroundColor: onePieceColors.cardBackground, borderColor: onePieceColors.borderColor }]}>
      <Card.Content>
        <Image 
          source={{ uri: item.imagen }} 
          style={styles.cardImage}
          accessibilityLabel={`Imagen de ${item.titulo}`}
        />
        <Text variant="titleLarge" style={[styles.cardTitle, { color: onePieceColors.text }]}>
          {item.titulo}
        </Text>
        <Text variant="bodyMedium" style={[styles.cardDescription, { color: onePieceColors.text }]}>
          {item.descripcion}
        </Text>
      </Card.Content>
      <Card.Actions>
        <Button
          onPress={() => router.push({ pathname: '/detalle-elemento', params: { id: item.id.toString() } })}
          labelStyle={{ color: onePieceColors.primary }}
        >
          Ver detalles
        </Button>
      </Card.Actions>
    </Card>
  );

  return (
    <View style={[styles.container, { backgroundColor: onePieceColors.background }]}>
      <TextInput
        placeholder="Buscar producto..."
        value={busqueda}
        onChangeText={setBusqueda}
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
    marginBottom: 16,
    borderRadius: 12,
    borderWidth: 2,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  cardImage: {
    width: '100%',
    height: 180,
    borderRadius: 8,
    marginBottom: 12,
    resizeMode: 'cover',
  },
  cardTitle: {
    fontWeight: 'bold',
  },
  cardDescription: {
    marginTop: 4,
  },
});
