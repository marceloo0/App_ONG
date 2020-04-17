import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';
import { Feather } from '@expo/vector-icons'
import * as MailComposer from 'expo-mail-composer'
 
import styles from './styles';
import logoImg from '../../assets/logo.png'
 
export default function Detalhes() {
  const navigation = useNavigation()
  const route = useRoute()
 
  const caso = route.params.caso

  const message = `Olá ${caso.name}, estou entrando em contato pois gostaria de ajudar no caso "${caso.title}" com o valor de ${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(caso.value)}`
  
  function NavigateToVoltar(){
    navigation.goBack()
  }
 
  function sendMail(){
    MailComposer.composeAsync({
      subject: `Herói do caso: ${caso.title}`,
      recipients: [caso.email],
      body: message,
    })
  }

  function sendWhatsApp(){
    Linking.openURL(`whatsapp://send?phone=55${caso.whatsapp}&text=${message}`)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />

        <TouchableOpacity onPress={NavigateToVoltar}>
          <Feather name='arrow-left' size={28} color='#E02041' />
        </TouchableOpacity>

      </View>

      <View style={styles.casos}>
          
        <Text style={styles.casosProperty} >ONG:</Text>
        <Text style={styles.casosValue}>{caso.name} de {caso.city}/{caso.uf}</Text>
          
        <Text style={[styles.casosProperty, { marginTop: 0 }]} >CASO:</Text>
        <Text style={styles.casosValue}>{caso.title}</Text>
        
        <Text style={styles.casosProperty} >DESCRIÇÃO:</Text>
        <Text style={styles.casosValue} >{caso.description}</Text>

        <Text style={styles.casosProperty} >VALOR:</Text>
        <Text style={[styles.casosValue, { marginBottom: 0 }]}>
          {Intl.NumberFormat('pt-BR', { 
            style: 'currency', 
            currency: 'BRL'
          }).format(caso.value)}
        </Text>

      </View>

      <View style={styles.contatoBox} >
        <Text style={styles.heroText} >Salve o dia!</Text>
        <Text style={styles.heroText} >Seja o herói desse caso.</Text>
        <Text style={styles.contatoText} >Entre em contato:</Text>

        <View style={styles.actions} >
          <TouchableOpacity style={styles.action} onPress={sendWhatsApp} >
            <Text style={styles.actionText}>WhatsApp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action} onPress={sendMail} >
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
}
