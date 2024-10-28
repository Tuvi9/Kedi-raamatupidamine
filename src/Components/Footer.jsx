import '../index.css'
import footerLogo from '../assets/Header-logo-example.png'

export default function Footer() {
    return (
        <footer className='bg-purple-700 p-3'>
            <img src={footerLogo} alt='footerLogo' />
        </footer>
    )
}
