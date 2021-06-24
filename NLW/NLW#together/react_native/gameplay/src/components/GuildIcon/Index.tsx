import React, { ReactNode } from 'react';

import { styles } from './styles';

import { Image } from 'react-native';



export function GuildIcon() {
    const uri = 'https://icons.iconarchive.com/icons/papirus-team/papirus-apps/256/discord-icon.png'
    return(
        <Image
            source={{ uri }} 
            style={styles.image}
            resizeMode="cover"
            
        />
        
    )
}