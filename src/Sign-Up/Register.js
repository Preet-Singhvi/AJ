import { Avatar, Button, Grid, Link, Paper, TextField, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import './Register.css';
import { useNavigate } from 'react-router';
import axios from 'axios';

const Register = () => {

    const navigate = useNavigate();

    const [formRegister, setFormRegister] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
    });

    const onChangeForm = (label, e) => {
      console.log(e.target.value);
      switch (label) {
        case "firstname":
          setFormRegister({ ...formRegister, name: e.target.value });
          break;
        case "lastname":
          setFormRegister({ ...formRegister, username: e.target.value });
          break;
        case "email":
          setFormRegister({ ...formRegister, email: e.target.value });
          break;
        case "password":
          setFormRegister({ ...formRegister, email: e.target.value });
      }
    };

    const register = () => {
      const { firstname,lastname,email,password} = formRegister
      if(firstname && lastname && email && password){
        axios.post("http://localhost:8000/register", formRegister)
        .then((res) =>{
          navigate("/");  
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        })
        .catch((e) => {
          console.log(e);
        })
      }
    }

    return (
        <Grid>
            <Paper elevation={10} className='register'>
                <Grid align='center' >
                    <Avatar className='lock'><LockOutlinedIcon/></Avatar>
                    <h2>Sign Up</h2>
                </Grid>
                <TextField 
                    className='field' 
                    variant="standard" 
                    label='First Name' 
                    placeholder='First Name' 
                    onChange={(e) => {onChangeForm("firstname", e);}}
                    fullWidth/>
                <TextField 
                    className='field' 
                    variant="standard" 
                    label='Last Name' 
                    placeholder='Last Name' 
                    onChange={(e) => {onChangeForm("lastname", e);}}
                    fullWidth/>
                <TextField 
                    className='field' 
                    variant="standard" 
                    label='Email' 
                    placeholder='Email' 
                    type='email' 
                    onChange={(e) => {onChangeForm("email", e);}}
                    fullWidth/>
                <TextField 
                    className='field' 
                    variant="standard" 
                    label='Password' 
                    placeholder='Password' 
                    type='password' 
                    onChange={(e) => {onChangeForm("password", e);}}
                    fullWidth 
                    required/>
                <Button 
                    type='submit' 
                    color='primary' 
                    variant='contained' 
                    className='enter' 
                    onClick={register}
                    fullWidth>
                        Register
                </Button>
                <Typography className='link'>
                    Already have an account? <Link href='/' >Sign-In</Link>
                </Typography>
            </Paper>
        </Grid>
    );
}

export default Register;
