import React, { useState, useEffect, useCallback } from 'react';
import { View, ScrollView, Text, TextInput, AsyncStorage } from 'react-native';

import api from '../../services/api';

import styles from './styles';

import PageHeader from '../../Components/PageHeader';
import TeacherItem, { Teacher } from '../../Components/TeacherItem';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'
import { useFocusEffect } from '@react-navigation/native';



function TeacherList(){
    const [isFiltersVisible, setIsFiltersVisible ] = useState(false);
    
    const [teachers, setTeachers] = useState([]);
    const [favorites, setFavorites] =useState<number[]>([]);

    const [subject , setSubject] = useState('');
    const [week_day , setWeek_day] = useState('');
    const [time , setTime] = useState('');
    
    function loadFavorites(){
        AsyncStorage.getItem('favorites').then(response => {
            if (response){
                const favoritesTeachers = JSON.parse(response);
                const favoritesTeachersIds = (favoritesTeachers.map((teacher: Teacher) => {
                    return (teacher.id)
                }))
                setFavorites(favoritesTeachersIds);
            }
        })
    }

    useFocusEffect(useCallback(() => {
        loadFavorites();
      }, [])
    )

    function handleToogleFiltersVisible(){
        setIsFiltersVisible(!isFiltersVisible);
    }
    async function handleFilter(){
        loadFavorites();

        const response = await api.get('/classes', {
            params:{
                subject,
                week_day,
                time
            }
        });
        
        setTeachers(response.data);

        setIsFiltersVisible(!isFiltersVisible);
    }
    return (
        <View style={styles.container}>
            <PageHeader 
                title="Proffys Disponíveis"
                headerRigth={(
                    <BorderlessButton onPress={handleToogleFiltersVisible}>
                        <Feather name='filter' size={20} color='#FFF'/>
                    </BorderlessButton>
                )}
            >
                { isFiltersVisible && (
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>Matéria:</Text>
                        <TextInput
                            style={styles.input}
                            value={subject}
                            onChangeText={text =>  setSubject(text)}
                            placeholder="Qual a matéria?"
                            placeholderTextColor='#c1bccc'
                        />
                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da Semana:</Text>
                                <TextInput
                                    style={styles.input}
                                    value={week_day}
                                    onChangeText={text =>  setWeek_day(text)} 
                                    placeholder="Qual o dia?"
                                    placeholderTextColor='#c1bccc'
                                />
                            </View> 
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Horário:</Text>
                                <TextInput
                                    style={styles.input}
                                    value={time}
                                    onChangeText={text =>  setTime(text)}
                                    placeholder="Qual a hora?"
                                    placeholderTextColor='#c1bccc'
                                />
                            </View> 
                        </View>

                        <RectButton onPress={handleFilter}>
                            <View style={styles.submitButton}>
                                <Text style={styles.submitTextButton}>
                                    Filtrar
                                </Text>
                            </View>
                        </RectButton>
                    </View>
                )}
            </PageHeader>

            <ScrollView
            style={styles.teacherView}
            contentContainerStyle={{
                paddingHorizontal: 16,
                paddingBottom: 16
            }}
            >
            {teachers.map(
                (teacher: Teacher) =>  (
                    <TeacherItem 
                        key={teacher.id} 
                        teacher={teacher}
                        favorited={favorites.includes(teacher.id)}
                    />)
            )}
            </ScrollView>
        </View>
    );
}

export default TeacherList;