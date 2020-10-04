import React from 'react';
import TeacherList from '../../pages/TeacherForm';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';
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

interface TeacherItemsProps{
    teacher: Teacher 
}

const TeacherItem: React.FC<TeacherItemsProps> = ({teacher}) => {
    function createNewConnection(){
        api.post('connections', {
            user_id: teacher.id
        })
    }
    
    return(
        <article className="teacher-item" >
            <header>
                <img src={teacher.avatar}/>
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>
            <p> {teacher.bio}
            </p>
            <footer>
                <p>
                    Preço por aula
                    <strong>R$ {teacher.coast}</strong>
                </p>
                <a target="_blank" onClick={createNewConnection} href={`https://wa.me/${teacher.whatsapp}`}>
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </a>
            </footer>
        </article>
    );
}

export default TeacherItem;