import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<div>Not Found !</div>} />
      </Routes>
    </div>
  );
}

export default App;
