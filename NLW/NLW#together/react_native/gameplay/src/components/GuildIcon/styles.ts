import { StyleSheet } from 'react-native';
import { theme } from '../../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        height:66,
        width:62,
        borderRadius:8,
        backgroundColor:theme.colors.discord,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'

    },
    image: {
        height:66,
        width:62,
        
    }
});