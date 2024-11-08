import productDesc from '../productDesc.json'
import rectangleImage from '../assets/Rectangle.png?url'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

export default function Product() {

    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true
    })

    // At the start expanded is set to false so only the first 3 products appear
    const [expanded, setExpanded] = useState(false)

    // Store the width of viewport
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        // updates what our current viewport width is
        const handleResize = () => setWindowWidth(window.innerWidth)
        // looks for when width changes
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    // mobile view is width < 640px
    const isMobile = windowWidth < 640;
    // if we are on mobile view and  setExpanded is false then slice only the first 3 elements
    const productsToDisplay = (isMobile && !expanded) ? productDesc.slice(0, 3) : productDesc
    return(
        <>
        <div ref={ref} className={`transition-all duration-700 ease-in ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Helmet>
            <div className='flex flex-col text-center pt-8'>
                <h1 className='text-6xl text-purple-700 font-bold xs:text-4xl'>Lorem Ipsum</h1>
                <p className='text-2xl pt-6 break-words max-w-4xl mx-auto xs:text-lg xs:p-4 pb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            </div>
            <div className={`grid justify-center grid-cols-3 grid-rows-2 h-auto space-x-0 xs:grid-cols-1 gap-4 max-w-[900px] mx-auto`}>
                {productsToDisplay.map(function(data) {
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
                                    <div className='hover:bg-violet-700 border-2 p-2 rounded-md self-end'>
                                        <Link to={`/product/${data.id}`}>
                                            <button>
                                                Loe lähemalt
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
        {isMobile && productDesc.length > 3 && (
            <div className="text-center mt-4">
            <button
                // If the button Show More is clicked expanded gets set to true and everything is displayed
                onClick={() => setExpanded(!expanded)}
                className="bg-purple-700 text-white px-4 py-2 rounded"
            >
                {expanded ? 'Näita Vähem' : 'Näita Veel'}
            </button>
        </div>
        )}
        </>
    )
}

