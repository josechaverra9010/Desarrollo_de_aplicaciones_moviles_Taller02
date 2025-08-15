import { View, StyleSheet, Image, ScrollView } from 'react-native';
import { Text, useTheme, Card } from 'react-native-paper';
import usuarios from '../assets/usuarios.json';
import { useLocalSearchParams } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function DetalleUsuario() {
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
  
  const usuario = usuarios.find(u => u.id.toString() === id);

  if (!usuario) {
    return (
      <View style={[styles.container, styles.center, { backgroundColor: onePieceColors.background }]}>
        <Text style={{ color: onePieceColors.text }}>Usuario no encontrado.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={[styles.container, { backgroundColor: onePieceColors.background }]}>
     <Card style={[styles.card, { backgroundColor: onePieceColors.cardBackground, borderColor: onePieceColors.borderColor }]}>
        <Card.Content style={styles.cardContent}>
          <Image
            source={require('../assets/usuario.png')}
            style={[styles.avatar, { borderColor: onePieceColors.primary }]}
            accessibilityLabel={`Avatar de ${usuario.nombre}`}
          />
          <View style={styles.userInfo}>
            <Text variant="headlineSmall" style={[styles.nombre, { color: onePieceColors.text }]}>
              {usuario.nombre}
            </Text>
            <Text variant="bodyLarge" style={[styles.rol, { color: onePieceColors.text }]}>
              {usuario.rol}
            </Text>
            <Text variant="bodyMedium" style={[styles.email, { color: onePieceColors.text }]}>
              {usuario.email}
            </Text>
          </View>
        </Card.Content>
      </Card>

      <Card style={[styles.card, { backgroundColor: onePieceColors.cardBackground, borderColor: onePieceColors.borderColor, marginTop: 20 }]}>
        <Card.Content>
          <Text variant="titleLarge" style={[styles.sectionTitle, { color: onePieceColors.primary }]}>
            Información Pirata
          </Text>
          <View style={styles.infoRow}>
            <Text style={[styles.infoLabel, { color: onePieceColors.text }]}>Tripulación:</Text>
            <Text style={[styles.infoValue, { color: onePieceColors.text }]}>{usuario.direccion}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={[styles.infoLabel, { color: onePieceColors.text }]}>Codigo secreto:</Text>
            <Text style={[styles.infoValue, { color: onePieceColors.text }]}>{usuario.clave}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={[styles.infoLabel, { color: onePieceColors.text }]}>Rango:</Text>
            <Text style={[styles.infoValue, { color: onePieceColors.text }]}>{usuario.rol}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={[styles.infoLabel, { color: onePieceColors.text }]}>Haki:</Text>
            <Text style={[styles.infoValue, { color: onePieceColors.text }]}>{usuario.email}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={[styles.infoLabel, { color: onePieceColors.text }]}>Apodo:</Text>
            <Text style={[styles.infoValue, { color: onePieceColors.text }]}>{usuario.nombre}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={[styles.infoLabel, { color: onePieceColors.text }]}>Codigo de comunicacion:</Text>
            <Text style={[styles.infoValue, { color: onePieceColors.text }]}>{usuario.telefono}</Text>
          </View>
        </Card.Content>
      </Card>

      
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    marginBottom: 10,
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
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
    borderWidth: 2,
  },
  userInfo: {
    flex: 1,
  },
  nombre: {
    fontWeight: 'bold',
  },
  rol: {
    marginBottom: 4,
  },
  email: {
    fontStyle: 'italic',
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f9a825',
    paddingBottom: 5,
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  infoLabel: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  infoValue: {
    flexShrink: 1,
  },
  botonVolver: {
    alignSelf: 'center',
    marginTop: 20,
    width: '80%',
    borderRadius: 25,
    paddingVertical: 8,
  },
  botonVolverTexto: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});