import { View, StyleSheet, Image, ScrollView, Alert } from 'react-native';
import { Text, Card, Button, useTheme } from 'react-native-paper';
import { useRouter, useLocalSearchParams } from 'expo-router';

// Import the JSON data file
import productos from '../assets/productos.json';

export default function DetalleElemento() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const { colors } = useTheme();

  const onePieceColors = {
    background: '#1a1a2e',
    primary: '#f9a825',
    secondary: '#d32f2f',
    text: '#ffffff',
    cardBackground: '#2e3a59',
    borderColor: '#f9a825',
  };

  // Find the element in the imported JSON data, converting id to number for comparison
  const elemento = productos.find(e => e.id === parseInt(id));

  if (!elemento) {
    Alert.alert('Error', 'Elemento no encontrado');
    return (
      <View style={[styles.container, { backgroundColor: onePieceColors.background }]}>
        <Text style={{ color: onePieceColors.text }}>Elemento no encontrado.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={[styles.container, { backgroundColor: onePieceColors.background }]}>
      <Card style={[styles.card, { backgroundColor: onePieceColors.cardBackground, borderColor: onePieceColors.borderColor }]}>
        {/* The image source now uses the URL from the JSON data */}
        <Image
          source={{ uri: elemento.imagen }}
          style={styles.cardImage}
          accessibilityLabel={`Imagen de ${elemento.titulo}`}
        />
        <Card.Content>
          <Text variant="headlineSmall" style={[styles.title, { color: onePieceColors.primary }]}>
            {elemento.titulo}
          </Text>
          <Text style={[styles.paragraph, { color: onePieceColors.text }]}>
            {elemento.descripcion}
          </Text>
          
          {/* Show additional details if available */}
          {elemento.tipo && (
            <View style={styles.infoContainer}>
              <Text style={[styles.infoTitle, { color: onePieceColors.primary }]}>Tipo:</Text>
              <Text style={[styles.infoText, { color: onePieceColors.text }]}> {elemento.tipo}</Text>
            </View>
          )}
          
          {elemento.usuarioActual && (
            <View style={styles.infoContainer}>
              <Text style={[styles.infoTitle, { color: onePieceColors.primary }]}>Usuario Actual:</Text>
              <Text style={[styles.infoText, { color: onePieceColors.text }]}> {elemento.usuarioActual}</Text>
            </View>
          )}
          
          {elemento.habilidades && (
            <View style={styles.infoContainer}>
              <Text style={[styles.infoTitle, { color: onePieceColors.primary }]}>Habilidades:</Text>
              <Text style={[styles.infoText, { color: onePieceColors.text }]}> {elemento.habilidades}</Text>
            </View>
          )}
          
          {elemento.peligros && (
            <View style={styles.infoContainer}>
              <Text style={[styles.infoTitle, { color: onePieceColors.primary }]}>Peligros:</Text>
              <Text style={[styles.infoText, { color: onePieceColors.text }]}> {elemento.peligros}</Text>
            </View>
          )}

          {/* Show ID for reference */}
          <View style={styles.infoContainer}>
            <Text style={[styles.infoTitle, { color: onePieceColors.primary }]}>ID:</Text>
            <Text style={[styles.infoText, { color: onePieceColors.text }]}> {elemento.id}</Text>
          </View>
          
        </Card.Content>
      </Card>
      <Button
        mode="contained"
        onPress={() => router.back()}
        style={[styles.botonVolver, { backgroundColor: onePieceColors.secondary }]}
        labelStyle={styles.botonVolverTexto}
      >
        Volver
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    marginBottom: 20,
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
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode: 'cover',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  paragraph: {
    lineHeight: 22,
    marginBottom: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  infoTitle: {
    fontWeight: 'bold',
  },
  infoText: {
    flexShrink: 1,
  },
  botonVolver: {
    borderRadius: 25,
    paddingVertical: 8,
  },
  botonVolverTexto: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
