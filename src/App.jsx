import Home from './Pages/Home'
import ProductDesc from './Pages/ProductDesc'
import './index.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/product/:id' element={<ProductDesc/>}/>
            </Routes>
        </Router>
    )
}

export default App