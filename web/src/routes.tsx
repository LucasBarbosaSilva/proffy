import React from 'react';
import { BrowserRouter, Routes as Browser, Route} from 'react-router-dom';
import Landing from './pages/Lading';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';

function Routes(){
    return(
        <BrowserRouter>
            <Browser>
                <Route path='/' element={<Landing/>} />
                <Route path='/study' element={<TeacherList/>} />
                <Route path='/give-classes' element ={<TeacherForm/>} />
            </Browser>
        </BrowserRouter>
    );
}

export default Routes;