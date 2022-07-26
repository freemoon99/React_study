import '../style/component/Block.css'
import { useNavigate } from 'react-router-dom';

function Block() {

    const titleString = window.localStorage.getItem("title");
    const contentsString = window.localStorage.getItem("contents")
    const categoryString = window.localStorage.getItem("category")

    const navigate = useNavigate();
    const goDetail = () => {
        navigate('/detail');
    }

    return (
        <div className='Box' onClick={goDetail}>
            <p className='Title'>{JSON.parse(titleString)}</p>
            <p className='Contents'>{JSON.parse(contentsString)}</p>
            <label className='Category'>{JSON.parse(categoryString)}</label>
        </div>
    );
}

export default Block;