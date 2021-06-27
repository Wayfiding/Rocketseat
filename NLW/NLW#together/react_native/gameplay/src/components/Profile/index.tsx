import React from 'react';
import { Alert } from 'react-native';
import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useAuth } from '../../hooks/auth';
import { Avatar } from '../Avatar';
import { styles } from './styles';




export function Profile() {

    function handleSignOut(){
        Alert.alert('Logout','Deseja sair do GamePlay',[
            {
                text: 'Não',
                style: 'cancel'
            },
            {
                text:'sim',
                onPress:() => signOut()
            }
        ])
    }

    const { user,signOut } = useAuth();

    return (
        
        <View>
            <View style={styles.container}>
                

            <RectButton onPress={handleSignOut}>
            <Avatar urlImage={user.avatar}/>
            </RectButton>
                <View>
                    <View style={styles.user}>
                        <Text style={styles.greeting}> 
                            Olá
                        </Text>

                        <Text style={styles.username}>
                            {user.firstName}
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