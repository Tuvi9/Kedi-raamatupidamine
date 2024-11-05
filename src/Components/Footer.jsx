import footerLogo from '../assets/Header-logo-example.png'

export default function Footer() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 bg-purple-700 min-h-[150px] p-4'>
            <div className='flex flex-col items-center md:items-start justify-center md:pl-6' >
                <img src={footerLogo} alt="Footer Logo" className='h-8 md:h-12 w-auto'></img>
            </div>
            <p className='flex flex-col items-center md:items-end justify-center md:pr-6 text-white text-lg md:text-2xl pt-4 md:pt-0'>
                info@ipsum.ee<br/>7 335 240
            </p>
        </div>
    )
}