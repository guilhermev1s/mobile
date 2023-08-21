import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Card from './components/Card';

export default function App() {
  return (
    <ScrollView style={{marginTop: 30}}>
    <View style={styles.card}>
      <Text style={styles.titulo}>Hello Word!</Text>
      <Text>Isto é parágrafo.</Text>
      <Text style= {styles.paragrafo}>Isto é parágrafo.</Text>
      <Text>Isto é parágrafo.</Text>
      <StatusBar style="auto" />
    </View>
    
    <Card/>

    <View style={styles.card}>
      <Text style={styles.titulo}>Guilherme</Text>
      <Text>Isto é parágrafo.</Text>
      <StatusBar style="auto" />
    </View>
    <View style={styles.card}>
      <Text style={styles.titulo}>Guilherme</Text>
      <Text>Isto é parágrafo.</Text>
      <Text>Isto é parágrafo.</Text>
      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

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
