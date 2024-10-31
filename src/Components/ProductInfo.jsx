import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import productInfo from '../productInfo.json'

export default function ProductInfo() {
    const { id } = useParams();
    // Checks if page content is loaded by default content is still not there yet.
    const [isLoading, setIsLoading] = useState(true);
    // Matches the URL id with the correct content in json
    const product = productInfo.find(p => p.id === parseInt(id))

    // Scrolls to the top of the page and waits for the content to load.
    useEffect(() => {
        window.scrollTo(0, 0);
        setIsLoading(false)
    }, [])

    if (isLoading) return <div>Loading...</div>
    if (!product) return <div>Product not found</div>

    return (
        <div className='flex flex-col justify-center items-center bg-purple-700 text-white h-[500px]'>
            <div className='max-w-5xl text-center text-2xl'>
                <h1 className='pb-24 text-5xl font-bold'>Lorem Ipsum</h1>
                {product.info}
            </div>
        </div>
    )
}