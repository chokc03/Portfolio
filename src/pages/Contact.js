import React,{useState} from 'react'
import emailjs from 'emailjs-com';
import '../styles/Contact.scss'

function Contact() {

  const [contactForm, setContactForm] = useState({
    name:"",
    subject:"",
    email:"",
    message:""
  })

  const handleChange=(e)=>{
    const {name,value} = e.target;
    setContactForm({...contactForm,[name]:value});
  }

  const submitForm=(e)=>{
    e.preventDefault();
    if(!contactForm.email||!contactForm.message||!contactForm.name||!contactForm.subject){
      alert("Please fill in the blank");
    }
    else{
      emailjs.sendForm((process.env.REACT_APP_CONTACT_SERVER_ID), ((process.env.REACT_APP_CONTACT_TEMPLATE_ID)), e.target, ((process.env.REACT_APP_CONTACT_PUBLIC_KEY)))
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
    }
  }

  return (
    <div className='contactContainer'>
      <div className='box'>
        <div className="category">
          Contact
        </div>
        <div className="intro">
          <form onSubmit={submitForm}>
              <input type="text" onChange={handleChange} placeholder='Name' name="name" />
              <input type="email" onChange={handleChange} placeholder='Email' name="email" />
              <input type="text" onChange={handleChange} placeholder='Subject' name="subject" />
              <textarea placeholder='Message' onChange={handleChange} name="message" />
            <button value="Send">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact