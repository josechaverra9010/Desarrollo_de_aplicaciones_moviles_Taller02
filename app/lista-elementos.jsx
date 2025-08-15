import { useState, useEffect } from 'react';
import { View, FlatList, Image, TextInput, StyleSheet } from 'react-native';
import { Text, Button, Card, useTheme } from 'react-native-paper';
import { useRouter } from 'expo-router';

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

  const devilFruits = [
    {
      id: '1',
      titulo: 'Gomu Gomu no Mi',
      descripcion: 'Una fruta del Diablo de tipo Paramecia que le da a su usuario la habilidad de estirar su cuerpo como la goma.',
      urlImagen: 'https://i.imgur.com/uNf4H3B.png', // Placeholder para imagen de la Gomu Gomu no Mi
    },
    {
      id: '2',
      titulo: 'Mera Mera no Mi',
      descripcion: 'Una fruta del Diablo de tipo Logia que le permite a su usuario crear, controlar y transformarse en fuego.',
      urlImagen: 'https://i.imgur.com/k9vjT1h.png', // Placeholder para imagen de la Mera Mera no Mi
    },
    {
      id: '3',
      titulo: 'Ope Ope no Mi',
      descripcion: 'Una fruta del Diablo de tipo Paramecia que le otorga a su usuario la capacidad de crear una esfera territorial donde puede manipular todo a su antojo.',
      urlImagen: 'https://i.imgur.com/vH9F4lR.png', // Placeholder para imagen de la Ope Ope no Mi
    },
    {
      id: '4',
      titulo: 'Hito Hito no Mi',
      descripcion: 'Una fruta del Diablo de tipo Zoan que le permite a su usuario transformarse en un híbrido humano y un animal, como Tony Tony Chopper.',
      urlImagen: 'https://i.imgur.com/Qp4t2Zt.png', // Placeholder para imagen de la Hito Hito no Mi
    },
  ];

  const [lista, setLista] = useState(devilFruits);
  const [busqueda, setBusqueda] = useState('');

  useEffect(() => {
    if (busqueda) {
      const filtrados = devilFruits.filter(item =>
        item.titulo.toLowerCase().includes(busqueda.toLowerCase())
      );
      setLista(filtrados);
    } else {
      setLista(devilFruits);
    }
  }, [busqueda]);

  const renderItem = ({ item }) => (
    <Card style={[styles.card, { backgroundColor: onePieceColors.cardBackground, borderColor: onePieceColors.borderColor }]}>
      <Card.Content>
        <Image source={require('../assets/hom.png')} style={styles.cardImage} />
        <Text variant="titleLarge" style={[styles.cardTitle, { color: onePieceColors.text }]}>
          {item.titulo}
        </Text>
        <Text variant="bodyMedium" style={[styles.cardDescription, { color: onePieceColors.text }]}>
          {item.descripcion}
        </Text>
      </Card.Content>
      <Card.Actions>
        <Button
          onPress={() => router.push({ pathname: '/detalle-elemento', params: { id: item.id } })}
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
        placeholder="Buscar Fruta del Diablo..."
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
  },
  cardTitle: {
    fontWeight: 'bold',
  },
  cardDescription: {
    marginTop: 4,
  },
});