import React, {useEffect, useState} from 'react';
import RepleList from './RepleList';
import '../style/component/Reple.css'

function Reple({params}) {
    const [ comments, setComments ] = useState({
        userName: "익명",
        content: ""
    });
    const [ addComments, setAddCommnets ] = useState([]);

    const onChangeComments = (e) => {
        const text = e.target.value;
        setComments({
            content: text,
        })
        
    }

    const commentsHandler = (e) => {
        e.preventDefault();
        const commentsObj = {
            ...comments,
            id: params.id
        };
        const commnetsArr = [...addComments,commentsObj];
        setAddCommnets(commnetsArr);
    }

    useEffect(() => {
        localStorage.setItem('repleList', JSON.stringify(addComments));
    }, [addComments])

    console.log(comments)
    console.log(addComments)

    return (
        <div className='repBox'>
            {
                addComments.map((ele, index) => {
                    return(
                        <RepleList value={ele} key={JSON.stringify(index)}/>
                    )
                })
            }
            <textarea placeholder='댓글을 남겨주세요' onChange={onChangeComments}/>
            <button onClick={commentsHandler}>입력</button>
        </div>
    );
}

export default Reple;