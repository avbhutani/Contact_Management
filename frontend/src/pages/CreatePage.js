// import './App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@mui/material/Button';
import { useCallback, useContext, useEffect, useState } from 'react';
import axios from 'axios'
import {Route, Routes, useNavigate, useParams} from 'react-router-dom'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CreateContactContext from '../contexts/createContact.context';
import './CreatePage.css'
const CreatePage = ()=> {
    const [firstName,setFirstName] = useState('')
  const [lastName,setLastName] = useState('')
  const [email,setEmail] = useState('')
  const [phoneNumber,setPhoneNumber] = useState('')
  const [company,setCompany] = useState('')
  const [jobTitle,setJobTitle] = useState('')
  const [message,setMessage] = useState('')
  const navigate = useNavigate()
  const {createContact,setCreateContact} = useContext(CreateContactContext)
  async function exitCreate() 
  {
    setCreateContact(false)
  }
  async function createContactFunction(event) {
    event.preventDefault()
    try {
      const response = await axios.post('http://localhost:4000/contacts',{
        firstName,
        lastName,
        email,
        phoneNumber,
        company,
        jobTitle,
        message
      })
      console.log(response)
      
      setMessage(`Created Contact Successfully!`)
      setCreateContact(false)
      toast('Created Contact Successfully!')
      window.location.href = '/'
      // window.location.href = '/'
    } catch (error) {
      console.log(`Error creating Contact!`,error)
      toast('Error Creating Contact!')
      // setMessage(`One or more fields are empty!`)
    }
  }
    return(
      <>
        <ToastContainer />
        <form className='create-form'>
          <button onClick={exitCreate}>Exit</button>
          <TextField onChange={(e)=> setFirstName(e.target.value)} id="outlined-basic" label="First Name" variant="outlined" />
          <TextField onChange={(e)=> setLastName(e.target.value)} id="outlined-basic" label="Last Name" variant="outlined" />
          <TextField onChange={(e)=> setEmail(e.target.value)} id="outlined-basic" label="Email" variant="outlined" />
          <TextField onChange={(e)=> setPhoneNumber(e.target.value)} id="outlined-basic" label="Phone Number" variant="outlined" />
          <TextField onChange={(e)=> setCompany(e.target.value)} id="outlined-basic" label="Company" variant="outlined" />
          <TextField onChange={(e)=> setJobTitle(e.target.value)} id="outlined-basic" label="Job Title" variant="outlined" />
          <button type='submit' variant="create-contact-button" onClick={createContactFunction}>Create Contact</button>
        </form>
        </>
    )
}


export default CreatePage;