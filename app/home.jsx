import React, { useState } from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';
import { Text, Button, Card, Searchbar, useTheme } from 'react-native-paper';
import { useRouter } from 'expo-router';

export default function ListaTarjetas() {
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

  const datosOnePiece = [
    {
      id: 1,
      titulo: 'Monkey D. Luffy',
      descripcion: 'El Capitán de los Piratas del Sombrero de Paja y usuario de la Gomu Gomu no Mi. Su sueño es convertirse en el Rey de los Piratas.',
      urlImagen: 'https://i.imgur.com/e44s3rD.png',
    },
    {
      id: 2,
      titulo: 'Roronoa Zoro',
      descripcion: 'El espadachín de la tripulación y maestro del estilo Santoryu. Su objetivo es convertirse en el mejor espadachín del mundo.',
      urlImagen: 'https://i.imgur.com/kP4U2Qf.png',
    },
    {
      id: 3,
      titulo: 'Nami',
      descripcion: 'La navegante de la tripulación con una habilidad única para predecir el clima. Su sueño es dibujar un mapa completo del mundo.',
      urlImagen: 'https://i.imgur.com/J3iE2e1.png',
    },
    {
      id: 4,
      titulo: 'El Going Merry',
      descripcion: 'El primer barco de la tripulación, una carabela que los llevó a través de innumerables aventuras antes de su trágico final.',
      urlImagen: 'https://i.imgur.com/8QdY2kH.png',
    },
    {
      id: 5,
      titulo: 'El Thousand Sunny',
      descripcion: 'El segundo barco de los Sombrero de Paja, construido con la madera del Árbol de la Joya de la Madera de Adam.',
      urlImagen: 'https://i.imgur.com/U1Uv6xN.png',
    },
    {
      id: 6,
      titulo: 'La Isla de Zou',
      descripcion: 'Una isla mística que es un elefante gigante de 1000 años. El hogar de la tribu Mink y un Road Poneglyph.',
      urlImagen: 'https://i.imgur.com/Qk9E9f9.png',
    },
  ];

  const [lista, setLista] = useState(datosOnePiece);
  const [busqueda, setBusqueda] = useState('');

  const handleSearch = (query) => {
    setBusqueda(query);
    if (query) {
      const filtrados = datosOnePiece.filter(item =>
        item.titulo.toLowerCase().includes(query.toLowerCase())
      );
      setLista(filtrados);
    } else {
      setLista(datosOnePiece);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: onePieceColors.background }]}>
      <Searchbar
        placeholder="Buscar..."
        onChangeText={handleSearch}
        value={busqueda}
        style={styles.searchbar}
        inputStyle={{ color: onePieceColors.text }}
        placeholderTextColor={onePieceColors.text}
        iconColor={onePieceColors.primary}
        theme={{ colors: { surface: onePieceColors.cardBackground, onSurface: onePieceColors.text } }}
      />
      <ScrollView>
        {lista.map((item) => (
          <Card key={item.id} style={styles.card}>
            <Card.Cover source={require('../assets/hom.png')} style={styles.cardImage} />
            <Card.Content style={styles.cardContent}>
              <Text variant="titleLarge" style={[styles.cardTitle, { color: onePieceColors.text }]}>
                {item.titulo}
              </Text>
              <Text variant="bodyMedium" style={[styles.cardDescription, { color: onePieceColors.text }]}>
                {item.descripcion}
              </Text>
            </Card.Content>
            <Card.Actions>
              <Button
                mode="text"
                onPress={() => router.push({ pathname: '/detalle-elemento', params: { id: item.id } })}
                labelStyle={{ color: onePieceColors.primary }}
              >
                Ver detalles
              </Button>
            </Card.Actions>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  searchbar: {
    marginBottom: 16,
    borderRadius: 8,
  },
  card: {
    marginBottom: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#f9a825',
    backgroundColor: '#2e3a59',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  cardImage: {
    height: 180,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardContent: {
    paddingTop: 12,
  },
  cardTitle: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardDescription: {
    lineHeight: 20,
  },
});