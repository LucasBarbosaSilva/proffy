import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f7'
    },
    teacherView:{
        marginTop: -40,
        
    },
    searchForm: {
        marginBottom: 8
    },
    label: {
        color: '#d4c2ff',
        fontFamily: 'Poppins_400Regular',
    },
    inputGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inputBlock: {
        width: '48%'
    },
    input: {
        height: 54,
        backgroundColor: '#FFF',
        marginTop: 8,
        borderRadius: 8,
        marginBottom: 16,
        justifyContent: 'center',
        paddingHorizontal: 16,
    }

});

export default Styles;