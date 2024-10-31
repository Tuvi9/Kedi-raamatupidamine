import headerLogo from '../assets/Header-logo-example.png'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className='bg-purple-700 p-3'>
            <Link to='/'>
                <img src={headerLogo} alt='headerLogo' />
            </Link>
        </header>
    )
}
