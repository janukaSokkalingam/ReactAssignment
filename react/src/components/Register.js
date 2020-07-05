import React, { Component } from "react";
 
import { Card, CardContent, Grid, FormControl, Typography, TextField } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
 


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
    minWidth: 250,
    backgroundColor:'#000000',
    marginTop: 50,
    color: '#000000 '
  },
}

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
      message: "",
      successful: false
    };
  }

  onChangeUsername = (e) => {
    this.setState({
      username: e.target.value
    });
  }

  onChangeEmail = (e) => {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword = (e) => {
    this.setState({
      password: e.target.value
    });
  }

  handleRegister = (e) => {
    e.preventDefault();

    if (this.state.username && this.state.email && this.state.password) {
      console.log(this.state.username + " " + this.state.password + " " + this.state.email)
      this.setState({
        successful: true,
        message: "Registered successfully"
      })
    } else {
      this.setState({
        successful: false,
        message: "username/password/email is empty"
      })
    }
  }

  render() {
    return (
      <Grid container>
        <Grid item xs={4}/>
        <Grid item xs={1}/>
        <Grid item xs={3}>
          <Card style={style.root}>
              <CardContent>
              <Card style1={style.root1}>
              <CardContent>
                <form onSubmit={this.handleRegister}>
                  {!this.state.successful && (
                  <Grid container spacing={1}>
                      <Grid item xs={12}>
                      <h1 style={{color:"blue"}}>Register Account at Book Shop</h1>
                     
                      </Grid>
                      
                      <Grid item xs={12}>
                        <FormControl fullWidth>
                        <TextField type="text" label="username" variant="outlined" helperText="please enter user name"  onChange={this.onChangeUsername}/>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl fullWidth>
                        <TextField type="text" label="Email" variant="outlined" helperText="please enter Email"  onChange={this.onChangeEmail}/>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl fullWidth>
                        <TextField type="text" label="Password" variant="outlined" helperText="please enter Password"  onChange={this.onChangePassword}/>
                          
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl>
                          <button>Sign Up</button>
                        </FormControl>
                      </Grid>
                  </Grid>
                  )}
                  {
                    this.state.message && (
                    <div>
                      <Typography color={this.state.successful ? 'primary' : 'error'} variant="overline" display="block" gutterBottom>
                          <strong>{this.state.message}</strong>
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
