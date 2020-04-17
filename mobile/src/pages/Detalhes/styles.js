import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'
 
export default StyleSheet.create({
  container: {
    flex:1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },
 
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  casos: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 16,
    marginTop: 48,
  },

  casosTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  casosProperty: {
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold',
  },

  casosValue: {
    marginTop: 4,
    fontSize: 15,
    marginBottom: 20,
    color: '#737380'
  },

  contatoBox: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
  },

  heroText: {
    fontSize: 20,
    color: '#13131a',
    fontWeight: 'bold',
    lineHeight: 30,
  },

  contatoText: {
    fontSize: 16,
    marginBottom: 24,
    color: '#737380'
  },

  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  action: {
    height: 50,
    width: '48%',
    backgroundColor: '#E02041',
    
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },

  actionText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 15
  },
})
