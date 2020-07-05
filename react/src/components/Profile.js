import React, { Component } from "react";
import { Typography, Card, CardContent, Paper, Grid } from '@material-ui/core';

const style = {
  root: {
    minWidth: 275,
    backgroundColor:' #000000',
    marginTop: 20,
    height: 300,
    color: '#e0f7fa'
  },
  title: {
    fontSize: 14,
  },
  paper: {
    spacing: 2,
    textAlign: 'left',
    backgroundColor: '#ffe6e6',
    color: '#000000'
  },
}

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {
        username: localStorage.getItem(''),
        taken: localStorage.getItem('taken'),
        id: localStorage.getItem('id'),
        email: localStorage.getItem('email'),
        roles: localStorage.getItem('roles'),
        Authorities: localStorage.getItem('authorities'),
      }
    };
  }

  render() {
    const { currentUser } = this.state;

    return (
      <React.Fragment>
        <Grid container spacing={3}>
          <Grid item xs={4}/>
          <Grid item xs={4}>
            <Paper>
              <Card style={style.root} variant="outlined">
                <CardContent>
                  <Typography style={style.title} gutterBottom>
                    <h1>Profile:Janug {currentUser.username}</h1>
                  </Typography>
                </CardContent>
                <CardContent>
                <Grid item xs={12}>
                       
                        <strong>taken:</strong>{" "}
                        {currentUser.taken}
                       
                    </Grid><br></br>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                       
                        <strong>id:</strong>{" "}
                        {currentUser.id}
                       
                    </Grid>
                    <Grid item xs={12}>
                      
                        <strong>email:</strong>{" "}
                        {currentUser.email}
                       
                    </Grid>
                    
                    <Grid item xs={12}>
                       
                        <strong>Authorities:</strong>
                        {currentUser.roles}
                      
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
          <Grid item xs={4}/>
        </Grid>
      </React.Fragment>
    );
  }
}
