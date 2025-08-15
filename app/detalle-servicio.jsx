import { View, StyleSheet, ScrollView, Alert, Image } from 'react-native';
import { Text, Button, Card, useTheme } from 'react-native-paper';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function DetalleServicio() {
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

  const serviciosPirata = [
    {
      id: '1',
      titulo: 'Navegación con LogPose',
      descripcion: 'Este servicio te proporciona un LogPose de última generación con actualizaciones en tiempo real para trazar las rutas más seguras y rápidas a las islas más inexploradas. Ideal para novatos y veteranos del Grand Line.',
      icono: 'compass',
      urlImagen: 'https://i.imgur.com/g8C3K65.png', // Imagen de un LogPose
      detalles: [
        'Rutas optimizadas para evitar tormentas y flotas de la Marina.',
        'Notificaciones de islas con Poneglyphs o tesoros.',
        'Soporte técnico por parte de un navegante profesional.',
      ],
    },
    {
      id: '2',
      titulo: 'Identificación de Frutas del Diablo',
      descripcion: 'Servicio de análisis de Frutas del Diablo para determinar su tipo (Logia, Paramecia, Zoan) y sus habilidades. Evita comer una fruta inútil y descubre el verdadero poder de tu tesoro.',
      icono: 'fruit-pineapple',
      urlImagen: 'https://i.imgur.com/S6B9w0o.png', // Imagen de una Fruta del Diablo
      detalles: [
        'Análisis completo de la fruta en 24 horas.',
        'Base de datos con más de 100 frutas conocidas.',
        'Consejos sobre cómo dominar tus nuevas habilidades.',
      ],
    },
    {
      id: '3',
      titulo: 'Tablero de Recompensas',
      descripcion: 'Accede a la base de datos más completa del Gremio para ver las recompensas de tus rivales y las tuyas. Mantente al tanto de quién es el más buscado del mar.',
      icono: 'wanted-poster',
      urlImagen: 'https://i.imgur.com/G4lE9V1.png', // Imagen de un cartel de recompensa
      detalles: [
        'Actualizaciones diarias de recompensas.',
        'Filtro por mar (East Blue, Grand Line, Nuevo Mundo).',
        'Notificaciones de cambios en recompensas.',
      ],
    },
    {
      id: '4',
      titulo: 'Reparaciones de Barcos',
      descripcion: 'Ofrecemos un servicio de reparación integral para tu navío, desde pequeños daños de batalla hasta la reconstrucción completa. Nuestros carpinteros son maestros con la madera de Adam.',
      icono: 'ship-wheel',
      urlImagen: 'https://i.imgur.com/3Z6bF4F.png', // Imagen de un barco pirata
      detalles: [
        'Reparaciones de mástil y velas.',
        'Instalación de cañones y defensas.',
        'Servicios de carpintería y mejoras estéticas.',
      ],
    },
  ];

  const servicio = serviciosPirata.find(s => s.id === id);

  if (!servicio) {
    Alert.alert('Error', 'Servicio no encontrado');
    return (
      <View style={[styles.container, { backgroundColor: onePieceColors.background }]}>
        <Text style={{ color: onePieceColors.text }}>Servicio no encontrado.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={[styles.container, { backgroundColor: onePieceColors.background }]}>
      <Card style={[styles.card, { backgroundColor: onePieceColors.cardBackground, borderColor: onePieceColors.borderColor }]}>
        <Image
          source={require('../assets/servicio.png')}
          style={styles.cardImage}
          accessibilityLabel={`Imagen de ${servicio.titulo}`}
        />
        <Card.Content>
          <Text variant="headlineSmall" style={[styles.title, { color: onePieceColors.primary }]}>
            <MaterialCommunityIcons name={servicio.icono} size={28} color={onePieceColors.primary} /> {servicio.titulo}
          </Text>
          <Text style={[styles.paragraph, { color: onePieceColors.text }]}>
            {servicio.descripcion}
          </Text>
          <Text variant="titleMedium" style={[styles.detallesTitle, { color: onePieceColors.primary }]}>
            Características del Servicio
          </Text>
          {servicio.detalles.map((detalle, index) => (
            <View key={index} style={styles.detalleItem}>
              <Text style={[styles.detalleText, { color: onePieceColors.text }]}>• {detalle}</Text>
            </View>
          ))}
        </Card.Content>
      </Card>
      <Button
        mode="contained"
        onPress={() => router.back()}
        style={[styles.botonVolver, { backgroundColor: onePieceColors.secondary }]}
        labelStyle={styles.botonVolverTexto}
      >
        Volver a la lista
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
    marginBottom: 15,
  },
  detallesTitle: {
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  detalleItem: {
    marginBottom: 5,
  },
  detalleText: {
    fontSize: 16,
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