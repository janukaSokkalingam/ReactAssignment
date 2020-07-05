import React, {Component} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import GroupIcon from '@material-ui/icons/Group';
import MenuBookIcon from '@material-ui/icons/MenuBook';


const classes = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'left',
      color: theme.palette.text.secondary,
      
    },
    
  }));
  const style = {
    root: {
      minWidth: 275,
      backgroundColor:'#263238',
      marginTop: 40,
      color: 'white'
    },
    title: {
      fontSize: 20,
      textAlign:'center'
    },
}


  class Admin extends Component {
    UserAdd = (e) => {
      this.props.history.push('/AddUser')
      localStorage.removeItem("exportin");
      window.location.reload();
    }
    UserUpdate = (e) => {
      this.props.history.push('/AddUser');
      window.location.reload();
    }
    UserView = (e) => {
      this.props.history.push('/UserList');
      window.location.reload();
    }
    render(){
    return (
      <div className={classes.root}  style={{ padding: 8}}>
        <Grid container spacing={1} >
          <Grid item xs>
          </Grid>
          <Grid item xs = {8}>
          <Paper>
              <Card style={style.root} variant="outlined">
                  <center><h1 style = {{backgroundColor : "#3e2723"}}>Welcome to Admin Panel</h1></center>
                
                <div >
                    <Grid container spacing={2}>
                        <Grid item xs = {5}>
                            <Paper className={classes.paper} style = {{backgroundColor : "#795548"}}>
                             
                                <GroupIcon style={{ fontSize: 200 }}/>
                            
                                <br/>
                                <p style = {{color: "white"}}>Manage Users</p>
                                <button onClick = {this.UserAdd}>Add user</button>
                                <button onClick = {this.UserView}>View User</button>
                            </Paper> 
                        </Grid>
                        <Grid item xs = {2}/>
                        <Grid item xs ={5}>
                        <Paper className={classes.paper} style = {{backgroundColor : "#795548"}}>
                             
                                <MenuBookIcon style={{ fontSize: 200 }}/>
                            
                                <br/>
                                <p style = {{color: "white"}}>Manage Books</p>
                                <button>Add Book</button>
                                <button>Manage Books</button>
                            </Paper> 
                        </Grid>
                    </Grid>
                </div>
              </Card>
            </Paper>
          </Grid>
          <Grid item xs>
          </Grid>
        </Grid>
        </div>
    )
  }
}


export default Admin 