import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import { ButtonGroup } from '@material-ui/core';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
     
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
