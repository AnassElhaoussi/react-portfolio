
import React, { useState } from 'react'
import { db } from '../firebase'

const Contact = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [notValid, setNotValid] = useState(false)

  const submitMessage = async (e) => {
    e.preventDefault()

    if(name !== "" && email !== "" && message !== ""){
        await db.collection('user_messages').add({
          userName: name,
          userEmail: email,
          userMessage: message
        })
    
        setName('')
        setMessage('')
        setEmail('')
      
      
    } else if(name == "" || email == "" || message == ""){
      setNotValid(true)
    }

   



    
  }

  return (
    <div className='flex flex-col gap-20'>
      <h1 className='text-5xl font-bold text-center'>Contact me</h1>
      <div className='flex  justify-center'>
        <form action="" className='flex flex-col gap-8' onSubmit={(e) => submitMessage(e)}>
          <form action="" className='flex flex-col gap-2 items-start'>
            <label htmlFor="" className='text-blue-500'>Your name :</label>
            <input type="text" 
            className={!notValid ? 'px-8 py-2 outline-none rounded-sm' : 'px-8 py-2 outline-none rounded-sm placeholder:text-red-600'}
            placeholder={!notValid ? "Ex: Christiana V. Clarc" : "Please enter your name!"}
            value={name}
            onChange={(e) => setName(e.target.value)} />
          </form>
          <form action="" className='flex flex-col gap-2 items-start'>
            <label htmlFor="" className='text-blue-500'>Your Email : </label>
            <input type="text"
            className={!notValid ? "px-8 py-2 outline-none rounded-sm": "px-8 py-2 outline-none rounded-sm placeholder:text-red-600" }
            placeholder={!notValid ? 'youremail@gmail.com' : "Please enter your Email!"}
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
          </form>
          <form action="" className='flex flex-col items-start gap-2'>
            <label htmlFor="" className='text-blue-500'>Your message: </label>
            <textarea name="" id="" cols="30" rows="10" 
            className={!notValid ? ' outline-none p-2 rounded-sm' : ' outline-none p-2 rounded-sm placeholder:text-red-600'}
            placeholder={!notValid ? "" : "Please enter your message!"} 
            value={message}
            onChange={(e) => setMessage(e.target.value)}></textarea>
          </form>
          <button type='submit' className='bg-blue-500 text-white font-bold px-8 rounded py-1'>Send</button>
        </form>
        
      </div>
      
    </div>
  )

  }


export default Contact