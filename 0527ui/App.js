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
          color="primary"
       />}
      label="Custom size"
    /> 
  )
}


function App() {

  return (
    <div className="App">
      <header className="App-header">
        
       
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
  );
}

export default App;
