import React, { Component } from "react";
import ReactDOM from "react-dom";
import MaterialTable from "material-table";
import Paper from '@material-ui/core/Paper';
import { Card, CardContent, Typography, Grid, FormControl, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ListAltIcon from '@material-ui/icons/ListAlt';
import { forwardRef } from 'react';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import Avatar from '@material-ui/core/Avatar';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import Button from '@material-ui/core/Button';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
 

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };



const classes = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'left',
      color: theme.palette.text.secondary,
      
    },
    
  }));
  const style = {
    root: {
      minWidth: 275,
      backgroundColor:'#263238',
      marginTop: 30,
      
      color: 'white'
    },
    title: {
      fontSize: 30,
      textAlign:'center'
    },
    formStyle : {
      color : '#2979ff',
      marginLeft : 30
    },
    buttonStyle : {
      backgroundColor:'#263238',
    }
}
class BookList extends Component {
    constructor(props){
        super(props)
        this.state = {
            successful : true,
            message:''
        }
    }
    handleLogin = (e) => {
      localStorage.setItem('exportin', true);
            this.props.history.push('/Addbook');
            window.location.reload();
      }
    successful= () => {
        this.setState({
          successful: false,
          message: "Sucess- Book Deleted Sucessfully"
        })
      }
    render(){
    return (
        <div className={classes.root}  style={{ padding: 8}}>
        <Grid container spacing={1} >
          <Grid item xs>
          </Grid>
          <Grid item xs = {10}>
          <Paper>
              <Card style={style.root} variant="outlined">
              <Grid container spacing={1} >
              <Grid item xs/>
                <Grid item xs = {12}>
                {this.state.successful ? 
                    (<MaterialTable style = {{margin:20}} icons={tableIcons}
                        title = {<><ListAltIcon fontSize = "medium"/>Book List</> }
                        columns={[
                        { title: 'Title', field: 'Title' },
                        { title: 'Author', field: 'Author' },
                        { title: 'IBSN Number', field: 'IBSN Number', type: 'numeric' },
                        { title: 'Price', field: 'Price' },
                        {
                            title: 'Language',
                            field: 'Language',
                            lookup: { 1: 'English', 2: 'Tamil', 3: 'Shinhala' },
                        },
                        {
                            title: 'Genere',
                            field: 'Genere',
                            lookup: { 1: 'Article', 2: 'Drama', 3: 'Science' },
                        },
                        ]}
                        data={[
                        { Title: <><Avatar><PersonPinIcon /></Avatar>Spring in action</>, Author: 'Craig Walls', IBSN_Number: 1234, Price: 100,Language:1,Genere:2 },
                        { Title: <><Avatar><PersonPinIcon /></Avatar>Spring MicroServices in actions1</>, Author: 'johncarnell1', IBSN_Number: 3333, Price: 200,Language:1,Genere:3},
                        { Title: <><Avatar><PersonPinIcon /></Avatar>Spring MicroServices in actions1</>, Author: ' action2  ', IBSN_Number:4444, Price: 300,Language:1,Genere:2},
                        { Title: <><Avatar><PersonPinIcon /></Avatar>SpiderMan</>, Author: 'halloWorld', IBSN_Number: 5678, Price: 500,Language:3,Genere:2},
                        { Title: <><Avatar><PersonPinIcon /></Avatar>FightStory</>, Author: 'mahabharatham', IBSN_Number:8976, Price: 1000,Language:2,Genere:2},
                        { Title: <><Avatar><PersonPinIcon /></Avatar>StoryBook</>, Author: 'Haripoter', IBSN_Number: 6789, Price: 600,Language:2,Genere:3},
                        { Title: <><Avatar><PersonPinIcon /></Avatar>Science World</>, Author: 'Science of World', IBSN_Number: 12467, Price: 600,Language:2,Genere:2},
                        ]}
                        actions={[
                            {
                                icon: CheckBoxIcon,
                                onClick : () => {this.handleLogin()}
                              },
                            rowData => ({
                                icon: DeleteOutline,
                                tooltip: 'Delete User',
                                onClick : () => {this.Sucess()}
                            })
                        ]}
                        options={{
                        actionsColumnIndex: -1
                        }}
                    />):
                    ( (<center><Button style = {{margin:10}}
                        variant="contained"
                        color="secondary"
                        size="small"
                        startIcon={<CheckCircleOutlineIcon />}
                        >
                        <strong> successful</strong>
                      </Button></center>))
                    }
                    </Grid>
              <Grid item xs/>
              </Grid>
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
export default BookList