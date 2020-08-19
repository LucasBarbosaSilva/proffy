import React from 'react';
import { View, Image, Text } from 'react-native';

import backImg from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png'

import { BorderlessButton } from 'react-native-gesture-handler';

interface PageHeaderProps{
    title: string
}

import styles from './style';
import { useNavigation } from '@react-navigation/native';
const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
    const {navigate} = useNavigation();
    
    function handleGoBack(){
        navigate('Landing');
    }

    return(
        <View style={styles.container}>
            <View style={styles.topBar}>
                <BorderlessButton onPress={handleGoBack}>
                    <Image source={backImg} resizeMode='contain'/>
                </BorderlessButton>
                <Image source={logoImg} resizeMode='contain'/>
            </View>

            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

export default PageHeader;