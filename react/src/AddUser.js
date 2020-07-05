import React, { Component } from "react";
 
import { Card, CardContent, Grid, FormControl, Typography, TextField ,Button} from '@material-ui/core';
 
import BookList from './BookList';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import AddBoxIcon from '@material-ui/icons/AddBox';
import SaveIcon from '@material-ui/icons/Save';
import ReplayIcon from '@material-ui/icons/Replay';
import ListIcon from '@material-ui/icons/List';

 


const style = {
  root: {
    minWidth: 275,
    backgroundColor:'#000000',
    marginTop: 20,
    color: '#000000 '
  },
}

const style1= {
  root1: {
     
    backgroundColor:'#000000',
    marginTop: 50,
    color: '#000000 '
  },
}
 
export default class AddUser extends Component {
    constructor(props){
        super(props)
        this.state = {
          ifLogIn : true,
          message : '',
          successful : false,
        }
      }
  

  handleRegister = (e) => {
    this.props.history.push('/UserList');
        window.location.reload();
    }

    Booksave = (e) => {
        e.preventDefault();
        this.setState({
          successful: false,
          message: " User Add Sucessfully"
        })
      }
      Bookupdate = (e) => {
        e.preventDefault();
        this.setState({
          successful: false,
          message: "User Update Sucessfully"
        })
      }
  
 
 

  render() {
    return (
      <Grid container>
        <Grid item xs={4}/>
      
        <Grid item xs={5}>
          <Card style={style.root}>
              <CardContent>
              <Card style1={style.root1}>
              <CardContent>
                <form style={{color:"black" }}>
                  { !this.state.successful &&(
                  <Grid container spacing={1}>
                      <Grid item xs={12}>
                        {
                          localStorage.getItem("exportin")?(
                            <h3 style = {{color: 'black'}}> <AddBoxIcon fontSize = "small"/>  Update User</h3> 

                          ):(<h3 style = {{color: 'black'}}> <AddBoxIcon fontSize = "small"/>  Add New User</h3> )
                        }
                    
                  
                       
                      </Grid>
                      
                      <Grid item xs={12}>
                        <FormControl>
                        <TextField required type="text" label="Username" variant="outlined" helperText=" Enter Username"  onChange={this.onChangeTitle}/>
                        </FormControl> &emsp;&emsp;
                        <FormControl >
                        <TextField required type="text" label="Email" variant="outlined" helperText="Enter  Email"  onChange={this.onChangeEmail}/>
                        </FormControl> &emsp;&emsp;
                        <FormControl>
                        <TextField
          id="outlined-SelectRole"
          select
          label="SelectRole"
            
          SelectProps={{
            native: true,
          }}
          helperText="Please select Role"
          variant="outlined"
        >

         <option value={"Select Role"}>SelectRole</option>
         <option value={"Admin"}>ROLE_ADMIN</option>
         <option value={"User"}>ROLE_USER</option>
          

          
         
          ))
        </TextField> 
                        </FormControl> &emsp;&emsp;
                       

                       
 
                      
                        <FormControl>
                        <TextField required type="text" label="Password" variant="outlined" helperText="Enter Password"  onChange={this.onChangePassword}/>
                        </FormControl>
                      </Grid>

                     



                      <Grid item xs={12}>
                        <FormControl>
                         < paper varient='outlined'>
                          <Button href="/save" varient="contained" style={{backgroundColor:'#1b5e20'}} onClick={this.Booksave}><SaveIcon />SAVE</Button>&emsp;
                          <Button href="/reset" varient="contained" style={{backgroundColor:'blue'}}><ReplayIcon/>RESET</Button>&emsp;
                          <Button href="/UserList" varient="contained" style={{backgroundColor:'blue'}}><ListIcon/>USERLIST</Button>&emsp;
                          </paper>
                        </FormControl>
                      </Grid>
                  </Grid>
                  )}
                  {
                    this.state.message && (
                    <div>
                      <Typography color={this.state.successful ? 'primary' : 'error'} variant="overline" display="block" gutterBottom>
                          <strong>userAdd successfully</strong>
                      </Typography>
                    </div>
                  )
                  }
                </form>
              </CardContent>
              </Card>
        </CardContent>
        </Card>
        </Grid>
        <Grid item xs={4}/>
      </Grid>
    );
  }
    
    }
     
    