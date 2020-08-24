import React from 'react';
import { View, Image, Text } from 'react-native';


import { RectButton } from 'react-native-gesture-handler';

import  unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import  heartOutLineIcon from '../../assets/images/icons/heart-outline.png';
import  whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './style'
import StudyTabs from '../../../routes/StudyTabs';

function TeacherItem (){
    return(
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{uri: 'https://github.com/LucasBarbosaSilva.png'}}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name} >Lucas Barbosa</Text>
                    <Text style={styles.subject}>Química</Text>
                </View>
            </View>
            <Text style={styles.bio}>
                Desenvolvedor júnior. Focado nas tecnologias React, React Native e JS.
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço por hora {'   '}
                    <Text style={styles.priceValue}>R$ 20,00</Text> 
                </Text>
                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton, styles.favorited]}>
                        {/* <Image source={heartOutLineIcon} /> */}
                        <Image source={unfavoriteIcon} />
                    </RectButton>
                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    );
}

export default TeacherItem;