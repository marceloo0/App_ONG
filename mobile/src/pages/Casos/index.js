import React, { useState ,useEffect } from 'react';
import { useNavigation } from '@react-navigation/native'
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'
 
import api from '../../services/api'
 
import styles from './styles';
import logoImg from '../../assets/logo.png'
 
export default function Casos() {
  const [casos, setCasos] = useState([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
 
  const navigation = useNavigation()

  function NavigateToDetalhes(caso){
    navigation.navigate('Detalhes', { caso })
  }
 
  async function loadCasos() {
    if(loading) {
      return;
    }     

    if (total > 0 && casos.length === total) {
      return;
    }

    setLoading(true)

    const res = await api.get('casos', { params: { page }})

    setCasos([...casos, ...res.data])
    setTotal(res.headers['x-total-count'])
    setPage(page + 1)
    setLoading(false)
  }

  useEffect(() => {
    loadCasos()
  },[])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>{total} casos</Text>.
        </Text>
      </View>

      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>

      <FlatList 
        data={casos}
        style={styles.casosList}
        keyExtractor={caso => String(caso.id)}
        //showsVerticalScrollIndicator={false}
        onEndReached={loadCasos}
        onEndReachedThreshold={0.2}
        renderItem={({ item: caso }) => (
          <View style={styles.casos}>
            <Text style={styles.casosProperty}>ONG:</Text>
            <Text style={styles.casosValue}>{caso.name}</Text>

            <Text style={styles.casosProperty}>Caso:</Text>
            <Text style={styles.casosValue}>{caso.title}</Text>

            <Text style={styles.casosProperty}>Valor:</Text>
            <Text style={styles.casosValue}>
              {Intl.NumberFormat('pt-BR', { 
                style: 'currency', 
                currency: 'BRL'
              }).format(caso.value)}
            </Text>

            <TouchableOpacity 
                style={styles.detalhesButton}
                onPress={() => NavigateToDetalhes(caso)}
              >
              <Text style={styles.detalhesButtonText} >Ver mais detalhes</Text>
              <Feather name='arrow-right' size={16} color='#E02041' />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
