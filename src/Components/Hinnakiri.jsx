import { useInView } from 'react-intersection-observer'

function Hinnakiri() {
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true
    })

    return(
        <div ref={ref} className={`flex flex-col justify-center items-center pt-16 px-4 transition-all duration-700 ease-in ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div>
                <h1 className='text-6xl text-purple-700 font-bold xs:text-4xl pb-8'>Hinnakiri</h1>
            </div>
            <div className='flex justify-center items-center overflow-x-auto w-full'>
                <table className='border-collapse border max-w-[700px] w-full xs:w-auto'>
                    <thead>
                        <tr>
                            <th className='border border-black text-left text-red-700 p-2 xs:text-sm'>Hindadele lisandub käibemaks</th>
                            <th className='border border-black text-right p-2 xs:text-sm'>Hind €</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='border border-black text-left p-2 xs:text-sm'>Kirjepõhine raamatupidamisteenus – ühe kirje hind</td>
                            <td className='border border-black text-right p-2 xs:text-sm'>0,55€/ tk</td>
                        </tr>
                        <tr>
                            <td className='border border-black text-left p-2 xs:text-sm'>Palgaarvestus hind töötaja kohta</td>
                            <td className='border border-black text-right p-2 xs:text-sm'>5€/ töötaja</td>
                        </tr>
                        <tr>
                            <td className='border border-black text-left p-2 xs:text-sm'>Majandusaasta aruande koostamine ja esitamine MIKROETTEVÕTE</td>
                            <td className='border border-black text-right p-2 xs:text-sm'>40€/ tk</td>
                        </tr>
                        <tr>
                            <td className='border border-black text-left p-2 xs:text-sm'>Majandusaasta aruande koostamine ja esitamine VÄIKEETTEVÕTE</td>
                            <td className='border border-black text-right p-2 xs:text-sm'>60€/ tk</td>
                        </tr>
                        <tr>
                            <td className='border border-black text-left p-2 xs:text-sm'>Eelmiste perioodide korrastamine</td>
                            <td className='border border-black text-right p-2 xs:text-sm'>kokkuleppel</td>
                        </tr>
                        <tr>
                            <td className='border border-black text-left p-2 xs:text-sm'>Konsultatsioon tunnihind</td>
                            <td className='border border-black text-right p-2 xs:text-sm'>30€/ h</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Hinnakiri