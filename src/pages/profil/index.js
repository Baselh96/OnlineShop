import React, { useState } from 'react';
import "./style.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import {UserData} from "../../localData/UserData";
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function ProfilPage() {
  const [user, setUser] = useState(UserData);
  const [open, setOpen] = React.useState(false);
  

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  return (
    <div position="static" className='profil-container'>
      <div className='profil-container-item'>
        <span className='label'>Name: </span>
        <TextField className='textfield'required label="Required" defaultValue= {user.name} />        
      </div>
      <div className='profil-container-item'>
        <span className='label'>E-Mail: </span>
        <TextField className='textfield' type="email" required label="Required" defaultValue= {user.email} /> 
      </div>
      <div className='profil-container-item'>
        <span className='label'>Passwort: </span>
        <TextField className='textfield' type="password" required label="Required" defaultValue= {user.password} />        
      </div>
      <div className='profil-container-item'>
        <span className='label'>Passwortwiederholung: </span>
        <TextField className='textfield' type="password" required label="Required" defaultValue= {user.password} />      
      </div>
      <div className='profil-container-item'>
        <Button variant="contained" onClick={handleClick}>SPEICHERN</Button>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            This is a success message!
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
}
