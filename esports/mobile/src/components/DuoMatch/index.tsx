import { useState } from 'react';
import { View, Modal, ModalProps, Text, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons'
import { Activity, CheckCircle } from 'phosphor-react-native'
import * as Clipboard from 'expo-clipboard';

import { styles } from './styles';
import { THEME } from '../../theme';
import { Heading } from '../Heading';

interface Props extends ModalProps {
  discord: string;
  onClose: () => void
}

export function DuoMatch({ discord, onClose, ...rest }: Props) {

  const [isCopping, setIsCopping] = useState(false)

  async function handleCopyDiscord() {
    setIsCopping(true)
    await Clipboard.setStringAsync(discord)
    Alert.alert('Discord copiado!', 'Usuário copiado para a área de transferência.')
    setIsCopping(false)
  }

  return (
    <Modal
      animationType='fade'
      transparent
      statusBarTranslucent
      {...rest}>
      <View style={styles.container}>

        <View style={styles.content}>

          <TouchableOpacity
            style={styles.closeIcon}
            onPress={onClose}>
            <MaterialIcons
              name='close'
              size={20}
              color={THEME.COLORS.CAPTION_500} />
          </TouchableOpacity>

          <CheckCircle
            size={64}
            color={THEME.COLORS.SUCCESS}
            weight="bold"
          />

          <Heading
            title={"Let's Play!"}
            subtitle={'Agora é só começar a jogar!'} />

          <Text style={styles.label}>
            Adcione no Discord
          </Text>

          <TouchableOpacity 
            style={ styles.discordButton }
            onPress={ handleCopyDiscord }
            disabled={isCopping}>
            <Text style={styles.discord}>
              {isCopping ? <ActivityIndicator/> : discord}
            </Text>
          </TouchableOpacity>

        </View>
      </View>
    </Modal>
  );
}