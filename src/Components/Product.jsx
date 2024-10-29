import productDesc from '../productDesc.json'

export default function Product() {
    return(
        <>
        <div className="grid justify-center grid-cols-3 grid-rows-2 h-[600px]">
            {productDesc.map(function(data) {
                return (
                    <div className='flex justify-center items-center h-full' key={data.name}>
                        <div className='border-4 p-4 border-purple-700 text-white text rounded-md w-[300px] max-w-[300px] max-h-[225px] h-[225px] break-words'
                            style={{
                                backgroundImage: `url("${data.background}")`,
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

