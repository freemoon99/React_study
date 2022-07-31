import React from 'react';
import '../style/component/RepleList.css'

function RepleList(props) {
    const { content } = props.value;

    return (
        <div className='showRepBox'>
            <span>익명👤</span>
            <p>{content}</p>
        </div>
    );
}

export default RepleList;