import { Button, Grid, Paper,TextField } from '@mui/material';
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import './Home.css';

const Home = ({ pro,setpro }) => {
    
    const [profile,SetProfile] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png")
    const[user,setUser] = useState({
        img_url : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
        Firstname : "Preet",
        Lastname : "Singhvi",
        email : "preet.singhvi@vcti.io",
        password : "hello"
    });
    const navigate = useNavigate();
    const handleClick=() => {
        setpro(user);
        navigate('/edit');
    }
    const handleLogout=() => {
        navigate('/');
    }

    useEffect(() => {
        // get token from local storage
        // const auth_token = localStorage.getItem("auth_token");
        // const auth_token_type = localStorage.getItem("auth_token_type");
        // const token = auth_token_type + " " + auth_token;
    
        //  fetch data from get user api
        axios
          .get("http://localhost:8000/users/", {
            // headers: { Authorization: token },
            pro
          })
          .then((response) => {
            // console.log(response);
            setUser(response.data.result);
            setpro(user);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);
    return (
        <div>
            <Grid>
                <Paper elevation={10} className="home">
                    <Grid align='center' className='header'>
                        <h3>View Profile</h3>
                    </Grid>
                        <div className='image'>
                            <img src={user.img_url} alt="Error" align='center'></img>
                        </div>
                    <TextField 
                        className='field' 
                        variant="outlined" 
                        value={user.Firstname}
                        label="FirstName"
                        fullWidth/>
                    <TextField 
                        className='field' 
                        variant="outlined"
                        label="LastName"
                        value={user.Lastname}
                        fullWidth/>
                    <TextField 
                        className='field' 
                        variant="outlined"
                        label="Email"
                        value={user.email}
                        fullWidth/>
                    <TextField 
                        className='field' 
                        variant="outlined"
                        value={user.password}
                        label="Password"
                        fullWidth/>
                    <Button type='submit' 
                        color='primary' 
                        variant='contained' 
                        className='enter'
                        onClick={handleClick} 
                        fullWidth>
                            Edit Profile
                    </Button>
                    <Button type='submit' 
                        color='primary' 
                        variant='contained' 
                        className='enter' 
                        onClick={handleLogout}
                        fullWidth>
                            LogOut
                    </Button>
                </Paper>
                
            </Grid>
        </div>
    );
}

export default Home;
