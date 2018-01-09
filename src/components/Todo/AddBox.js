import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import Save from 'material-ui-icons/Save';
import { database } from "../../firebase/firebase";
import firebase from 'firebase';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 250,
    },
    menu: {
      width: 250,
    },
});
class AddBox extends Component {
    state = {
        inputText: '',
    };

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };
    
    handleMouseDownAdd = event => {
        event.preventDefault();
    };
    
    handleClickAdd = () => {
        if (this.state.inputText.length > 0 ) {
        database.ref('/tasks')
        .push( {
          name: this.state.inputText,
          checked: false,  
          timeStamp: firebase.database.ServerValue.TIMESTAMP,      
        })
        .then(() => {
            console.log('Saved :-)');
            this.setState({
                inputText: '',
            })
        })
        .catch(() => console.log('ERROR! Nothing saved!!!'))
        }
    };
    
    catchReturn = (ev) => {      
      if (ev.key === 'Enter') {
        this.handleClickAdd();
        ev.preventDefault();
      }
    };  

    render() {
        const { classes } = this.props;

        return (
            <FormControl className={classes.formControl}>
            <InputLabel htmlFor="inputField">Add task</InputLabel>
            <Input
              id="inputField"
              autoFocus
              type="text"
              value={this.state.inputText}
              onChange={this.handleChange('inputText')}
              onKeyPress={ this.catchReturn}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={this.handleClickAdd}                    
                    onMouseDown={this.handleMouseDownAdd}
                    color="primary"
                  >
                     <Save />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        )
    }
}

AddBox.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
 export default withStyles(styles)(AddBox);