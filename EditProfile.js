import { Button, Grid, Paper,TextField } from '@mui/material';
import React from 'react';
import './EditProfile.css'
import { useState } from 'react';
import { useNavigate } from 'react-router';
import CameraAltRoundedIcon from '@mui/icons-material/CameraAltRounded';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const EditProfile = ({ pro}) => {
    
    const navigate = useNavigate();
    // const [Image,SetImage] = useState("./Blank.png")
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

    const Back=() => {
        navigate('/home');
    }

    const [Image, SetImage] = useState('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png');
    
      const hiddenFileInput = React.useRef(null);
  
      const handleClick = event => {
        hiddenFileInput.current.click();
      };

      const imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () =>{
          if(reader.readyState === 2){
            SetImage(reader.result)
          }
        }
        reader.readAsDataURL(e.target.files[0])
      };
    return (
        <div>
            <Grid>
                <Paper elevation={10} className="edit">
                    <Grid align='center' className='header'>
                        <button onClick={Back}><ArrowBackIcon /></button>
                        <h3>Edit Profile</h3>
                    </Grid>
                        <div className='image'>
                            <img src={Image} alt='Error' align='center'></img>
                            <div className='imageButton'>
                            <Button onClick={handleClick}>
                                <CameraAltRoundedIcon color='primary' ></CameraAltRoundedIcon>
                            </Button>
                            <input type="file"
                                ref={hiddenFileInput}
                                onChange={imageHandler}
                                style={{display:'none'}} />  
                            </div>
                        </div>
                    <TextField 
                        className='field' 
                        variant="outlined" 
                        label="Firstname"
                        value={pro.Firstname}
                        onChange={(e) => {onChangeForm("firstname", e);}}
                        fullWidth
                        required/>
                    <TextField 
                        className='field' 
                        variant="outlined"
                        label="LastName"
                        value={pro.Lastname}
                        onChange={(e) => {onChangeForm("lastname", e);}}
                        fullWidth
                        required/>
                    <TextField 
                        className='field' 
                        variant="outlined"
                        label="Email" 
                        onChange={(e) => {onChangeForm("email", e);}}
                        fullWidth
                        required/>
                    <TextField 
                        className='field' 
                        variant="outlined"
                        label="Password"
                        onChange={(e) => {onChangeForm("password", e);}}
                        fullWidth/>
                    <Button 
                        color='primary' 
                        variant='contained' 
                        className='enter'
                        fullWidth>
                            Confirm
                    </Button>
                </Paper>
                
            </Grid>
        </div>
  );
}

export default EditProfile;
