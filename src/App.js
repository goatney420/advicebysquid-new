import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./routes/Home";
import FeelingPage from './routes/FeelingPage';
import AdvicePage from './routes/AdvicePage';
import GiveUpPage from './routes/GiveUpPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/FeelingPage" element={<FeelingPage/>}/>
        <Route path="/AdvicePage" element={<AdvicePage/>}/>
        <Route path="/GiveUpPage" element={<GiveUpPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
