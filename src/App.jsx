import Home from './Pages/Home'
import './index.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Teenus1 from './Pages/Teenus1';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/product/:1' element={<Teenus1/>}/>
            </Routes>
        </Router>
    )
}

export default App