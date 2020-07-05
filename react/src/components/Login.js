import React, { Component } from "react";

import { Card, CardContent, Typography, Grid, FormControl, TextField } from '@material-ui/core';
import Paper from '@material-ui/core/Paper'; 

const style = {
  root: {
    minWidth: 250,
    backgroundColor:'#000000',
    marginTop: 50,
    color: '#000000'
  }
}
 


export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      message: ""
    };
  }

  onChangeUsername = (e) => {
    this.setState({
      username: e.target.value
    });
  }

  onChangePassword = (e) => {
    this.setState({
      password: e.target.value
    });
  }

  handleLogin = (e) => {
    e.preventDefault();

    if (this.state.username && this.state.password) {
          console.log("username = " + this.state.username)
          console.log("password = " + this.state.password)
          localStorage.setItem('id', '1');
          localStorage.setItem('username', this.state.username);
          localStorage.setItem('email', 'janu@gmail.com');
          localStorage.setItem('roles', 'ROLE_ADMIN');
          this.props.history.push("/profile");
          window.location.reload();
    } else {
      this.setState({
        message: "Empty username or password"
      })
    }
  }

  render() {
    return (
      <Grid container>
        <Grid item xs={5}/>
        <Grid item xs={3}>

          <Card style={style.root}>
              <CardContent>
                <Paper>
                <Paper variant="outlined"/>
                 
                
                <form onSubmit={this.handleLogin}>
                  <Grid container spacing={1}>

                      <Grid item xs={12}>
                        <h1 style={{color:"blue"}}>login To Books Shop</h1>
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl >
                        <TextField type="text" label="username" variant="outlined" helperText="please enter user name"  onChange={this.onChangeUsername}/>
                           
                        </FormControl>
                      </Grid>
                      <Grid item xs={10}>
                        <FormControl>
                          <TextField type="password" label="Password" variant="outlined" helperText="please enter password" onChange={this.onChangePassword}/>
                           
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl>
                          <button>
                            <span>Login</span>
                          </button>
                        </FormControl>
                      </Grid>
                  </Grid>
                  {this.state.message && (
                    <div>
                      <Typography color='error' variant="overline" display="block" gutterBottom>
                          <strong>{this.state.message}</strong>
                      </Typography>
                    </div>
                  )}
                </form>
                </Paper>
              </CardContent>
        </Card>
        </Grid>
        <Grid item xs={4}/>
      </Grid>
    );
  }
}
