import footerLogo from '../assets/Header-logo-example.png'

export default function Footer() {
    return (
        <div className='grid grid-cols-2 bg-purple-700 h-[150px]'>
            <div className='flex flex-col items-start justify-center pl-6' >
                <img src={footerLogo}></img>
            </div>
            <p className='flex flex-col items-end justify-center pr-6 text-white text-2xl'>info@ipsum.ee<br/>7 335 240</p>
        </div>
    )
}