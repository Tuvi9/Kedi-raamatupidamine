import Home from './Pages/Home'
import './index.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Teenus1 from './Pages/Teenus1';
import Teenus2 from './Pages/Teenus2';
import Teenus3 from './Pages/Teenus3';
import Teenus4 from './Pages/Teenus4';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/product/1' element={<Teenus1/>}/>
                <Route path='/product/2' element={<Teenus2/>}/>
                <Route path='/product/3' element={<Teenus3/>}/>
                <Route path='/product/4' element={<Teenus4/>}/>
            </Routes>
        </Router>
    )
}

export default App