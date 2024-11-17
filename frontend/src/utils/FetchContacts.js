import axios from 'axios'

const fetchContacts = async () => {
    try {
        const response = await axios.get('http://localhost:4000/contacts');
        console.log(response)
        return response.data
    } catch (error) {
        console.error('Error fetching contacts:', error);
        return null;
    }
};

export default fetchContacts;