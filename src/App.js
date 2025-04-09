import React from 'react';
import EmailForm from './components/EmailForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <EmailForm />
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
