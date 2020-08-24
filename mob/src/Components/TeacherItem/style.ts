import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#e6e6f0',
        borderRadius: 8,
        marginBottom: 16,
        overflow: 'hidden',
        
    },

    profile:{
        padding: 24,
        flexDirection: 'row',
        alignItems: 'center'
    },

    avatar: {
        height: 64,
        width: 64,
        borderRadius: 32,
        backgroundColor: '#eee'
    },
    profileInfo: {
        marginLeft: 16
    },
    name: {
        fontFamily: 'Archivo_700Bold',
        color: '#32264d',
        fontSize: 20
    },
    subject: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 12,
        color: '#6a6180',
        marginTop: 4
    },

    bio: {
        fontSize: 14,
        fontFamily: 'Poppins_400Regular',
        color: "#6a6180",
        marginHorizontal: 24,
        lineHeight: 24,
    },

    footer: {
        backgroundColor: '#fafafc',
        padding: 24,
        alignItems: 'center',
        marginTop: 24
    },

    price: {
        color: '#6a6180',
        fontFamily: 'Poppins_400Regular',
        fontSize: 14
    },

    priceValue: {
        color: '#8257e5',
        fontSize: 16,
        fontFamily: 'Archivo_700Bold'
    },

    buttonsContainer:{
        flexDirection: 'row',
        marginTop: 16,
    },

    favoriteButton: {
        backgroundColor: '#8257e5',
        width: 56,
        height: 56,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
    },

    contactButton: {
        backgroundColor: '#04d361',
        flex: 1,
        height: 56,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
    },

    contactButtonText:{
        color: '#FFF',
        marginLeft: 16,
        fontSize: 16,
        fontFamily: 'Archivo_700Bold'
    },
    favorited: {
        backgroundColor: '#e33de3'
    },

});

export default styles;