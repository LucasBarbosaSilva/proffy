import React, { useState } from 'react';
import { View, Image, Text, Linking, AsyncStorage } from 'react-native';


import { RectButton } from 'react-native-gesture-handler';

import  unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import  heartOutLineIcon from '../../assets/images/icons/heart-outline.png';
import  whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './style'
import StudyTabs from '../../routes/StudyTabs';
import api from '../../services/api';

export interface Teacher {
    id: number,
    name: string,
    whatsapp: string,
    avatar: string,
    coast: number,
    subject: string,
    bio: string
}

interface TeacherItemProps {
    teacher: Teacher
    favorited: boolean
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favorited }) => {
    
    const [isFavorite, setIsFavorite] = useState(favorited);

    function handleLinkToWhatsapp(){
        api.post('/connections', {
            user_id: teacher.id
        })

        Linking.openURL(`whatsapp://send?text=Oi Proffy!&phone=${teacher.whatsapp}`);
    }

    async function handleToggleFavorite(){
        const favorites = await AsyncStorage.getItem('favorites');

        let favoritesArray = [];

        if(favorites){
            favoritesArray = JSON.parse(favorites);
        }

        if(isFavorite){
            //Remover dos favoritos
            const favoritesIndex = favoritesArray.map((teacherItem: Teacher) => {
                return teacherItem.id === teacher.id;
            });
            favoritesArray.splice(favoritesIndex, 1);

            setIsFavorite(false)
        }else{
            //Adicionar aos favoritos
            favoritesArray.push(teacher);

            setIsFavorite(true)
        }
        
        await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray))
    }

    return(
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{uri: teacher.avatar }}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name} >{teacher.name}</Text>
                    <Text style={styles.subject}>{teacher.subject}</Text>
                </View>
            </View>
            <Text style={styles.bio}>
                {teacher.bio}
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço por hora {'   '}
                    <Text style={styles.priceValue}>R$ {teacher.coast}</Text> 
                </Text>
                <View style={styles.buttonsContainer}>
                    <RectButton 
                        onPress={handleToggleFavorite}
                        style={[
                            styles.favoriteButton, 
                            isFavorite ? styles.favorited : {}]}>
                            {isFavorite? <Image source={unfavoriteIcon} />: <Image source={heartOutLineIcon}  /> }
                    </RectButton>
                    <RectButton onPress={handleLinkToWhatsapp} style={styles.contactButton}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    );
}

export default TeacherItem;