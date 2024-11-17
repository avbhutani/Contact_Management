
import TextField from '@material-ui/core/TextField';
import Button from '@mui/material/Button';
import ContactTable from '../components/ContactTable';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './MainPage.css'
import CreatePage from './CreatePage';
import CreateContactContext from '../contexts/createContact.context';
import UpdateContactContext from '../contexts/UpdateContact.context';

const MainPage = ()=> {
    const navigate = useNavigate()
    const {createContact,setCreateContact} = useContext(CreateContactContext)

    async function createNewContact() {
        setCreateContact(true)
    }


    return (
        <>
        <div>
        <button onClick={createNewContact} className='create-contact-button'>Create New Contact</button>
        {createContact ? <CreatePage /> : <></>}
        <ContactTable />
        </div>
    </>
    )
}

export default MainPage;