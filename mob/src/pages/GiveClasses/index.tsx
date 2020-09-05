import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import styles from '../GiveClasses/styles';

import giveClassesBgImage from '../../assets/images/give-classes-background.png';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
function GiveClasses(){
    const { goBack } = useNavigation();

    function handleGoBack(){
        goBack();
    }
    return(
        

        <View style={styles.container}>
            <ImageBackground resizeMode= "contain" source={giveClassesBgImage} style={styles.content}>
                <Text style={styles.title}>Quer ser um Proffy? </Text>
                <Text style={styles.description} >Para isso você primeiro precisa se cadastrar como professor na nossa plataforma web. </Text>
            </ImageBackground>
            <RectButton onPress={handleGoBack} style={styles.okButton} > 
                <Text style={styles.okButtonText}>Tudo Bem!</Text>
            </RectButton>
        </View>
    );
}

export default GiveClasses;