import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, Card, useTheme } from 'react-native-paper';
import { useRouter, useLocalSearchParams } from 'expo-router';

const usuarios = [
  { id: '1', nombre: 'Yesid', rol: 'Desarrollador', email: 'yesid@example.com' },
];

export default function PerfilUsuario() {
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

  const usuario = usuarios.find(u => u.id === id);

  if (!usuario) {
    return (
      <View style={[styles.container, styles.center, { backgroundColor: onePieceColors.background }]}>
        <Text style={{ color: onePieceColors.text }}>Usuario no encontrado.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={[styles.container, { backgroundColor: onePieceColors.background }]}>
      <Text style={[styles.title, { color: onePieceColors.primary }]}>Perfil de Usuario</Text>
      
      <Card style={[styles.card, { backgroundColor: onePieceColors.cardBackground, borderColor: onePieceColors.borderColor }]}>
        <Card.Content>
          <Text variant="headlineSmall" style={[styles.name, { color: onePieceColors.text }]}>
            {usuario.nombre}
          </Text>
          <Text variant="bodyLarge" style={[styles.role, { color: onePieceColors.text }]}>
            {usuario.rol}
          </Text>
          <Text variant="bodyMedium" style={[styles.email, { color: onePieceColors.text }]}>
            {usuario.email}
          </Text>
        </Card.Content>
      </Card>

      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Text style={{ color: onePieceColors.primary, fontWeight: 'bold' }}>Volver</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
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
  name: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  role: {
    marginBottom: 4,
  },
  email: {
    fontStyle: 'italic',
  },
  backButton: {
    alignSelf: 'center',
    marginTop: 20,
  },
});