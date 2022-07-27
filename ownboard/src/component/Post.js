import React from 'react';
import '../style/component/Post.css'

const Post = ({postList, setPostList}) => {

    // const [ option, setOption ] = useState('');

    const optionList = [
        "주제", "엔터테인먼트", "예술", "생활", "노하우", "쇼핑", "취미", "여가", "여행", "지식", "동향"
    ]

    const onChangeMent = (e) => {
        setPostList((ele) => {
            return {...ele, title: e.target.value}
        })
    }

    const onChangeContentsMent = (e) => {
        setPostList((ele) => {
            return {...ele, contents: e.target.value}
        })
    }
    
    const optionHandler = (e) => {
        setPostList((ele) => {
            return {...ele, category: e.target.value}
        })
    }
    
    return (
        <div>
            <div className='titleBox'>
                <textarea value={postList.title} onChange={onChangeMent} placeholder="제목을 입력해주세요"/>
            </div>
            <div className='categoryBox'>
                <select onChange={optionHandler} value={postList.category}>
                    <option disabled>=== 주제 ===</option>
                    {
                        optionList.map((op,i) => (
                            <option value={op} key={i}>
                                {op}
                            </option>
                        ))
                    }
                </select>
            </div>
            <div className='inputBox'>
                <textarea value={postList.contents} onChange={onChangeContentsMent} placeholder="내용을 입력해주세요"/>
            </div>
        </div>
    );
};

export default Post;