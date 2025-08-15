import { View, StyleSheet, Image, Linking, ScrollView } from 'react-native';
import { Text, Card, Button, Chip } from 'react-native-paper';
import { router } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Autor() {
  const onePieceColors = {
    background: '#1a1a2e',
    primary: '#f9a825', // Dorado de One Piece
    secondary: '#d32f2f', // Rojo característico
    text: '#ffffff', // Blanco para el texto
    cardBackground: '#2e3a59', // Azul oscuro para las tarjetas
    borderColor: '#f9a825', // Borde dorado
  };

  const perfil = {
    nombre: 'Jose Imanol Chaverra Bejarano',
    rol: 'Desarrollador de aplicaciones móviles',
    bio: 'Navegante experto en el mar del desarrollo de aplicaciones. Con mi LogPose (código) siempre apunto hacia el One Piece (la solución perfecta). Mi sueño es ser el Rey de los Desarrolladores.',
    contacto: {
      email: 'josechaverra9010@gmail.com',
      telefono: '3204405039',
      github: 'https://github.com/josechaverra9010/taller1.desarrollo_movil',
      linkedin: 'https://www.linkedin.com/in/imanol-chaverra',
    },
    habilidades: ['React Native', 'JavaScript', 'Expo', 'UI/UX', 'Navegación por APIs'],
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: onePieceColors.background }]}>
      <Card style={[styles.card, { backgroundColor: onePieceColors.cardBackground, borderColor: onePieceColors.borderColor }]}>
        <View style={styles.header}>
          <Image
            source={require('../assets/bienvenido.png')}
            style={[styles.avatar, { borderColor: onePieceColors.primary }]}
            accessibilityLabel={`Foto de perfil de ${perfil.nombre}`}
          />
          <View style={styles.headerText}>
            <Text variant="headlineMedium" style={[styles.nombre, { color: onePieceColors.text }]}>
              {perfil.nombre}
            </Text>
            <Text style={[styles.info, { color: onePieceColors.text }]}>{perfil.rol}</Text>
          </View>
        </View>

        <Card.Content>
          <View style={styles.bioContainer}>
            <Text variant="bodyLarge" style={[styles.bioText, { color: onePieceColors.text }]}>
              {perfil.bio}
            </Text>
          </View>

          <View style={styles.section}>
            <Text variant="titleMedium" style={[styles.sectionTitle, { color: onePieceColors.primary }]}>
              <MaterialCommunityIcons name="tools" size={20} color={onePieceColors.primary} /> Habilidades Pirata
            </Text>
            <View style={styles.skillsContainer}>
              {perfil.habilidades.map((skill, index) => (
                <Chip key={index} style={[styles.chip, { backgroundColor: onePieceColors.secondary }]} textStyle={{ color: onePieceColors.text }}>
                  {skill}
                </Chip>
              ))}
            </View>
          </View>

          <View style={styles.section}>
            <Text variant="titleMedium" style={[styles.sectionTitle, { color: onePieceColors.primary }]}>
              <MaterialCommunityIcons name="contacts" size={20} color={onePieceColors.primary} /> Contacto
            </Text>
            <Button
              icon="email"
              mode="text"
              onPress={() => Linking.openURL(`mailto:${perfil.contacto.email}`)}
              style={styles.contactButton}
              labelStyle={[styles.contactButtonText, { color: onePieceColors.text }]}
            >
              {perfil.contacto.email}
            </Button>
            <Button
              icon="phone"
              mode="text"
              onPress={() => Linking.openURL(`tel:${perfil.contacto.telefono}`)}
              style={styles.contactButton}
              labelStyle={[styles.contactButtonText, { color: onePieceColors.text }]}
            >
              {perfil.contacto.telefono}
            </Button>
            <Button
              icon="github"
              mode="text"
              onPress={() => Linking.openURL(perfil.contacto.github)}
              style={styles.contactButton}
              labelStyle={[styles.contactButtonText, { color: onePieceColors.text }]}
            >
              Imanolchaverra
            </Button>
            <Button
              icon="linkedin"
              mode="text"
              onPress={() => Linking.openURL(perfil.contacto.linkedin)}
              style={styles.contactButton}
              labelStyle={[styles.contactButtonText, { color: onePieceColors.text }]}
            >
              Imanol Chaverra
            </Button>
          </View>
        </Card.Content>
      </Card>

      <Button
        mode="contained"
        style={[styles.btnVolver, { backgroundColor: onePieceColors.secondary }]}
        onPress={() => router.back()}
        labelStyle={styles.btnVolverText}
      >
        Volver a la Aventura
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    width: '100%',
    borderRadius: 15,
    borderWidth: 2,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    marginBottom: 25,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f9a825',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
    borderWidth: 2,
  },
  headerText: {
    flex: 1,
  },
  nombre: {
    fontWeight: '700',
    fontSize: 22,
  },
  info: {
    fontSize: 14,
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bioContainer: {
    paddingTop: 10,
  },
  bioText: {
    lineHeight: 22,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  chip: {},
  contactButton: {
    justifyContent: 'flex-start',
    paddingHorizontal: 0,
  },
  contactButtonText: {
    textAlign: 'left',
    fontWeight: '500',
    fontSize: 16,
  },
  btnVolver: {
    width: '80%',
    alignSelf: 'center',
    borderRadius: 25,
    paddingVertical: 8,
  },
  btnVolverText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});