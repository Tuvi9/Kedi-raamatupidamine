import { useRef, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { useInView } from 'react-intersection-observer';


emailjs.init(import.meta.env.VITE_PUBLIC_KEY)

export default function Form() {

    const { ref, inView} = useInView({
        threshold: 0.5,
        triggerOnce: true
    })
    const form = useRef();
    useEffect(() => {
        console.log(import.meta.env.VITE_PUBLIC_KEY)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, {
            publicKey: import.meta.env.VITE_PUBLIC_KEY,
        })
        .then(
            () => {
            console.log('Edukalt saadetud!');
            form.current.reset();
            },
            (error) => {
            console.log('Midagi läks valesti...', error.text);
            },
        );
    };

    return(
        <>
        <div ref={ref} className={`flex flex-col items-center justify-center w-full max-w-md mx-auto mt-8 px-4 transition-all duration-700 ease-in ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className='text-purple-700 font-bold xs:text-2xl text-4xl pb-[25px]'>
                <h1>Kirjutage meile</h1>
            </div>
            <form ref={form} onSubmit={sendEmail} className="space-y-4 pb-[100px] w-full">
                <label className="sr-only" htmlFor="nimi">Nimi:</label>
                <input
                    type="text"
                    id="nimi"
                    placeholder="Nimi"
                    name='kylastaja_nimi'
                    className="w-full p-2 text-xl xs:text-lg border-2 border-purple-700 rounded-md"
                /><br/>
                <label className="sr-only" htmlFor='epost'>E-post:</label>
                <input
                    type='email'
                    id='epost'
                    placeholder="E-post"
                    name='kylastaja_epost'
                    className="w-full p-2 text-xl xs:text-lg border-2 border-purple-700 rounded-md"
                /><br/>
                <label className="sr-only" htmlFor='telefon'>Telefon:</label>
                <input
                    type='text'
                    id='telefon'
                    placeholder="Telefon"
                    name='kylastaja_telefon'
                    className="w-full p-2 text-xl xs:text-lg border-2 border-purple-700 rounded-md"
                /><br/>
                <label className="sr-only" htmlFor='sonum'>Sõnum:</label>
                <textarea
                    className='w-full text-xl xs:text-lg p-2 border-2 border-purple-700 rounded-md xs:h-[150px] h-[200px]'
                    id='sonum'
                    placeholder="Sõnum"
                    name='kylastaja_sonum'
                />
                <button
                    type='submit'
                    className='flex flex-col mx-auto border-2 p-2 px-4 rounded-md border-purple-700 bg-purple-700 text-white font-bold text-xl xs:text-lg hover:bg-purple-800 transition-colors'
                >
                    Lorem Ipsum
                </button>
            </form>
        </div>
        </>
    )
}
