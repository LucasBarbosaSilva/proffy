import React, { useState, FormEvent, useEffect } from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem, {Teacher} from '../../components/TeacherItem';

import './styles.css';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';


function TeacherList(){

    const [teachers, setTeachers] = useState([]);
    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    async function allTeachers(){
        api.get('all-classes').then(response => {
            
            setTeachers(response.data);
        });
    }
    

    async function searchTeachers(e:FormEvent){
        e.preventDefault();

        const response = await api.get('/classes', {
            params:{
                subject,
                week_day,
                time
            }
        });
        
        setTeachers(response.data);
    }
    
    return(
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são seus proffys disponíveis">
                <form id="search-teachers" onSubmit={searchTeachers}>
                    <Select 
                        name="subject" 
                        label="Matéria"
                        value={subject}
                        onChange={(e) => {setSubject(e.target.value)}}
                        options={[
                            {value: "Artes", label: "Artes"},
                            {value: "Matemática", label: "Matemática"},
                            {value: "Português", label:"Português"},
                            {value: "História", label: "História"},
                            {value: "Geografia", label: "Geografia"},
                            {value: "Biologia", label: "Biologia"},
                            {value: "Educação Física", label: "Educação Física"},
                            {value: "Física", label: "Física"}
                        ]}
                    />
                    <Select 
                        name="week_day" 
                        label="Dia da Semana"
                        value={week_day}
                        onChange={(e) => {setWeekDay(e.target.value)}}
                        options={[
                            {value: "0", label: "Domingo"},
                            {value: "1", label: "Segunda-feira"},
                            {value: "2", label: "Terça-feira"},
                            {value: "3", label:"Quarta-feira"},
                            {value: "4", label: "Quinta-feira"},
                            {value: "5", label: "Sexta-feira"},
                            {value: "6", label: "Sábado"},
                        ]}
                    />
                    <Input 
                        type="time" 
                        name="time" 
                        label="Hora"
                        value={time}
                        onChange={(e) => {setTime(e.target.value)}}
                    />
                    <button type="submit">
                        Buscar
                    </button>
                </form>
            </PageHeader>
            
            
            
            <main id="page-teachers-list" >
            <button id="button-all-teachers" onClick={allTeachers} >Mostrar Todos Os Professores!</button>  
                { teachers.map((teacher: Teacher )  => {
                    return <TeacherItem key={ teacher.id } teacher={teacher}/>
                }) }
                
                
            </main>
        </div>
        
    );
}

export default TeacherList;