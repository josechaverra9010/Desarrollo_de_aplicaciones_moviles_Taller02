import React from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import { Text, Card, Button, useTheme } from 'react-native-paper';
import { useRouter } from 'expo-router';

const onePieceColors = {
  background: '#1a1a2e',
  primary: '#f9a825',
  secondary: '#d32f2f',
  text: '#ffffff',
  cardBackground: '#2e3a59',
  borderColor: '#f9a825',
};

export default function Cuenta() {
  const router = useRouter();
  const { colors } = useTheme();

  const usuario = {
    nombre: 'Jose Imanol Chaverra Bejarano',
    apodo: 'El Almirante del Viento',
    rol: 'Capitán de la Tripulación',
    recompensa: '3,000,000,000 Berries',
    tripulacion: 'Los Piratas del Viento',
    avatar: 'https://i.imgur.com/W2kP2uM.png', // Imagen de un pirata como placeholder
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: onePieceColors.background }]}>
      <Card style={[styles.card, { backgroundColor: onePieceColors.cardBackground, borderColor: onePieceColors.borderColor }]}>
        <Card.Content style={styles.cardContent}>
          <Image
            source={{ uri: usuario.avatar }}
            style={[styles.avatar, { borderColor: onePieceColors.primary }]}
            accessibilityLabel={`Avatar de ${usuario.nombre}`}
          />
          <View style={styles.userInfo}>
            <Text variant="headlineSmall" style={[styles.nombre, { color: onePieceColors.primary }]}>
              {usuario.nombre}
            </Text>
            <Text variant="bodyLarge" style={[styles.apodo, { color: onePieceColors.text }]}>
              "{usuario.apodo}"
            </Text>
          </View>
        </Card.Content>
      </Card>

      <Card style={[styles.card, { backgroundColor: onePieceColors.cardBackground, borderColor: onePieceColors.borderColor }]}>
        <Card.Content>
          <Text variant="titleLarge" style={[styles.sectionTitle, { color: onePieceColors.primary }]}>
            Detalles de la Tripulación
          </Text>
          <View style={styles.infoRow}>
            <Text style={[styles.infoLabel, { color: onePieceColors.text }]}>Rol en el Barco:</Text>
            <Text style={[styles.infoValue, { color: onePieceColors.text }]}>{usuario.rol}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={[styles.infoLabel, { color: onePieceColors.text }]}>Tripulación:</Text>
            <Text style={[styles.infoValue, { color: onePieceColors.text }]}>{usuario.tripulacion}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={[styles.infoLabel, { color: onePieceColors.text }]}>Recompensa:</Text>
            <Text style={[styles.infoValue, { color: onePieceColors.text }]}>{usuario.recompensa}</Text>
          </View>
        </Card.Content>
      </Card>

      <Button
        mode="contained"
        onPress={() => router.back()}
        style={[styles.botonVolver, { backgroundColor: onePieceColors.secondary }]}
        labelStyle={styles.botonVolverTexto}
      >
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
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20,
    borderWidth: 3,
  },
  userInfo: {
    flex: 1,
  },
  nombre: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  apodo: {
    fontStyle: 'italic',
    fontSize: 16,
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