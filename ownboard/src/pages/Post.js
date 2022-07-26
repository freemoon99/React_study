import React,{useState} from 'react';
import '../style/Post.css'
import { useNavigate } from 'react-router-dom';

const Post = () => {
    const [ titlement, setTileMent ] = useState('');
    const [ contentsment, setContentsMent ] = useState('');
    const [ categoryment, setCategoryment ] = useState('');

    const navigate = useNavigate();
    const backspace = (e) => {
        navigate('/')
    }
    
    const onChangeMent = (e) => {
        e.preventDefault();
        setTileMent(e.target.value);
    }

    const onChangeContentsMent = (e) => {
        e.preventDefault();
        setContentsMent(e.target.value);
    }

    const onChangeCategoryMent = (e) => {
        e.preventDefault();
        setCategoryment(e.target.value);
    }

    const postHandler = (e) => {
        window.localStorage.setItem("title", JSON.stringify(titlement))
        window.localStorage.setItem("contents", JSON.stringify(contentsment))
        window.localStorage.setItem("category", JSON.stringify(categoryment))
        navigate('/')
    }

    
// console.log(postHandler)
console.log(titlement)
console.log(contentsment)
console.log(categoryment)
    return (
        <div>
            <div id='postTitle'><h1>글 작성</h1></div>
            <button id='backBtn' onClick={backspace}>뒤로가기</button>
            <hr/>
            <div className='titleBox'>
                <textarea value={titlement} onChange={onChangeMent} placeholder="제목을 입력해주세요"/>
            </div>
            <div className='inputBox'>
                <textarea value={contentsment} onChange={onChangeContentsMent} placeholder="내용을 입력해주세요"/>
            </div>
            <div className='categoryBox'>
                <textarea value={categoryment} onChange={onChangeCategoryMent} placeholder="카테고리를 입력해주세요"/>
            </div>
            <div className='footer'><button className='completebtn' onClick={postHandler}>작성완료</button></div>
        </div>
    );
};

export default Post;