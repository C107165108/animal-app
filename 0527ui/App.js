import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import { ButtonGroup } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import { makeStyles,ThemeProvider,createMuiTheme } from '@material-ui/core/styles';
import { red,orange } from '@material-ui/core/colors';
import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography';
import { SignalWifi1BarLock } from '@material-ui/icons';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <MenuIcon />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
        <SimpleMenu/>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    background:'linear-gradient(45deg,#FE6B8B,#FF8E53)',
    border:0,
    color:'white',
    padding:'5px 30px',
    marginBottom:30,
  },
})

const theme= createMuiTheme({
  typography:{
    h2:{
      fontSize:18,
      marginBottom:15
    }
  },
  palette:{
    primary:{
      main:red[200],
    },
    secondary:{
      main:orange[300],
    } 
  }
})

function Buttomstyles(){
  const classes=useStyles();
  return(
    <Button className={classes.root}>
      Buttom style
    </Button>
  )
}

function CheckBox() {
  
  const [checked,setChecked]= React.useState(true)
  
  return(
    
    <FormControlLabel
     control={
       <Checkbox
          checked={checked}
          onChange={(e)=>setChecked(e.target.checked)}
          inputProps={{'aria-label': 'primary checkbox' }}
            // checked={state.checkedB}
            // onChange={handleChange}
          name="checkedB"
          color="secondary"
       />}
      label="CHEAKBOX"
    /> 
  )
}


function App() {

  return (
    <ThemeProvider theme={theme}>
      <ButtonAppBar/>
    <div className="App">
      <header className="App-header">
      
        
        <Typography variant="h2" className="H2">
        Material-UI
        </Typography>

        <Buttomstyles/>
        
       
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
          variant="outlined"
        />

        <CheckBox/>     
          
     
        <ButtonGroup>

          <Button
             variant="contained"
             color="primary"
             size="small"
             // className={classes.button}
             endIcon={<SaveIcon />}
           >
           Save
           </Button>

           <Button
            variant="contained"
            color="primary"
            size="small"
            // className={classes.button}
            endIcon={<DeleteIcon />}
           >
            Delete
           </Button>

        </ButtonGroup>
        
        

      </header>
    </div>
    </ThemeProvider>
  );
}

export default App;
