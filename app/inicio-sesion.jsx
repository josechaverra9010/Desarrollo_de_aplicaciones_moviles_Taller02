import React from 'react';
import { View, StyleSheet, TouchableOpacity, Alert, Image, ScrollView } from 'react-native';
import { TextInput, Button, Text, useTheme } from 'react-native-paper';
import { useRouter } from 'expo-router';
import usuarios from '../assets/usuarios.json';

export default function InicioSesion() {
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

  const [email, setEmail] = React.useState('');
  const [contrasena, setContrasena] = React.useState('');

  const handleLogin = () => {
    const usuario = usuarios.find(u => u.email === email && u.contrasena === contrasena);
    if (usuario) {
      Alert.alert('Inicio de sesión exitoso', `Bienvenido, ${usuario.nombre}`);
      router.replace('/home');
    } else {
      Alert.alert('Error de inicio de sesión', 'Correo electrónico o contraseña incorrectos');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer} style={[styles.container, { backgroundColor: onePieceColors.background }]}>
      <Image
        source={require('../assets/login.png')}
        style={styles.circularImage}
        accessibilityLabel="Imagen de un personaje de One Piece"
      />
      <Text style={[styles.title, { color: onePieceColors.primary }]}>¡Bienvenido de vuelta, Pirata!</Text>
      <Text style={[styles.subtitle, { color: onePieceColors.text }]}>
        Ingresa a tu tripulación
      </Text>

      <TextInput
        label="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        mode="outlined"
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
        left={<TextInput.Icon icon="email" color={onePieceColors.primary} />}
        theme={{ colors: { background: onePieceColors.cardBackground, primary: onePieceColors.primary, onSurface: onePieceColors.text } }}
        outlineColor={onePieceColors.borderColor}
        textColor={onePieceColors.text}
        placeholderTextColor={onePieceColors.text}
      />

      <TextInput
        label="Contraseña"
        value={contrasena}
        onChangeText={setContrasena}
        mode="outlined"
        secureTextEntry
        style={styles.input}
        left={<TextInput.Icon icon="lock" color={onePieceColors.primary} />}
        theme={{ colors: { background: onePieceColors.cardBackground, primary: onePieceColors.primary, onSurface: onePieceColors.text } }}
        outlineColor={onePieceColors.borderColor}
        textColor={onePieceColors.text}
        placeholderTextColor={onePieceColors.text}
      />

      <TouchableOpacity onPress={() => console.log('Contraseña olvidada')}>
        <Text style={[styles.forgotPassword, { color: onePieceColors.primary }]}>
          ¿Olvidaste tu contraseña?
        </Text>
      </TouchableOpacity>

      <Button
        mode="contained"
        onPress={handleLogin}
        style={[styles.botonLogin, { backgroundColor: onePieceColors.secondary }]}
        labelStyle={styles.botonLoginTexto}
      >
        Navegar
      </Button>

      <View style={styles.registroContainer}>
        <Text style={{ color: onePieceColors.text }}>¿Aún no tienes un LogPose? </Text>
        <TouchableOpacity onPress={() => router.replace('/formulario-registro')}>
          <Text style={{ color: onePieceColors.primary, fontWeight: 'bold' }}>Únete a la tripulación</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circularImage: {
    width: 150,
    height: 150,
    borderRadius: 75, // Esto hace la imagen circular
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#f9a825', // Borde dorado
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 40,
  },
  input: {
    width: '100%',
    marginBottom: 15,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  botonLogin: {
    width: '100%',
    borderRadius: 25,
    paddingVertical: 8,
  },
  botonLoginTexto: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  registroContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
});