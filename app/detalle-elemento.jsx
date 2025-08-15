import { View, StyleSheet, Image, ScrollView, Alert } from 'react-native';
import { Text, Card, Button, useTheme } from 'react-native-paper';
import { useRouter, useLocalSearchParams } from 'expo-router';

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

  const devilFruits = [
    {
      id: '1',
      titulo: 'Gomu Gomu no Mi',
      descripcion: 'Una fruta del Diablo de tipo Paramecia que le da a su usuario la habilidad de estirar su cuerpo como la goma.',
      urlImagen: 'https://i.imgur.com/uNf4H3B.png',
      tipo: 'Paramecia',
      usuarioActual: 'Monkey D. Luffy',
      habilidades: 'Ataques elásticos, resistencia a los golpes, y la capacidad de entrar en el Gear Second, Third, Fourth y Fifth.',
      peligros: 'Incapacidad para nadar, la debilidad de ser un martillo en el agua.',
    },
    {
      id: '2',
      titulo: 'Mera Mera no Mi',
      descripcion: 'Una fruta del Diablo de tipo Logia que le permite a su usuario crear, controlar y transformarse en fuego.',
      urlImagen: 'https://i.imgur.com/k9vjT1h.png',
      tipo: 'Logia',
      usuarioActual: 'Sabo',
      habilidades: 'Creación de fuego, invulnerabilidad a ataques físicos no imbuídos con Haki, ataques a distancia con fuego.',
      peligros: 'Debilidad ante su fruta opuesta, la Hie Hie no Mi (fruta de hielo).',
    },
    {
      id: '3',
      titulo: 'Ope Ope no Mi',
      descripcion: 'Una fruta del Diablo de tipo Paramecia que le otorga a su usuario la capacidad de crear una esfera territorial donde puede manipular todo a su antojo.',
      urlImagen: 'https://i.imgur.com/vH9F4lR.png',
      tipo: 'Paramecia',
      usuarioActual: 'Trafalgar Law',
      habilidades: 'Cambios de posición, teletransporte, manipulación de cuerpos y la habilidad de otorgar la eterna juventud a cambio de la vida del usuario.',
      peligros: 'Requiere mucha energía y concentración para su uso prolongado.',
    },
    {
      id: '4',
      titulo: 'Hito Hito no Mi',
      descripcion: 'Una fruta del Diablo de tipo Zoan que le permite a su usuario transformarse en un híbrido humano y un animal, como Tony Tony Chopper.',
      urlImagen: 'https://i.imgur.com/Qp4t2Zt.png',
      tipo: 'Zoan',
      usuarioActual: 'Tony Tony Chopper',
      habilidades: 'Transformaciones en diferentes formas (humana, animal y un híbrido), aumentando su fuerza, inteligencia y habilidades.',
      peligros: 'Al comer un Rumble Ball, puede perder el control de sus transformaciones.',
    },
  ];

  const elemento = devilFruits.find(e => e.id === id);

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
        <Image
          source={require('../assets/hom.png')}
          style={styles.cardImage}
          accessibilityLabel={`Imagen de la ${elemento.titulo}`}
        />
        <Card.Content>
          <Text variant="headlineSmall" style={[styles.title, { color: onePieceColors.primary }]}>
            {elemento.titulo}
          </Text>
          <Text style={[styles.paragraph, { color: onePieceColors.text }]}>
            {elemento.descripcion}
          </Text>
          <View style={styles.infoContainer}>
            <Text style={[styles.infoTitle, { color: onePieceColors.primary }]}>Tipo:</Text>
            <Text style={[styles.infoText, { color: onePieceColors.text }]}> {elemento.tipo}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={[styles.infoTitle, { color: onePieceColors.primary }]}>Usuario Actual:</Text>
            <Text style={[styles.infoText, { color: onePieceColors.text }]}> {elemento.usuarioActual}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={[styles.infoTitle, { color: onePieceColors.primary }]}>Habilidades:</Text>
            <Text style={[styles.infoText, { color: onePieceColors.text }]}> {elemento.habilidades}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={[styles.infoTitle, { color: onePieceColors.primary }]}>Peligros:</Text>
            <Text style={[styles.infoText, { color: onePieceColors.text }]}> {elemento.peligros}</Text>
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