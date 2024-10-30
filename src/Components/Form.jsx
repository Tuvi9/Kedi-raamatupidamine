export default function Form() {
    return(
        <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto mt-16">
            <div className='text-purple-700 font-bold text-4xl pb-[25px]'>
                <h1>Kirjutage meile</h1>
            </div>
            <form className="space-y-4 pb-[100px]">
                <label className="sr-only" htmlFor="nimi">Nimi:</label>
                <input type="text" id="nimi" placeholder="Nimi"></input><br/>
                <label className="sr-only" htmlFor='epost'>E-post:</label>
                <input type='text' id='epost' placeholder="E-post"></input><br/>
                <label className="sr-only" htmlFor='telefon'>Telefon:</label>
                <input type='text' id='telefon' placeholder="Telefon"></input><br/>
                <label className="sr-only" htmlFor='sonum'>Sõnum:</label>
                <textarea className='w-full text-2xl p-2 border-2 border-purple-700 rounded-md h-[200px]' type='text' id='sonum' placeholder="Sõnum"></textarea>
                <button className='flex flex-col mx-auto border-2 p-2 rounded-md border-purple-700 bg-purple-700 text-white font-bold'>
                    Lorem Ipsum
                </button>
            </form>
        </div>
    )
}