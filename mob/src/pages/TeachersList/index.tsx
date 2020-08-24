import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';

import styles from './styles';
import PageHeader from '../../Components/PageHeader';
import TeacherItem from '../../Components/TeacherItem';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'


function TeacherList(){
    const [isFiltersVisible, setIsFiltersVisible ] = useState(false);
    
    function handleToogleFiltersVisible(){
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
                            placeholder="Qual a matéria?"
                            placeholderTextColor='#c1bccc'
                        />
                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da Semana:</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Qual o dia?"
                                    placeholderTextColor='#c1bccc'
                                />
                            </View> 
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Horário:</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Qual a hora?"
                                    placeholderTextColor='#c1bccc'
                                />
                            </View> 
                        </View>
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
            <TeacherItem/>
            <TeacherItem/>
            <TeacherItem/>
            <TeacherItem/>
            <TeacherItem/>
            </ScrollView>
        </View>
    );
}

export default TeacherList;