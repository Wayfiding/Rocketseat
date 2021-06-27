import React from 'react';
import BannerImg  from '../../assets/banner.png'
import  { FlatList, ImageBackground } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { View, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { theme } from '../../../global/styles/theme';

import { styles } from './styles';
import { ListHeader } from '../../components/ListHeader';
import { Member } from '../../components/Member';
import { ListDivider } from '../../components/ListDivider';
import { Button } from 'react-native';
import { ButtonIcon } from '../../components/ButtonIcon';



export function AppointmentDetails() {
    const members = [
        {
            id: '1', 
            username: 'Alberto',
            avatar_url: 'https://github.com/wayfiding.png',
            status: 'online'
        },
        {
            id: '2', 
            username: 'Rodrigo',
            avatar_url: 'https://github.com/wayfiding.png',
            status: 'off-line'
        }
    ]

    return (
        <Background >
            <Header
                title= "Detalhes"
                action={
                    <BorderlessButton>
                        <Fontisto
                        name="share"
                        size={24}
                        color={theme.colors.primary}
                        />
                    </BorderlessButton>
                }
            />
            
            <ImageBackground 
            source={BannerImg}
            style={styles.banner}
            
            >
            <View style={styles.bannerContent}>
            <Text style={styles.title}>
                Lendários
            </Text>

            <Text style={styles.subtitle}>
            É hoje que vamos chegar ao challenger sem perder uma partida da md10
            </Text>
            </View>    
            </ImageBackground>
            <ListHeader
            title="Jogadores"
            subtitle="Total 3"/>

            <FlatList
            data={members}
            keyExtractor={item => item.id}
            renderItem={( {item}) => (
                <Member data={item}/>
            )}
            ItemSeparatorComponent={ () => <ListDivider isCentered/> }
            style={styles.members}
            />

            <View
            style={styles.footer}>
             <ButtonIcon
             title="Entrar na partida"/>
            </View>    
                   
            

            
        </Background>
    );
}