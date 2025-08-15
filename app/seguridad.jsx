import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { useRouter } from 'expo-router';

const onePieceColors = {
  background: '#1a1a2e',
  primary: '#f9a825',
  secondary: '#d32f2f',
  text: '#ffffff',
  cardBackground: '#2e3a59',
  borderColor: '#f9a825',
};

export default function Seguridad() {
  const router = useRouter();

  return (
    <ScrollView style={[styles.container, { backgroundColor: onePieceColors.background }]}>
      <Text style={[styles.header, { color: onePieceColors.primary }]}>Seguridad del Barco</Text>
      <Text style={[styles.text, { color: onePieceColors.text }]}>
        Gestiona la seguridad de tu cuenta para proteger tu botín y la tripulación de ataques de la Marina.
      </Text>
      <Button
        mode="contained"
        onPress={() => router.back()}
        style={[styles.botonVolver, { backgroundColor: onePieceColors.secondary }]}>
        Volver a la Configuración
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
    lineHeight: 24,
  },
  botonVolver: {
    marginTop: 20,
    borderRadius: 25,
  },
});