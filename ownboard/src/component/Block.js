import '../style/component/Block.css'
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';


const Block = ({ ele, idx, setAllPost }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [isBlock, setIsBlock] = useState(false);

    const navigate = useNavigate();

    const optionList = [
        "주제", "엔터테인먼트", "예술", "생활", "노하우", "쇼핑", "취미", "여가", "여행", "지식", "동향"
    ]

    const [upDate, setupDate] = useState({
        title: ele.title,
        contents: ele.contents,
        category: ele.category
    });

    const onClickDelete = (e) => {
        let posts = JSON.parse(localStorage.getItem('blink'));
        posts.splice(e.target.value, 1);
        localStorage.setItem('blink', JSON.stringify(posts));
        setAllPost(posts);
        handleClose();
    }

    const onClickUpdate = (e) => {
        setIsBlock(!isBlock);
        handleClose();
    }

    const Updated = (e) => {
        setIsBlock(!isBlock);
        let upPosts = JSON.parse(localStorage.getItem('blink'));
        upPosts[e.target.value] = upDate;
        setAllPost(upPosts)
    }

    const onChangeMent = (e) => {
        setupDate((ele) => {
            return { ...ele, title: e.target.value }
        })
    }

    const onChangeContentsMent = (e) => {
        setupDate((ele) => {
            return { ...ele, contents: e.target.value }
        })
    }

    const optionHandler = (e) => {
        setupDate((ele) => {
            return { ...ele, category: e.target.value }
        })
    }

    const goDetail = (e) => {
        navigate(`/detail/${idx}`);
    }
    return (
        <div>
            <div className='Box'>
                <div className='dataBox'>
                    <div id='title' onClick={goDetail}>{ele.title}</div>
                    <div id='category'>{ele.category}</div>
                </div>
                <div className='conBox'>
                    <div id='contents'>{ele.contents}</div>
                    <button id='btn' onClick={handleShow}>...</button>
                </div>
                <Modal className="modal-container" show={show} onHide={handleClose} size="sm">
                    <div className="modal-text" value={idx} onClick={onClickUpdate}>수정</div>
                    <div className="modal-text" value={idx} onClick={onClickDelete}>삭제</div>
                </Modal>
            </div>
            {
                isBlock ?
                    <div>
                        <textarea value={upDate.title} onChange={onChangeMent} onClick={goDetail}/>
                        <select value={upDate.category} onChange={optionHandler}>
                            <option disabled>=== 주제 ===</option>
                            {
                                optionList.map((op, i) => (
                                    <option value={op} key={i}>
                                        {op}
                                    </option>
                                ))
                            }
                        </select>
                        <textarea value={upDate.contents} onChange={onChangeContentsMent} />
                        <button id='upBtn' value={idx} onClick={Updated}>수정하기</button>
                    </div> : null
            }
        </div>
    );
}

export default Block;