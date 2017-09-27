import Results from './results';
import React, { Component } from 'react';
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
class Form extends Component {
  state = {
    value: 1
  };
  render(){
    return (
      <div style={{ borderRight: "1px solid grey", padding:10, margin:10 }}>
        <div style={{ marginTop: 10, marginBottom: 10 }}>
          <RaisedButton
            label="RESET"
            secondary={true}
            style={{ marginLeft: 5 }}
          />
          <RaisedButton
            label="FILTER"
            secondary={true}
            style={{ marginLeft: 5 }}
          />
        </div>
        <TextField
          floatingLabelStyle={{fontSize:17}}
          style={{fontSize:30}}
          floatingLabelText="Task name"
          fullWidth={true}
          floatingLabelFixed={true}
        />
        <SelectField
          floatingLabelText="Project"
          value={this.state.value}
          onChange={this.handleChange}
          fullWidth={true}
        >
          <MenuItem value={1} primaryText="Project 1 " />
        </SelectField>
      </div>
    );
  }
}
export default Form;
