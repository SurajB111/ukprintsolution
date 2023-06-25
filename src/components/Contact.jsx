import React from 'react'
import './Contact.css'
import { Button, Typography } from '@mui/material'
import { useState,useEffect } from 'react'
import emailjs from '@emailjs/browser'


const Contact = () => {
    useEffect(()=>{
      window.scrollTo(0, 0);
  },[]);
    const [loading,setLoading] = useState(false);
    const [form,setForm]=useState({
        name:'',
        email:'',
        message:'',
      })
    const formChange=(e)=>{
        const {name,value}=e.target;
        setForm({...form,[name]:value})
      }
      const contactFormHandler=(e)=>{
        e.preventDefault();
        setLoading(true);
        emailjs.send('service_t5w78vq','template_nrw7fi4',
        {
          from_name:form.name,
          to_name:'Suraj',
          from_email:form.email,
          to_email:'surajbisht.as123@gmail.com',
          message:form.message,

        },
        'QOQui4bKRtrIZESqC',
        ).then(()=>{
          setLoading(false);
          alert('Thank you for your response');
          setForm({
            name:'',
            email:'',
            message:'',
          })
        },(error)=>{
          setLoading(false);
          console.log(error);
          alert('something went wrong');
        })
    }
    return (
        <>
        <div className='container'>  
        <div className="otherConnections">
          <div className='cardHeading'><h1 
        
        >Phone: 8290380063</h1></div>
        </div>
        
        {/* <div className="sideContainer"></div> */}
        <div className="mainContainer">
            <form className='mainContainerForm' onSubmit={contactFormHandler}>
            <Typography variant='h4'>Email Us</Typography>
            <input 
            type='text'
            name="name"
            placeholder='Name'
            value={form.name}
            required
            onChange={formChange}
            />
            <input 
            type='email'
            name="email"
            placeholder='Email'
            value={form.email}
            required
            onChange={formChange}
            />
            <textarea placeholder='Message'cols="30" rows='10'
            name="message"
            value={form.message}
            required
            onChange={formChange}
            ></textarea>
            <Button variant='contained' type ='submit'>{loading?"sending...":"Send"}</Button>
            </form>
        </div>
        </div>
        {/* <Footer position="relative" translate="0px" /> */}
        </>
      )
    
}

export default Contact