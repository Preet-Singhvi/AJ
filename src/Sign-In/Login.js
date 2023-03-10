import { Avatar, Button, Grid, Link, Paper, TextField, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import './Login.css';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import axios from 'axios';
import { useNavigate } from 'react-router';
const Sign = ({ setpro }) => {

const navigate = useNavigate();

    const [loginForm, setLoginform] = useState({
        email: "",
        password: "",
    });
    
    const onChangeForm = (label,e) => {
        console.log(e.target.value);
        switch (label) {
          case "email":
            setLoginform({ ...loginForm, username: e.target.value });
            break;
          case "password":
            setLoginform({ ...loginForm, password: e.target.value });
            break;
        }
    };

    const login = () => {
        axios.post("http://localhost:8000",loginForm)
        .then((res) => {
            // localStorage.setItem("auth_token", res.data.result.access_token);
            // localStorage.setItem(
            //     "auth_token_type",
            //     res.data.result.token_type
            // );
            setpro(loginForm);
            navigate("/home");
        })
        .catch((e) => {
            console.log(e);
            // toast.error(e.res.data.detail);
        });
    }

    return (
        <Grid>
            <Paper elevation={10} className='sign'>
                <Grid align='center' >
                    <Avatar className='lock'><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField 
                    className='field' 
                    variant="standard" 
                    label='Email' 
                    placeholder='Email' 
                    type='email'
                    onChange={(e) => {onChangeForm("email", e);}}
                    fullWidth
                    required/>
                <TextField 
                    className='field' 
                    variant="standard" 
                    label='Password' 
                    placeholder='Password' 
                    type='password'
                    onChange={(e) => {onChangeForm("password", e);}} 
                    fullWidth 
                    required/>
                <Button type='submit' 
                    color='primary' 
                    variant='contained' 
                    className='enter'
                    onClick={login}
                    fullWidth>
                        Sign In
                </Button>
                <Typography className='link'>
                    <Link href='/home' >Forgot Password</Link>
                </Typography>
                <Typography className='link'>
                    Don't have an account? <Link href='/register' >Sign Up</Link>
                </Typography>
            </Paper>
        </Grid>
    );
}

export default Sign;
