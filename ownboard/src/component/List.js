import React from 'react';
import Block from './Block';

function List() {
    return (
        <div>
            <Block />
            <Block />
            <Block />
            <Block />
            <Block />
            <Block />
            <Block />
            {/* {MAP함수를 넣어서 블록 컴포넌트를 넣으면 된다} */}
        </div>
    );
}

export default List;