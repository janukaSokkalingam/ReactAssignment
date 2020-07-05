import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import MenuBookIcon from '@material-ui/icons/MenuBook';
import { Paper, Typography, AppBar, Toolbar, Button, IconButton } from "@material-ui/core";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import BoardAdmin from "./components/BoardAdmin";
import { AccountCircle } from "@material-ui/icons";
import Footer from "./components/Footer";
import Addbook from "./Addbook";
 
import UserList from "./UserList";
import BookList from "./BookList";
import Admin from "./Admin";
import AddUser from "./AddUser";
 
 

const style = {
  paper: {
    flexGrow: 1,
    backgroundColor: '#000000',
    color: '#c5cae9'
  },
  menuButton: {
    spacing: 2,
  },
  link: {
    underline: 'none'
  },
  appBar: {
    backgroundColor: "#000000"
  }
}
class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
    this.state = {
      showAdminBoard: false,
      currentUser: undefined,
    };

 
  }

Addbook_veiw(){
  localStorage.removeItem('exportin')
}

  componentDidMount() {
    let user;
    
    if (localStorage.getItem('username')) {
      user = {
        username: localStorage.getItem('username'),
        taken:localStorage.getItem('taken'),
        id: localStorage.getItem('id'),
        email: localStorage.getItem('email'),
        roles: localStorage.getItem('roles'),
        authorities: localStorage.getItem('authorities'),
        islogin: localStorage.getItem('isLogin'),
      };
    }

    if (user) {
      this.setState({
        currentUser: user,
        showAdminBoard: user.roles.includes("ROLE_ADMIN")
      });
    }
  }

  logOut () {
    localStorage.clear()
  }

  render() {
    const { currentUser, showAdminBoard } = this.state;
    var Adminlog;
    if(localStorage.getItem("roles")=="ROLE_ADMIN"){
      Adminlog=true
    }
    return (
      <Router>
        <div>
          <AppBar position="static" style={style.appBar}>
            <Toolbar>
              <Paper style={style.paper} elevation={0}>
                <IconButton edge="start" style={style.MenuBookIcon} color="inherit" aria-label="menu">
                  <MenuBookIcon />
                </IconButton>
                <Button href="/" color='inherit'>
                  <Typography><strong>Book shop</strong></Typography>
                </Button>
                <Button href="/home" color='inherit'>
                  <strong>Home</strong>
                </Button>
                {Adminlog?(
                   <Button href="/Admin" color='inherit'>
                   <strong>Admin Board</strong>
                 </Button>
                ):(

               <>
                {currentUser && (
                  <Button href="/Addbook" color='inherit' onClick={this.Addbook_veiw}>
                    <strong>ADD Book</strong>
                  </Button>
                )}
                {currentUser && (
                  <Button href="/BookList" color='inherit'>
                    <strong>Book LIST</strong>
                  </Button>
                )}</>)}

              </Paper>
              
              {currentUser ? (
                <Paper style={{'backgroundColor': '#1a237e', 'color': '#c5cae9'}} elevation={0}>
                  <Button href="/profile" color='inherit'>
                    <AccountCircle style={{ fontSize: 40 }}/>
                    <strong>{currentUser.username}</strong>
                  </Button>
                  <Button href="/" color='inherit' onClick={this.logOut}>
                    <strong>LogOut</strong>
                  </Button>
                </Paper>
              ) : (
                <Paper style={{'backgroundColor': '#1a237e', 'color': '#c5cae9'}} elevation={0}>
                  <Button href="/login" color='inherit'>
                    <strong>Login</strong>
                  </Button>
                  <Button href="/register" color='inherit'>
                    <strong>Sign Up</strong>
                  </Button>
                </Paper>
              )}
            </Toolbar>
          </AppBar>

          <div>
            <Switch>
              <Route exact path={["/", "/home"]} component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/profile" component={Profile} />
              <Route path="/user" component={BoardUser} />
             
              <Route path="/Addbook" component={Addbook} />
              <Route path="/Admin" component={Admin} />
              <Route exact path="/booklist" component={BookList} />
              <Route exact path="/userlist" component={UserList} />
              <Route exact path="/AddUser" component={AddUser} />
              
               
              
              
              
            </Switch>
          </div>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;