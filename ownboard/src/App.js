import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Detail from './pages/Detail';

function App() {
  

  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/detail/:id" element={<Detail />}/>
        <Route path="*" element={<div>Not Found !</div>} />
      </Routes>
    </div>
  );
}

export default App;
