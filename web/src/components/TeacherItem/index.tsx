import React from 'react';
import TeacherList from '../../pages/TeacherForm';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem(){
    return(
        <article className="teacher-item" >
            <header>
                <img src="https://media-exp1.licdn.com/dms/image/C4D03AQED6PKjl4nq5w/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=7ZJ6y9fc0eBQQJFaT_khCSc9_VK2aKG2Ljun4WagJ1Q" alt="Lucas Barbosa"/>
                <div>
                    <strong>Lucas Barbosa</strong>
                    <span>Programação</span>
                </div>
            </header>
            <p>
            Iniciei meus estudo em programação e tecnologias na área de Informática em 2017 e de lá para cá tenho amado cada vez mais essa área e me aprofundado bastante. <br/><br/>
            Atualmente estou estudando mais as tecnologias omnstack: JavaScript, React, React Native e buscando cada vez mais por meus conhecimentos a prova! 
            </p>
            <footer>
                <p>
                    Preço por aula
                    <strong>R$ 80,00</strong>
                </p>
                <button type='button'>
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;