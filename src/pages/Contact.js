import React, { useState, useRef}  from 'react'
import emailjs from '@emailjs/browser';
import '../styles/Contact.css'

function Contact() {
  
  const [mailerr,setMailerr] = useState(false)
  const [mail,setMail] = useState("")
  const ValMail = (val) => {
    setMail(val)
    if(val.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
      setMailerr(false)
    }else{
      setMailerr(true)
    }
  }

    const form = useRef()
  
  const sendEmail = (e) => {
     console.log("ml "+mail.length);
     ;
    emailjs.init('C0Q9UZwcj6z-u3LU1');
    if(mail.legth){
      console.log("ml "+mail.length)
      alert("hghjnj")
    }else if(!mailerr&&mail.length){
    emailjs.sendForm('service_m9upc1d','template_69jqj0z',  '#feedback' )
	.then((response) => {
	   console.log('SUCCESS!', response.status, response.text);
     
	}, (err) => {
	   console.log('FAILED...', err);
     
	});
    alert("Your message was send successfully")
  }else{
    alert("Enter a valid email")
  }

  }

  const noSub = ()=>{alert("Your message could not be send!")}

  

  return (
    <div className='contact-page'>
      <h1>Contact</h1>
      <form onSubmit={ mailerr ? noSub : sendEmail} id="feedback" ref={form} >
        <input name="name" type="text" class="feedback-input" placeholder="Name" />
        { mailerr ? <p className='mail-error'>Please enter a valid email..!</p> : "" }
        <input name="email" type="text" class={ mailerr ? "input-error" : "feedback-input" } placeholder="Email" onChange={(e)=>ValMail(e.target.value)} />
        <textarea name="text" class="feedback-input" placeholder="Message"></textarea>
        <input className={mail.length!==0 ? "" : "submit-err" } type="submit"  value="SUBMIT" />
      </form>
    </div>
  )
}

export default Contact