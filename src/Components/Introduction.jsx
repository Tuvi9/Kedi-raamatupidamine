import introductionPhoto from '../assets/introduction-photo.png'
import { useInView } from 'react-intersection-observer'

export default function Introduction() {

    const { ref, inView} = useInView({
        threshold: 0.5,
        triggerOnce: true
    })

    return(
        <div ref={ref} className={`xs:flex xs:flex-col grid grid-cols-2 pt-24 max-w-5xl justify-center mx-auto px-4 transition-all duration-700 ease-in ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className='border-4 border-purple-700 rounded-md'>
                <img className='object-fit h-full w-full' src={introductionPhoto} alt="Introduction"></img>
            </div>
            <div className='text-xl xs:text-lg p-6'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit, metus at facilisis facilisis, dui augue posuere dolor, vitae malesuada ipsum sem in eros. Proin vitae turpis in erat congue faucibus. Donec sit amet accumsan dui. Maecenas rhoncus hendrerit tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur consectetur sagittis pretium. Nullam quis consectetur ante. Aliquam erat volutpat. Ut tempor metus orci, et tempus ex lacinia a. Cras sagittis justo mauris, quis scelerisque nulla mollis quis. Suspendisse commodo accumsan turpis, et congue nisi fringilla sed. Sed elementum metus id imperdiet pellentesque.</p>
            </div>
            <div className='text-xl xs:text-lg col-span-2 p-6'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit, metus at facilisis facilisis, dui augue posuere dolor, vitae malesuada ipsum sem in eros. Proin vitae turpis in erat congue faucibus. Donec sit amet accumsan dui. Maecenas rhoncus hendrerit tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur consectetur sagittis pretium. Nullam quis consectetur ante. Aliquam erat volutpat. Ut tempor metus orci, et tempus ex lacinia a. Cras sagittis justo mauris, quis scelerisque nulla mollis quis. Suspendisse commodo accumsan turpis, et congue nisi fringilla sed. Sed elementum metus id imperdiet pellentesque.</p>
            </div>
        </div>
    )
}