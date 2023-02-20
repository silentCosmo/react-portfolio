import React from 'react'
import '../styles/Contact.css'

function Contact() {
  return (
    <div className='contact-page'>
      <h1>Contact</h1>
      
      <form>      
  <input name="name" type="text" class="feedback-input" placeholder="Name" />   
  <input name="email" type="text" class="feedback-input" placeholder="Email" />
  <textarea name="text" class="feedback-input" placeholder="Comment"></textarea>
  <input type="submit" value="SUBMIT"/>
</form>
    </div>
  )
}

export default Contact