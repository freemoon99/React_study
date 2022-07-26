import React,{useState} from 'react';
import '../style/Post.css'
import { useNavigate } from 'react-router-dom';

const Update = () => {
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

    const titleString = window.localStorage.getItem("title");
    const contentsString = window.localStorage.getItem("contents")
    const categoryString = window.localStorage.getItem("category")
    
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
                <textarea value={titlement} onChange={onChangeMent}>{JSON.parse(titleString)}</textarea>
                {console.log(titleString)}
            </div>
            <div className='inputBox'>
                <textarea value={contentsment} onChange={onChangeContentsMent}>{JSON.parse(contentsString)}</textarea>
                {console.log(contentsString)}
            </div>
            <div className='categoryBox'>
                <textarea value={categoryment} onChange={onChangeCategoryMent}>{JSON.parse(categoryString)}</textarea>
                {console.log(categoryString)}
            </div>
            <div className='footer'><button className='completebtn' onClick={postHandler}>작성완료</button></div>
        </div>
    );
};

export default Update;