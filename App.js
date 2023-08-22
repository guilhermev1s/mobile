import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import Card from './components/Card';
import Botoes from './components/Botoes';

export default function App() {
  return (
    <ScrollView style={{ margin: 10 }}>

      <Botoes />

      <Card titulo="Sem Conteúdo"/>

      <Card titulo="Mobile">
      <Text>React Native</Text>
      </Card>

      <Card titulo="Principal" nome="Guilherme">
        <Text>parágrafo 1</Text>
        <Text>parágrafo 2</Text>
        <Text>parágrafo 3</Text>
        <Button title='Detalhes' />
      </Card>

      <Card titulo="Vasco Cheirinho">

      </Card>

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
