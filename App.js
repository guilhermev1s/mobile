import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import Card from './components/Card';
import Botoes from './components/Botoes';
import Pagina1 from './screens/Pagina1';
import Pagina2 from './screens/Pagina2';
import Pagina3 from './screens/Pagina3';

export default function App() {
  return (
    <ScrollView style={{ margin: 10 }}>

     <Pagina3 />

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
