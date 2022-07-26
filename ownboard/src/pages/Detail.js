import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import '../style/Detail.css';
import { useNavigate } from 'react-router-dom';

const Detail = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate();

    const deleteAll = () => {
        window.localStorage.removeItem('title');
        window.localStorage.removeItem('contents');
        window.localStorage.removeItem('category');
        navigate('/');
    }

        const getTitle = window.localStorage.getItem("title")
        const getContents = window.localStorage.getItem("contents")
        const getCategory = window.localStorage.getItem("category")

    const updatePost = () => {
        navigate('/update')
    }

    return (
        <div>
            <div className='detailTitle'>
                <h6>{JSON.parse(getCategory)}</h6>
                <h2>{JSON.parse(getTitle)}</h2>
            </div>
            <hr/>
            <div id='middleBox'>
                {JSON.parse(getContents)}
            </div>
            <hr/>
            <div id='repleBox'>
                댓글창
            </div>
            <button id='btn' onClick={handleShow}>...</button>
            <Modal className="modal-container" show={show} onHide={handleClose} size="sm">
            <div className="modal-text" onClick={updatePost}>
                수정
            </div>
            <div className="modal-text" onClick={deleteAll}>삭제</div>
            </Modal>
        </div>
    );
};

export default Detail;