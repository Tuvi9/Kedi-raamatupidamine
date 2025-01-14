function Aastaaruanne() {
    return(
    <div className='flex flex-col justify-center items-center bg-purple-700 text-white h-auto py-8'>
        <div className='max-w-5xl text-left text-2xl'>
            <p>Iga äriühing peab majandusaasta aruande esitama äriregistrile hiljemalt 6 kuu
            jooksul peale majandusaasta lõppu.</p>
            <br></br>
            <p className='text-3xl font-extrabold'>Esitatavateks aruanneteks on:</p>
            <br></br>
            <ul className='list-disc pl-8'>
                <li>Bilanss</li>
                <li>Kasumiaruanne</li>
                <li>Rahavoogude aruanne</li>
                <li>Omakapitali muutuste aruanne</li>
                <li>Tegevusaruanne</li>
            </ul>
            <br></br>
            <p>Aastaaruande esitamiseks peab olema kajastatud esitatava perioodi kõik tehingud.
            Kui ettevõtte ei ole meie klient, aga soovib majandusaasta aruande koostamist ja
            esitamist, lisandub hinnale ka eelnevate perioodide kontroll ja vajadusel tehingute
            kajastamine. Meie klientidele lisandub ainult aastaaruande maksumus.</p>
        </div>
    </div>
    )
}

export default Aastaaruanne;