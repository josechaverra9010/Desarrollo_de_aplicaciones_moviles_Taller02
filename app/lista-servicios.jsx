import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, useTheme } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

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
    descripcion: 'Utiliza nuestro avanzado LogPose para encontrar las islas más remotas y los tesoros escondidos del Nuevo Mundo.',
    icono: 'compass',
  },
  {
    id: '2',
    titulo: 'Identificación de Frutas del Diablo',
    descripcion: 'Analiza y conoce las habilidades de las misteriosas Frutas del Diablo que encuentres en tus viajes.',
    icono: 'fruit-pineapple',
  },
  {
    id: '3',
    titulo: 'Tablero de Recompensas',
    descripcion: 'Consulta las últimas recompensas de los piratas más buscados en los cuatro mares y el Grand Line.',
    icono: 'wanted-poster',
  },
  {
    id: '4',
    titulo: 'Reparaciones de Barcos',
    descripcion: 'Servicio de mantenimiento y reparación para tu barco, desde el Merry hasta el Sunny, por carpinteros de primera.',
    icono: 'ship-wheel',
  },
];

export default function ListaServicios() {
  const router = useRouter();
  const { colors } = useTheme();

  return (
    <ScrollView style={[styles.container, { backgroundColor: onePieceColors.background }]}>
      <Text style={[styles.header, { color: onePieceColors.text }]}>Servicios del Gremio Pirata</Text>
      {serviciosPirata.map((servicio, index) => (
        <Card
          key={index}
          style={[styles.card, { backgroundColor: onePieceColors.cardBackground, borderColor: onePieceColors.borderColor }]}
          onPress={() => router.push({ pathname: '/detalle-servicio', params: { id: servicio.id } })}
        >
          <Card.Content style={styles.cardContent}>
            <MaterialCommunityIcons name={servicio.icono} size={40} color={onePieceColors.primary} />
            <View style={styles.textContainer}>
              <Text variant="titleLarge" style={[styles.cardTitle, { color: onePieceColors.text }]}>
                {servicio.titulo}
              </Text>
              <Text variant="bodyMedium" style={[styles.cardDescription, { color: onePieceColors.text }]}>
                {servicio.descripcion}
              </Text>
            </View>
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
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
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    marginLeft: 16,
    flex: 1,
  },
  cardTitle: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardDescription: {
    lineHeight: 20,
  },
});