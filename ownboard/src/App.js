import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Detail from './pages/Detail';
import Post from './pages/Post';
import Update from './pages/Update';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/post" element={<Post />} />
        <Route path="/update" element={<Update />} />
        <Route path="*" element={<div>Not Found !</div>} />
      </Routes>
    </div>
  );
}

export default App;
