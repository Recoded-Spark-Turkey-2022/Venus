import { useState } from 'react'
import Twitter from '../../assets/Twitter.svg'
import instagram from '../../assets/Instagram.svg'
import facebook from '../../assets/Facebook.svg'
import '../../index.css'

// import db(app) from firebase...........................

function ContactForm(){
    const [email, setEmail]=useState('');
    const [message, setMessage]=useState('');
  
    const handleSubmit = (e)=>{
    e.preventDefault();

    /* app.collection('contacts')
         .add({
            email:email,
            message:message
         })
         .then(()=>{
            alert('Your message has been submitted!');
         })
         .catch((error)=>{
            alert.(error.message)
         });

         setEmail('');
         setMessage('');
     */
        }
    return(
        <div className='w-full'>
            <form name="contact" className='flex flex-col justify-center md:justify-start mt-5 ' onSubmit={handleSubmit}>
            <div>{ /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }</div>
                <label htmlFor="email" className="text-darkGrey mb-2">
                    Email
                </label>
                <input  required id='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" className="border-1 p-2 rounded-md border border-darkGrey bg-slate-50"/>
                <div>{ /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }</div>
                <label htmlFor="message" className="text-darkGrey mb-2 mt-2">
                    Message
                </label>
               <textarea value={message} onChange={(e)=>setMessage(e.target.value)} required id='message' className="border-1 p-2 rounded-md border border-darkGrey bg-slate-50 h-40" placeholder="Message"/>
                <div className='flex justify-center md:justify-start items-center'>
                <button type='submit' id='contact-button' className="w-32 rounded-full border border-mediumBlue mt-2 whitespace-nowrap py-2">
                    Send
                </button>
                </div>

            </form>
            <div className='flex justify-center md:justify-start'>
                <button type="button" className="mt-8"><img src={Twitter} alt="Twitter-logo" /></button>
                <button type="button" className="mt-8 pl-4"><img src={instagram} alt="Instagram-logo" /></button>
                <button type="button" className="mt-8 pl-4"><img src={facebook} alt="Facebook-logo" /></button>
            </div>
        </div>
    )


}
export default ContactForm;