# Contact Management System

## Overview
The Contact Management System is a full-stack application designed to help users efficiently manage customer/client contact information. Users can perform CRUD operations such as adding, viewing, updating, and deleting contact details. The system features a clean, intuitive UI and robust backend, making it an ideal solution for businesses that require effective contact management.

---

## Features
1. **Add New Contacts:**  **(POST Request on API '/contacts')** <br>
   Users can create a new contact with essential details such as First Name, Last Name, Email, Phone Number, Company, and Job Title.

2. **View Contacts:**  **(GET Request on API '/contacts')**<br>
   All contacts are displayed in a paginated table with sorting options for easy browsing.

3. **Edit Contacts:**  **(PUT Request on API '/contacts/:id')**<br>
   Users can update contact information to ensure records remain accurate and up-to-date.

4. **Delete Contacts:**  **(DELETE Request on API '/contacts/:id')**<br>
   Outdated or duplicate contacts can be removed with ease.

5. **Error Handling:**  
   The system validates input fields, handles duplicate entries, and returns meaningful error messages for smooth user interaction.

---

## Technology Stack
- **Frontend:** ReactJS with Material UI (MUI)
- **Backend:** Node.js with Express
- **Database:** MongoDB 

---

## Setup Instructions

### Prerequisites
1. Node.js (v14 or above)
2. MongoDB installed and running
3. Git installed on your system

### Clone the Repository
```bash
git clone https://github.com/avbhutani/Contact_Management
cd Contact_Management
```

## Running the Project

  ### Backend
  ```bash
  npm install
  cd backend
  npm start
  ```

### Frontend
```bash
npm install
cd frontend
npm start
```

## Major Technical Decisions
1. Database Choice:
MongoDB was chosen for its flexibility and quick setup for document-based storage. Alternatively, relational databases (PostgreSQL/MySQL) can be used for structured data.

2. Frontend Framework:
ReactJS with MUI was selected for its modular and responsive components, ensuring a consistent and clean user interface.

3. Backend Framework:
Node.js with Express provided a lightweight and efficient server for handling API requests.

## Challenges:

1.**Challenge:** Ensuring meaningful error responses for API failures. <br>
**Solution:** Added validation middleware and structured error handling in the backend.
State Management: <br>

2.**Challenge:** Managing state between the table and forms. <br>
**Solution:** Used React's useState and useEffect hooks to synchronize data between components.



