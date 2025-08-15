import { useState } from 'react';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import { Text, Switch, List, useTheme, Button } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const onePieceColors = {
  background: '#1a1a2e',
  primary: '#f9a825',
  secondary: '#d32f2f',
  text: '#ffffff',
  cardBackground: '#2e3a59',
  borderColor: '#f9a825',
};

export default function Configuracion() {
  const router = useRouter();
  const { colors } = useTheme();
  const [notificaciones, setNotificaciones] = useState(true);
  const [modoOscuro, setModoOscuro] = useState(true);

  const toggleNotificaciones = () => setNotificaciones(!notificaciones);
  const toggleModoOscuro = () => setModoOscuro(!modoOscuro);

  const handleCerrarSesion = () => {
    Alert.alert(
      'Cerrar Sesión',
      '¿Estás seguro de que quieres abandonar tu tripulación?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Zarpar (Cerrar Sesión)',
          onPress: () => router.replace('/'),
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: onePieceColors.background }]}>
      <Text style={[styles.header, { color: onePieceColors.primary }]}>
        <MaterialCommunityIcons name="cog" size={32} color={onePieceColors.primary} /> Ajustes de la Tripulación
      </Text>

      <List.Section style={styles.listSection}>
        <List.Subheader style={[styles.subheader, { color: onePieceColors.text }]}>
          <MaterialCommunityIcons name="bell" size={20} color={onePieceColors.text} /> Comunicaciones Piratas
        </List.Subheader>
        <List.Item
          title="Recibir notificaciones de recompensa"
          titleStyle={{ color: onePieceColors.text }}
          description="Alertas sobre nuevas recompensas y actualizaciones de la Marina."
          descriptionStyle={{ color: onePieceColors.text }}
          left={() => <List.Icon color={onePieceColors.primary} icon="bell-ring" />}
          right={() => <Switch value={notificaciones} onValueChange={toggleNotificaciones} color={onePieceColors.secondary} />}
          style={[styles.listItem, { backgroundColor: onePieceColors.cardBackground, borderColor: onePieceColors.borderColor }]}
        />
        <List.Item
          title="Modo Oscuro del LogPose"
          titleStyle={{ color: onePieceColors.text }}
          description="Cambia el tema visual para una mejor visión nocturna en alta mar."
          descriptionStyle={{ color: onePieceColors.text }}
          left={() => <List.Icon color={onePieceColors.primary} icon="weather-night" />}
          right={() => <Switch value={modoOscuro} onValueChange={toggleModoOscuro} color={onePieceColors.secondary} />}
          style={[styles.listItem, { backgroundColor: onePieceColors.cardBackground, borderColor: onePieceColors.borderColor }]}
        />
      </List.Section>

      <List.Section style={styles.listSection}>
        <List.Subheader style={[styles.subheader, { color: onePieceColors.text }]}>
          <MaterialCommunityIcons name="account-group" size={20} color={onePieceColors.text} /> Gestor de Tripulación
        </List.Subheader>
        <List.Item
          title="Ver perfil del Capitán"
          titleStyle={{ color: onePieceColors.text }}
          left={() => <List.Icon color={onePieceColors.primary} icon="account" />}
          onPress={() => router.push('/cuenta')}
          style={[styles.listItem, { backgroundColor: onePieceColors.cardBackground, borderColor: onePieceColors.borderColor }]}
        />
      </List.Section>

      <List.Section style={styles.listSection}>
        <List.Subheader style={[styles.subheader, { color: onePieceColors.text }]}>
          <MaterialCommunityIcons name="shield-lock" size={20} color={onePieceColors.text} /> Seguridad del Barco
        </List.Subheader>
        <List.Item
          title="Configurar seguridad del barco"
          titleStyle={{ color: onePieceColors.text }}
          left={() => <List.Icon color={onePieceColors.primary} icon="lock-reset" />}
          onPress={() => router.push('/seguridad')}
          style={[styles.listItem, { backgroundColor: onePieceColors.cardBackground, borderColor: onePieceColors.borderColor }]}
        />
      </List.Section>

      <List.Section style={styles.listSection}>
        <List.Subheader style={[styles.subheader, { color: onePieceColors.text }]}>
          <MaterialCommunityIcons name="lifebuoy" size={20} color={onePieceColors.text} /> Ayuda al Navegante
        </List.Subheader>
        <List.Item
          title="Centro de ayuda y soporte"
          titleStyle={{ color: onePieceColors.text }}
          left={() => <List.Icon color={onePieceColors.primary} icon="help-circle-outline" />}
          onPress={() => router.push('/ayuda')}
          style={[styles.listItem, { backgroundColor: onePieceColors.cardBackground, borderColor: onePieceColors.borderColor }]}
        />
        <List.Item
          title="Términos y condiciones del Nuevo Mundo"
          titleStyle={{ color: onePieceColors.text }}
          left={() => <List.Icon color={onePieceColors.primary} icon="file-document-outline" />}
          onPress={() => router.push('/terminos')}
          style={[styles.listItem, { backgroundColor: onePieceColors.cardBackground, borderColor: onePieceColors.borderColor }]}
        />
      </List.Section>

      <Button
        mode="contained"
        onPress={handleCerrarSesion}
        style={[styles.botonCerrarSesion, { backgroundColor: onePieceColors.secondary }]}
        labelStyle={styles.botonTexto}
      >
        <MaterialCommunityIcons name="logout" size={20} color="#ffffff" />  Abandonar Tripulación
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
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  listSection: {
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#f9a825',
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#2e3a59',
  },
  subheader: {
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#3b4c70',
    paddingLeft: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f9a825',
  },
  listItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#3b4c70',
  },
  botonCerrarSesion: {
    marginTop: 20,
    width: '80%',
    alignSelf: 'center',
    borderRadius: 25,
    paddingVertical: 8,
  },
  botonTexto: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});