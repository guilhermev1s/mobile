import React from 'react'
import { Avatar, Card } from 'react-native-paper'

const Pagina3 = () => {
    const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

    return (
        <>
            <Card style={{marginBottom: 10}}>
                <Card.Title title="Guilherme" subtitle="Card Subtitle" left={LeftContent} />
            </Card>
            <Card style={{marginBottom: 10}}>
                <Card.Title title="Maria Eduarda" subtitle="Card Subtitle" left={LeftContent} />
            </Card>
            <Card style={{marginBottom: 10}}>
                <Card.Title title="Adriana" subtitle="Card Subtitle" left={LeftContent} />
            </Card>
            <Card style={{marginBottom: 10}}>
                <Card.Title title="Nunes" subtitle="Card Subtitle" left={LeftContent} />
            </Card>


        </>
    )
}

export default Pagina3