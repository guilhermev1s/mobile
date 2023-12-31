import React from 'react'
import { Button, Text } from 'react-native'
import Card from '../components/Card'

const Pagina1 = ({navigation}) => {


    return (
        <>

            <Button title='Página 2' onPress={()=> navigation.navigate('pagina2')} />
            <Button title='Página 3' onPress={()=> navigation.navigate('pagina3')} />

            <Card titulo="Sem Conteúdo" />

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
        </>
    )
}

export default Pagina1