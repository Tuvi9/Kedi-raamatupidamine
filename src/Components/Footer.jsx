import footerLogo from '../assets/Header-logo-example.png'

export default function Footer() {
    return (
        <div className='grid xs:grid-cols-1 grid-cols-2 bg-purple-700 min-h-[150px] p-4'>
            <div className='flex flex-col xs:items-center items-start justify-center pl-6' >
                <img src={footerLogo} alt="Footer Logo" className='xs:h-8 h-12 w-auto'></img>
            </div>
            <p className='flex flex-col xs:items-center items-end justify-center pr-6 text-white text-2xl xs:text-lg xs:pt-4 pt-0'>
                info@ipsum.ee<br/>7 335 240
            </p>
        </div>
    )
}