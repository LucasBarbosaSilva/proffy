import { StyleSheet } from 'react-native';
import { setStatusBarBackgroundColor } from 'expo-status-bar';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#8257E5',
        justifyContent: 'center',
        padding: 40
    },

    banner:{
        width: '100%',
        resizeMode: 'contain'
    },

    title: {
        color: '#FFF',
        fontFamily: 'Poppins_400Regular',
        fontSize: 20,
        lineHeight: 30,
        marginTop: 80
    },

    titleBold: {
        fontFamily: 'Poppins_600SemiBold'

    },

    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'space-between',
    },

    button: {
        height: 150,
        width: '48%',
        borderRadius: 8,
        padding: 24,
        justifyContent: 'space-between',
        
        
    },
    
    buttonPrimary: {
        backgroundColor: '#9871f5',
    },

    buttonSecondary: {
        backgroundColor: '#04d361',
    },

    textButton: {
        fontFamily: 'Archivo_700Bold',
        fontSize: 20,
        color: '#FFF'
    },

    totalConnections: {
        color: '#d4c2ff',
        fontFamily: 'Poppins_400Regular',
        marginTop: 40,
        maxWidth: 140,
        fontSize: 12,
        lineHeight: 20

    },
});

export default styles;