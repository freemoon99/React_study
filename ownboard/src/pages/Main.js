import React from 'react';
import '../style/Main.css'
import List from './../component/List';
import { useNavigate } from 'react-router-dom';

const Main = () => {
    const navigate = useNavigate();
    const createHandler = () => {
        navigate('/post');
    }
    
    return (
        <div>
            <h1 className='Logo'>LIKELION</h1>
            <hr/>
            <List />
            <div className='footer'><button className='createbtn' onClick={createHandler}>작성하기</button></div>
        </div>
    );
};

export default Main;