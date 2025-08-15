import { View, Image, StyleSheet } from 'react-native';
import { Text, Button, useTheme } from 'react-native-paper';
import { useRouter } from 'expo-router';

export default function PantallaPrincipal() {
  const router = useRouter();
  const { colors } = useTheme();

  const onePieceColors = {
    background: '#1a1a2e',
    primary: '#f9a825',
    secondary: '#d32f2f',
    text: '#ffffff',
  };

  return (
    <View style={[styles.container, { backgroundColor: onePieceColors.background }]}>
      <Image
        source={require('../assets/1.png')}
        style={styles.logo}
        accessibilityLabel="Monkey D. Luffy"
      />
      <Text style={[styles.title, { color: onePieceColors.primary }]}>¡Bienvenido a la Gran Aventura!</Text>
      <Text style={[styles.subtitle, { color: onePieceColors.text }]}>
        Tu tripulación te espera. Prepárate para zarpar y encontrar el One Piece. El Nuevo Mundo es vasto y peligroso, ¡solo los valientes se atreven a explorarlo!
      </Text>
      <Button
        mode="contained"
        onPress={() => router.replace('/inicio-sesion')}
        style={[styles.boton, { backgroundColor: onePieceColors.secondary }]}
        labelStyle={styles.botonTexto}
      >
        Empezar la Aventura
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 30,
    resizeMode: 'contain',
    borderRadius: 100,
    borderWidth: 3,
    borderColor: '#f9a825',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 24,
  },
  boton: {
    width: '80%',
    borderRadius: 25,
    paddingVertical: 10,
  },
  botonTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});