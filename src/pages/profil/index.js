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
  const [openForSuccess, setOpenForSuccess] = React.useState(false);
  const [openForError, setOpenForError] = React.useState(false);
  const [repeatedPassword, setRepeatedPassword] = React.useState(user.password);
  const [error, setError] = React.useState("");
  

  const handleClick = () => {
    if (user.name.length === 0) {
      setError("Sie haben keinen Namen eingegeben!");
      setOpenForError(true);
    } else if (user.email.length === 0) {
      setError("Sie haben keine E-Mailadresse eingegeben!");
      setOpenForError(true);
    } else if (!user.email.includes("@")) {
      setError("Ihre E-Mailadresse ist nicht korrekt!");
      setOpenForError(true);
    } else if (user.password.length <= 4) {
      setError("Ihr Passwort muss mindestens 5 Zeichen haben!");
      setOpenForError(true);
    } else if (user.password !== repeatedPassword) {
      setError("Ihre Passwörter stimmen nicht überein!");
      setOpenForError(true);
    } else {
      console.log(user)
      setOpenForSuccess(true);
    }
  };


  return (
    <div position="static" className='profil-container'>
      <div className='profil-container-item'>
        <span className='label'>Name: </span>
        <TextField className='textfield' onChange={(e) => user.name = e.target.value} required label="Required" defaultValue= {user.name} />        
      </div>
      <div className='profil-container-item'>
        <span className='label'>E-Mail: </span>
        <TextField className='textfield' type="email" onChange={(e) => user.email = e.target.value} required label="Required" defaultValue= {user.email} /> 
      </div>
      <div className='profil-container-item'>
        <span className='label'>Passwort: </span>
        <TextField className='textfield' type="password" onChange={(e) => user.password = e.target.value} required label="Required" defaultValue= {user.password} />        
      </div>
      <div className='profil-container-item'>
        <span className='label'>Passwortwiederholung: </span>
        <TextField className='textfield' type="password" onChange={(e) => setRepeatedPassword(e.target.value)} required label="Required" defaultValue= {user.password} />      
      </div>
      <div className='profil-container-item'>
        <Button variant="contained" onClick={handleClick}>SPEICHERN</Button>

        <Snackbar open={openForSuccess} autoHideDuration={3000} onClose={() => setOpenForSuccess(false)}>
          <Alert onClose={() => setOpenForSuccess(false)} severity="success" sx={{ width: '100%' }}>
            Ihre Daten sind gespeichert!
          </Alert>
        </Snackbar>

        <Snackbar open={openForError} autoHideDuration={3000} onClose={() => setOpenForError(false)}>
          <Alert onClose={() => setOpenForError(false)} severity="error" sx={{ width: '100%' }}>
            {error}
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
}
