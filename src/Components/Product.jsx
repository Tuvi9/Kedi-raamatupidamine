import productDesc from '../productDesc.json'
import rectangleImage from '../assets/Rectangle.png'

export default function Product() {
    return(
        <>
        <div className='flex flex-col text-center pt-8'>
            <h1 className='text-6xl text-purple-700 font-bold'>Lorem Ipsum</h1>
            <p className='text-2xl pt-6 break-words max-w-4xl mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
        </div>
        <div className="grid justify-center grid-cols-3 grid-rows-2 h-[600px]">
            {productDesc.map(function(data) {
                return (
                    <div className='flex justify-center items-center h-full' key={data.name}>
                        <div className='border-4 p-4 border-purple-700 text-white text rounded-md w-[300px] max-w-[300px] max-h-[225px] h-[225px] break-words'
                            style={{
                                backgroundImage: `url(${rectangleImage})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            }}
                        >
                            <div className='text-2xl flex flex-col justify-between h-full'>
                                {data.name}
                                <div className='border-2 p-2 rounded-md self-end'>
                                    <button>
                                        Loe lähemalt
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
        </>
    )
}

