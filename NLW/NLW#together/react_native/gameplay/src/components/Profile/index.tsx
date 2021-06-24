import React from 'react';
import { View, Text } from 'react-native';
import { Avatar } from '../Avatar';
import { styles } from './styles';

export function Profile() {
    return (
        
        <View>
            <View style={styles.container}>
            <Avatar urlImage="https://github.com/wayfiding.png"/>

                <View>
                    <View style={styles.user}>
                        <Text style={styles.greeting}> 
                            Olá
                        </Text>

                        <Text style={styles.username}>
                            Alberto
                        </Text>
                    </View>

                    <Text style={styles.message}>
                        Hoje é dia de Vitória

                    </Text>
                </View>
            </View>
        </View>
    )
}