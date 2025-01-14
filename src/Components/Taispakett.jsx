function Taispakett() {
    return(
        <div className='flex flex-col justify-center items-center bg-purple-700 text-white h-auto py-8'>
        <div className='max-w-5xl text-left text-2xl'>
            <p>Raamatupidamise täispakett sisaldab igakuist raamatupidamise arvestust, mis
            vastab Eesti finantsaruandluse standarditele. Teenus sisaldab kõikide<br></br>
            raamatupidamiskannete korrektset kajastamist ning igakuist bilansi – ja<br></br>
            kasumiaruande koostamist.</p>
            <br></br>
            <ul className='list-disc pl-8'>
                <li>Algdokumentide kontroll ja sisestamine</li>
                <li>Ostu – ja müügiga seotud tehingute kajastamine</li>
                <li>Pangatehingute kajastamine</li>
                <li>Aruandvate isikute tehingute kajastamine</li>
                <li>Käibemaksuarvestus</li>
                <li>Põhivarade arvestamine ja kajastamine</li>
                <li>Laoarvestus</li>
            </ul>
            <br></br>
            <p>Raamatupidamise täispaketi hinna sisse kuulub ka vajadusel maksekorralduste
            lisamine panka ning lihtsamate andmete esitamine Statistikaametile. Ajamahukamate
            küsitluste täitmine ja esitamine Statistikaametile on lisatasu eest.</p>
            <br></br>
            <p>Raamatupidamisteenuse hind kujuneb kirjepõhiselt. Kirjepõhise
            raamatupidamisteenuse eest maksad iga kuu täpselt nii palju, kui jooksvas kuus
            dokumente on.</p>
            <br></br>
            <p>Kui ettevõtte on käibemaksukohustuslane, siis üks ostu/müügiarve on minimaalselt 3
            kirjet. Ühe pangarea kajastamine 2 kirjet.</p>
            <br></br>
            <p className="text-3xl font-extrabold">Kirjepõhise kuutasu näide:</p>
            <br></br>
            <p>Ettevõtte on käibemaksukohustuslane, põhivarade kogus 7, üks töötaja.</p>
            <br></br>
            <p>Antud kuul tekkis 255 kirjet ning teenuse hinnaks kujunes 255 * 0,55€=140.25€,
            millele lisandub 1 töötaja palgaarvestus 5€.</p>
            <br></br>
            <p>Ostutatud teenusete hind kokku kuu arvestuse eest 145, 25€ + käibemaks.</p>
        </div>
    </div>
    )
}

export default Taispakett;