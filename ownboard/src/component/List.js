import React from 'react';
import Block from './Block';
import '../style/component/List.css'

function List({allPost, setAllPost}) {
    return (
        <div className='list'>
            {
                allPost && allPost.map((ele, idx) => {
                    return <Block ele={ele} idx={idx} setAllPost={setAllPost}/>
                })
            }
            {/* {MAP함수를 넣어서 블록 컴포넌트를 넣으면 된다} */}
        </div>
    );
}

export default List;