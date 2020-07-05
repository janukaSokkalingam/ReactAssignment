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
 
export default class Addbook extends Component {
    constructor(props){
        super(props)
        this.state = {
          ifLogIn : true,
          message : '',
          successful : false,
        }
      }
  

  handleRegister = (e) => {
    this.props.history.push('/book_list');
        window.location.reload();
    }

    Booksave = (e) => {
        e.preventDefault();
        this.setState({
          successful: true,
          message: " Book Saved Sucessfully"
        })
      }
      Bookupdate = (e) => {
        e.preventDefault();
        this.setState({
          successful: false,
          message: "Book Update Sucessfully"
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
                            <h3 style = {{color: 'black'}}> <AddBoxIcon fontSize = "small"/>Update Book</h3> 

                          ):(<h3 style = {{color: 'black'}}> <AddBoxIcon fontSize = "small"/>Add New Book</h3>)
                        }
                    
                  
                       
                      </Grid>
                      
                      <Grid item xs={12}>
                        <FormControl>
                        <TextField required type="text" label="Title" variant="outlined" helperText=" Enter Book Title"  onChange={this.onChangeTitle}/>
                        </FormControl> &emsp;&emsp;
                        <FormControl >
                        <TextField required type="text" label="Author" variant="outlined" helperText="Enter  Book Author"  onChange={this.onChangeAuthor}/>
                        </FormControl> &emsp;&emsp;
                       
                        <FormControl>
                        <TextField required  type="text" label="Cover Photo URL" variant="outlined" helperText="Enter Book Cover Photo URL"  onChange={this.onChangeCoverPhotoURL}/>
                        </FormControl> &emsp;&emsp;
                      
                        <FormControl>
                        <TextField required type="text" label="ISBN Number" variant="outlined" helperText="Enter Book ISBN Number"  onChange={this.onChangeUsername}/>
                        </FormControl>
                      </Grid>

                      <Grid item xs={12}>
                        <FormControl>
                        <TextField required type="text" label="Price" variant="outlined" helperText="Enter Book Price"  onChange={this.onChangePrice}/>
                        </FormControl> &emsp;&emsp;
                      


                     
                        <FormControl>
                        <TextField
          id="outlined-SelectLanguage"
          select
          label="Language"
            
          SelectProps={{
            native: true,
          }}
          helperText="Please select your Language"
          variant="outlined"
        >

         <option value={"Select Language"}>Select Language</option>
         <option value={"Tamil"}>Tamil</option>
         <option value={"English"}>English</option>
         <option value={"Sinhala"}>Singalam</option>

          ))
        </TextField> 
                        </FormControl> &emsp;&emsp;
                       

                     
                         
                      <FormControl>
                        <TextField
          id="outlined-Select Genre"
          select
          label="Select Genre"
            
          SelectProps={{
            native: true,
          }}
          helperText="Please Select Your Genre"
          variant="outlined"
        >
          <option value={"Select Genre"}>Select Genre</option>
<option value={"Article"}>Article</option>
<option value={"Drama"}>Drama</option>
<option value={"Science"}>Science</option>

         
          ))
        </TextField> 
                        </FormControl> &emsp;&emsp;
                      </Grid>



                      <Grid item xs={12}>
                        <FormControl>
                         < paper varient='outlined'>
                         {localStorage.getItem("exportin")?(
                          <Button href="/save" varient="contained" style={{backgroundColor:'#1b5e20'}} onClick={this.Booksave}> <SaveIcon/>UPDATE</Button>
                         ):(<Button href="/save" varient="contained" style={{backgroundColor:'#1b5e20'}} onClick={this.Booksave}> <SaveIcon/>SAVE</Button>)}
                         &emsp; <Button href="/reset" varient="contained" style={{backgroundColor:'blue'}}><ReplayIcon/>RESET</Button>&emsp;
                          <Button href="/booklist" varient="contained" style={{backgroundColor:'blue'}}><ListIcon/>BOOKLIST</Button>&emsp;
                          </paper>
                        </FormControl>
                      </Grid>
                  </Grid>
                  )}
                  {
                    this.state.successful && (
                    <div>
                      <Typography color={this.state.successful ? 'primary' : 'error'} variant="overline" display="block" gutterBottom>
                          <strong>Book Svaed successful</strong>
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
     

