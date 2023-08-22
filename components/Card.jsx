import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Card = (props) => {

const nome = 'Guilherme'

  return (
  <>
   <View style={styles.card}>
      <Text style={styles.titulo}>{props.titulo}</Text>
      {props.children}
    </View>
  </>
  )
}

export default Card

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    card: {
      borderWidth: 2,
      borderStyle: 'solid',
      borderColor: 'blue',
      marginBottom: 20,
    },
    titulo: {
      color: 'green',
      fontSize: 30,
      padding: 30,
      marginBottom: 20,
      borderBottomWidth: 2,
      borderBottomStyle: 'solid',
      borderBottomColor: 'blue',
      textAlign: 'center',
      backgroundColor: 'red',
    },
    paragrafo: {
      fontSize: 'xx-small'
    }
});