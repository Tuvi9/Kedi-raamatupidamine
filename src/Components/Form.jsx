export default function Form() {
    return(
        <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto mt-8 md:mt-16 px-4 md:px-0">
            <div className='text-purple-700 font-bold text-2xl md:text-4xl pb-[25px]'>
                <h1>Kirjutage meile</h1>
            </div>
            <form className="space-y-4 pb-[100px] w-full">
                <label className="sr-only" htmlFor="nimi">Nimi:</label>
                <input 
                    type="text" 
                    id="nimi" 
                    placeholder="Nimi" 
                    className="w-full p-2 text-lg md:text-xl border-2 border-purple-700 rounded-md"
                /><br/>
                <label className="sr-only" htmlFor='epost'>E-post:</label>
                <input 
                    type='text' 
                    id='epost' 
                    placeholder="E-post"
                    className="w-full p-2 text-lg md:text-xl border-2 border-purple-700 rounded-md"
                /><br/>
                <label className="sr-only" htmlFor='telefon'>Telefon:</label>
                <input 
                    type='text' 
                    id='telefon' 
                    placeholder="Telefon"
                    className="w-full p-2 text-lg md:text-xl border-2 border-purple-700 rounded-md"
                /><br/>
                <label className="sr-only" htmlFor='sonum'>Sõnum:</label>
                <textarea 
                    className='w-full text-lg md:text-xl p-2 border-2 border-purple-700 rounded-md h-[150px] md:h-[200px]' 
                    id='sonum' 
                    placeholder="Sõnum"
                />
                <button className='flex flex-col mx-auto border-2 p-2 px-4 rounded-md border-purple-700 bg-purple-700 text-white font-bold text-lg md:text-xl hover:bg-purple-800 transition-colors'>
                    Lorem Ipsum
                </button>
            </form>
        </div>
    )
}