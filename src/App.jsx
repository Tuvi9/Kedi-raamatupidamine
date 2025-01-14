import Home from './Pages/Home'
import './index.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Teenus1 from './Pages/Teenus1';
import Teenus2 from './Pages/Teenus2';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/product/1' element={<Teenus1/>}/>
                <Route path='/product/2' element={<Teenus2/>}/>
            </Routes>
        </Router>
    )
}

export default App