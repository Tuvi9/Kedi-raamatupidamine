function Konsutatsioonid() {
    return(
    <div className='flex flex-col justify-center items-center bg-purple-700 text-white h-auto py-8'>
        <div className='max-w-5xl text-left text-2xl'>
            <p className='highlight highlight-white text-purple-700 p-4'>Kui sul on tekkinud küsimusi või soovid saada nõu, võta julgelt ühendust!</p>
            <br></br>
            <p className='text-3xl font-extrabold'>Pakume konsultatsiooni teemadel:</p>
            <br></br>
            <ul className='list-disc pl-8'>
                <li>Maksunõustamine</li>
                <li>Ettevõtte asutamine Eestis</li>
                <li>Lepingute koostamine</li>
            </ul>
        </div>
    </div>
    )
}

export default Konsutatsioonid;