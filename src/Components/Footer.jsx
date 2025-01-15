import footerLogo from '../assets/Header-logo-example.png'

export default function Footer() {
    return (
        <div className='grid grid-cols-2 xs:grid-cols-1 bg-purple-700 min-h-[150px] p-4'>
            <div className='flex flex-col items-start xs:items-center justify-center pl-6 xs:pl-0' >
                <img src={footerLogo} alt="Footer Logo" className='xs:h-8 h-12 w-auto'></img>
            </div>
            <p className='flex flex-col items-end xs:items-center justify-center pr-6 xs:pr-0 text-white text-2xl xs:text-lg pt-0'>
                info@ipsum.ee<br/>7 335 240
            </p>
        </div>
    )
}