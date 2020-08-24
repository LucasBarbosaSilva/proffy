import React, {useState, useCallback } from 'react';
import { View, ScrollView, AsyncStorage } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import styles from './styles';
import PageHeader from '../../Components/PageHeader';
import TeacherItem, { Teacher } from '../../Components/TeacherItem';


function Favorites(){
    
    const [favorites, setFavorites] = useState([]);

    async function clearAsync(){
        await AsyncStorage.clear();
    }
    function loadFavorites(){
        AsyncStorage.getItem('favorites').then(response => {
            if (response) {
              const favoritedTeachers = JSON.parse(response);
              console.log(favoritedTeachers)
      
              setFavorites(favoritedTeachers);
            }
          })
    }

    useFocusEffect(useCallback(() => {
            loadFavorites();
          }, [])
    )

    return (
        
        <View style={styles.container}>
            <PageHeader title="Meus Proffys Favoritos" />
            <ScrollView
                style={styles.teacherView}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16
                }}
            >
                
                {favorites.map((teacher: Teacher) => {
                    return (
                        <TeacherItem
                            key={teacher.id}
                            teacher={teacher}
                            favorited
                        />
                    )
                })}
            </ScrollView>
        </View>
    );
}

export default Favorites;