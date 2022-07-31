import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Reple from '../component/Reple';
import '../style/Detail.css'

function Detail (){
    const params = useParams();

    const loadPost = JSON.parse(localStorage.getItem('blink'));
    
    const navigate = useNavigate();
    const goMain=(e)=>{
        navigate('/');
    }

    return (
        <div>
            <h1 className='Logo' onClick={goMain}>LIKELION</h1>
            <hr/>
            <div id='ttBox'>
                {loadPost[params.id].title}
            </div>
            <div id='caBox'>
                {loadPost[params.id].category}
            </div>
            <div id='ctBox'>
                {loadPost[params.id].contents}
            </div>
            <hr/>
            <Reple params={params}/>
        </div>
    );
};

export default Detail;