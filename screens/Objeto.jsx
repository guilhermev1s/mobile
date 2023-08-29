import React from 'react'
import { Text } from 'react-native'
import { Card } from 'react-native-paper'

const Objeto = () => {

    const carro = { marca: 'VW', modelo: 'Fusca', ano: '1978', cor: 'Preto', foto: '' }

    const carros = [
        { marca: 'VW', modelo: 'Fusca', ano: '1978', cor: 'Preto', foto: '' },
        { marca: 'GM', modelo: 'Celta', ano: '2003', cor: 'Preto', foto: '' },
        { marca: 'Fiat', modelo: 'Palio', ano: '1995', cor: 'Azul', foto: '' },
        { marca: 'VW', modelo: 'Gol', ano: '2010', cor: 'Vermelho', foto: '' },
        { marca: 'Ford', modelo: 'Ka', ano: '2020', cor: 'Preta', foto: '' }
    ]


    return (
        <>
            {carros.map(item => (
                <>
                <Card>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Card.Content>
                    <Text variant="titleLarge">{item.marca} - {item.modelo}</Text>
                    <Text variant="bodyMedium">{item.ano}</Text>
                    <Text variant="bodyMedium">{item.cor}</Text>
                </Card.Content>
                </Card>
                </>
            ))}


        </>
    )
}

export default Objeto