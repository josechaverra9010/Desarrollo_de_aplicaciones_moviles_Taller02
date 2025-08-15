import { ScrollView, StyleSheet } from 'react-native';
import { List, Text, useTheme } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const onePieceColors = {
  background: '#1a1a2e',
  primary: '#f9a825', // Dorado de One Piece
  text: '#ffffff', // Blanco para el texto
  cardBackground: '#2e3a59', // Azul oscuro para las tarjetas
};

export default function Index() {
  const router = useRouter();
  const { colors } = useTheme();

  return (
    <ScrollView style={[styles.container, { backgroundColor: onePieceColors.background }]}>
      <Text style={[styles.header, { color: onePieceColors.primary }]}>
        <MaterialCommunityIcons name="skull-crossbones" size={32} color={onePieceColors.primary} /> Grand Line App
      </Text>
      
      <List.Section style={styles.listSection}>
        <List.Subheader style={[styles.subheader, { color: onePieceColors.text }]}>Mapa de Navegación</List.Subheader>
        
        {/* Autor */}
        <List.Item
          title="Acerca del Capitán (autor)"
          titleStyle={{ color: onePieceColors.text }}
          description="El creador del mapa."
          descriptionStyle={{ color: onePieceColors.text }}
          left={() => <List.Icon color={onePieceColors.primary} icon="account-tie" />}
          onPress={() => router.push('/autor')}
          style={[styles.listItem, { backgroundColor: onePieceColors.cardBackground }]}
        />
        
        {/* Inicio de Sesión */}
        <List.Item
          title="Entrada a la Isla (inicio-sesion)"
          titleStyle={{ color: onePieceColors.text }}
          description="Accede a la app como un pirata veterano."
          descriptionStyle={{ color: onePieceColors.text }}
          left={() => <List.Icon color={onePieceColors.primary} icon="login" />}
          onPress={() => router.push('/inicio-sesion')}
          style={[styles.listItem, { backgroundColor: onePieceColors.cardBackground }]}
        />

        {/* Registro */}
        <List.Item
          title="Unirse a la Tripulación (formulario-registro)"
          titleStyle={{ color: onePieceColors.text }}
          description="Únete a la gran era pirata."
          descriptionStyle={{ color: onePieceColors.text }}
          left={() => <List.Icon color={onePieceColors.primary} icon="account-plus" />}
          onPress={() => router.push('/formulario-registro')}
          style={[styles.listItem, { backgroundColor: onePieceColors.cardBackground }]}
        />
        
        {/* Pantalla Principal */}
        <List.Item
          title="Pantalla Principal (pantalla-principal)"
          titleStyle={{ color: onePieceColors.text }}
          description="La entrada al Nuevo Mundo."
          descriptionStyle={{ color: onePieceColors.text }}
          left={() => <List.Icon color={onePieceColors.primary} icon="home" />}
          onPress={() => router.push('/pantalla-principal')}
          style={[styles.listItem, { backgroundColor: onePieceColors.cardBackground }]}
        />
        
        {/* Home */}
        <List.Item
          title="Tablero del Barco (home)"
          titleStyle={{ color: onePieceColors.text }}
          description="Tu base de operaciones."
          descriptionStyle={{ color: onePieceColors.text }}
          left={() => <List.Icon color={onePieceColors.primary} icon="view-dashboard" />}
          onPress={() => router.push('/home')}
          style={[styles.listItem, { backgroundColor: onePieceColors.cardBackground }]}
        />
        
        {/* Lista de Elementos */}
        <List.Item
          title="Mi Tripulación (lista-elementos)"
          titleStyle={{ color: onePieceColors.text }}
          description="Conoce a tus nakamas."
          descriptionStyle={{ color: onePieceColors.text }}
          left={() => <List.Icon color={onePieceColors.primary} icon="account-group" />}
          onPress={() => router.push('/lista-elementos')}
          style={[styles.listItem, { backgroundColor: onePieceColors.cardBackground }]}
        />
        
        {/* Lista de Servicios */}
        <List.Item
          title="Servicios Pirata (lista-servicios)"
          titleStyle={{ color: onePieceColors.text }}
          description="Herramientas útiles para tus aventuras."
          descriptionStyle={{ color: onePieceColors.text }}
          left={() => <List.Icon color={onePieceColors.primary} icon="briefcase" />}
          onPress={() => router.push('/lista-servicios')}
          style={[styles.listItem, { backgroundColor: onePieceColors.cardBackground }]}
        />
        
        {/* Lista de Usuarios */}
        <List.Item
          title="Lista de Navegantes (lista-usuarios)"
          titleStyle={{ color: onePieceColors.text }}
          description="Encuentra nuevos tripulantes."
          descriptionStyle={{ color: onePieceColors.text }}
          left={() => <List.Icon color={onePieceColors.primary} icon="account-group" />}
          onPress={() => router.push('/lista-usuarios')}
          style={[styles.listItem, { backgroundColor: onePieceColors.cardBackground }]}
        />
        
        {/* Configuración */}
        <List.Item
          title="Ajustes del Barco (configuracion)"
          titleStyle={{ color: onePieceColors.text }}
          description="Configura el rumbo de tu viaje."
          descriptionStyle={{ color: onePieceColors.text }}
          left={() => <List.Icon color={onePieceColors.primary} icon="cog" />}
          onPress={() => router.push('/configuracion')}
          style={[styles.listItem, { backgroundColor: onePieceColors.cardBackground }]}
        />
      </List.Section>
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
  listSection: {
    backgroundColor: '#2e3a59',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#f9a825',
  },
  subheader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    backgroundColor: '#3b4c70',
    borderBottomWidth: 1,
    borderBottomColor: '#f9a825',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  listItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#3b4c70',
  },
});