import React from 'react'
import styles from './ContactForm.module.css'
import Button from '../Button/Button'
import { MdMessage } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import { useState } from 'react'


function ContactForm() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [text, setText] = useState("")

  

  const onSubmit = (event) => {
    event.preventDefault();
 
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);

    email = event.target[1].value;
    text = event.target[2].value;

    console.log(
      name,
      email,
      text
    );
    

  }
  

  return (
    <section className={styles.container}>
      
      <div
      className={styles.contact_form}
      >
        <div className={styles.top_btn}>
        < Button 
        text="VIA SUPPORT CHAT" 
        icon={<MdMessage fontSize="24px"/>}
        />  
        < Button 
        text="VIA CALL" 
        icon={<FaPhoneAlt fontSize="24px"/>} />
        </div>
        <div className={styles.end_btn}>
        < Button 
        text="VIA EMAIL FORM" 
        icon={<HiMail fontSize="24px"/>} />
        </div>

        <form
        onSubmit={onSubmit}
        >
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name='name'/>
          </div>

          <div className={styles.form_control}>
            <label htmlFor="name">Email</label>
            <input type="email" name='email'/>
          </div>

          <div className={styles.form_control}>
            <label htmlFor="name">Text</label>
            <textarea name='text' rows="8"/>
          </div>
          <div style={{
              display: 'flex',
              justifyContent: 'end',
            }}>
          < Button 
          text="SUBMIT BUTTON" />
          </div>
        
          <div>
            {"Name: " + name} <br />
            {"Email: " + email} <br />
            {"Text: " + text} <br />
          </div>
        </form>
        
          
      </div> 

      <div
      className={styles.contact_image}>
        <img src="contact.png" alt="contact image" />
      </div> 
    </section>
  )
}

export default ContactForm
