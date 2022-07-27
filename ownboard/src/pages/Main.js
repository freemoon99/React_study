import React,{useState, useEffect} from 'react';
import '../style/Main.css'
import List from './../component/List';
import Post from '../component/Post';

const Main = () => {
    const [ allPost, setAllPost ] = useState();

    const [ postList, setPostList ] = useState({
        title: "",
        contents: "",
        category: ""
    });

    const postHandler = (e) => {
        if(!localStorage.getItem('blink')){ //빈배열 일 때.
            let posts = [];
            posts.push(postList);
            localStorage.setItem('blink', JSON.stringify(posts));
            setAllPost(posts);
        } else {
            let posts = JSON.parse(localStorage.getItem('blink'));
            posts.push(postList);
            localStorage.setItem('blink', JSON.stringify(posts));
            setAllPost(posts);
        }
        setPostList({
            title: "",
            contents: "",
            category: ""
        });
    }

    useEffect(() => {
        // localStorage 전체 데이터 불러오기
        setAllPost(JSON.parse(localStorage.getItem('blink')));
    }, []);

    return (
        <div>
            <h1 className='Logo'>LIKELION</h1>
            <hr/>
            <Post postList={postList} setPostList={setPostList}/>
            <div className='footer'><div className='completebtn' onClick={postHandler}>작성완료</div></div>
            <List allPost={allPost} setAllPost={setAllPost}/>
        </div>
    );
};

export default Main;