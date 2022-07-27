import '../style/component/Block.css'
import React,{useState} from 'react';
import Modal from 'react-bootstrap/Modal';


const Block = ({ele, idx, setAllPost}) => {

    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [ isBlock, setIsBlock ] = useState(false);

    const onClickDelete = (e) => {
        let posts = JSON.parse(localStorage.getItem('blink'));
        posts.splice(e.target.value,1);
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
        localStorage.setItem('blink', JSON.stringify(upPosts));
        setAllPost(upPosts)
    }

    
    return (
        <div>
            <div className='Box'>
                <div className='dataBox'>
                    <div id='title'>{ele.title}</div>
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
                    <textarea value={ele.title}/>
                    <textarea value={ele.contents}/>
                    <textarea value={ele.category}/>
                    <button id='upBtn' value={idx} onClick={Updated}>수정하기</button>
                </div>:null
            }
        </div>
    );
}

export default Block;