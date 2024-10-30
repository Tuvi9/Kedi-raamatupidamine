import headerLogo from '../assets/Header-logo-example.png'

export default function Header() {
    return (
        <header className='bg-purple-700 p-3'>
            <img src={headerLogo} alt='headerLogo' />
        </header>
    )
}
