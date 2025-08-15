import { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Alert, ScrollView, Image } from 'react-native';
import { Text, TextInput, Button, useTheme } from 'react-native-paper';
import { useRouter } from 'expo-router';

export default function Registro() {
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

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmarContrasena, setConfirmarContrasena] = useState('');

  const handleRegistro = () => {
    if (!nombre || !email || !contrasena || !confirmarContrasena) {
      Alert.alert('Error de registro', 'Todos los campos son obligatorios.');
      return;
    }
    if (contrasena !== confirmarContrasena) {
      Alert.alert('Error de registro', 'Las contraseñas no coinciden.');
      return;
    }
    Alert.alert('Registro exitoso', `Bienvenido, ${nombre}. Ahora puedes iniciar sesión.`);
    console.log('Usuario registrado:', { nombre, email });
    router.replace('/inicio-sesion');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer} style={[styles.container, { backgroundColor: onePieceColors.background }]}>
      <Image
        source={require('../assets/zoro.png')}
        style={styles.circularImage}
        accessibilityLabel="Imagen de un personaje de One Piece"
      />
      <Text style={[styles.title, { color: onePieceColors.primary }]}>Crear una cuenta</Text>
      <Text style={[styles.subtitle, { color: onePieceColors.text }]}>
        Regístrate para empezar a usar la aplicación
      </Text>

      <TextInput
        label="Nombre completo"
        value={nombre}
        onChangeText={setNombre}
        mode="outlined"
        style={styles.input}
        left={<TextInput.Icon icon="account" color={onePieceColors.primary} />}
        theme={{ colors: { background: onePieceColors.cardBackground, primary: onePieceColors.primary, onSurface: onePieceColors.text } }}
        outlineColor={onePieceColors.borderColor}
        textColor={onePieceColors.text}
        placeholderTextColor={onePieceColors.text}
      />

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
      
      <TextInput
        label="Confirmar contraseña"
        value={confirmarContrasena}
        onChangeText={setConfirmarContrasena}
        mode="outlined"
        secureTextEntry
        style={styles.input}
        left={<TextInput.Icon icon="lock-check" color={onePieceColors.primary} />}
        theme={{ colors: { background: onePieceColors.cardBackground, primary: onePieceColors.primary, onSurface: onePieceColors.text } }}
        outlineColor={onePieceColors.borderColor}
        textColor={onePieceColors.text}
        placeholderTextColor={onePieceColors.text}
      />

      <Button
        mode="contained"
        onPress={handleRegistro}
        style={[styles.botonRegistro, { backgroundColor: onePieceColors.secondary }]}
        labelStyle={styles.botonRegistroTexto}
      >
        Crear cuenta
      </Button>

      <View style={styles.loginContainer}>
        <Text style={{ color: onePieceColors.text }}>¿Ya tienes una cuenta? </Text>
        <TouchableOpacity onPress={() => router.replace('/inicio-sesion')}>
          <Text style={{ color: onePieceColors.primary, fontWeight: 'bold' }}>Inicia sesión</Text>
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
    borderRadius: 75,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#f9a825',
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
  botonRegistro: {
    borderRadius: 25,
    paddingVertical: 8,
    marginTop: 10,
    width: '100%',
  },
  botonRegistroTexto: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
});