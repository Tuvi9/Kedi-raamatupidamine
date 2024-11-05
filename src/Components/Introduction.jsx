import introductionPhoto from '../assets/introduction-photo.png'

export default function Introduction() {
    return(
        <div className='flex flex-col md:grid md:grid-cols-2 pt-24 max-w-5xl justify-center mx-auto px-4'>
            <div className='border-4 border-purple-700 rounded-md'>
                <img className='object-cover h-full w-full' src={introductionPhoto} alt="Introduction"></img>
            </div>
            <div className='text-lg md:text-xl pt-6 md:pt-0 md:pl-6'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit, metus at facilisis facilisis, dui augue posuere dolor, vitae malesuada ipsum sem in eros. Proin vitae turpis in erat congue faucibus. Donec sit amet accumsan dui. Maecenas rhoncus hendrerit tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur consectetur sagittis pretium. Nullam quis consectetur ante. Aliquam erat volutpat. Ut tempor metus orci, et tempus ex lacinia a. Cras sagittis justo mauris, quis scelerisque nulla mollis quis. Suspendisse commodo accumsan turpis, et congue nisi fringilla sed. Sed elementum metus id imperdiet pellentesque.</p>
            </div>
            <div className='text-lg md:text-xl col-span-2 pt-6 break-words'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit, metus at facilisis facilisis, dui augue posuere dolor, vitae malesuada ipsum sem in eros. Proin vitae turpis in erat congue faucibus. Donec sit amet accumsan dui. Maecenas rhoncus hendrerit tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur consectetur sagittis pretium. Nullam quis consectetur ante. Aliquam erat volutpat. Ut tempor metus orci, et tempus ex lacinia a. Cras sagittis justo mauris, quis scelerisque nulla mollis quis. Suspendisse commodo accumsan turpis, et congue nisi fringilla sed. Sed elementum metus id imperdiet pellentesque.</p>
            </div>
        </div>
    )
}