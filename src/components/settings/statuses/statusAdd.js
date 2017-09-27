import React, { Component } from "react";
import { connect } from "react-redux";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import Checkbox from "material-ui/Checkbox";
import { SketchPicker } from 'react-color';

import {addStatus} from '../../../redux/actions';
import {processInteger} from '../../helperFunctions';


class StatusAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_active: true,
      title: "",
      description: "",
      order: "1",
      color: "",
    };
  }

  submit(){
    let status=Object.assign({},this.state,{order:parseInt(this.state.order)});
    this.props.addStatus(status);
    this.props.history.goBack();
  }

  render() {
    return (
      <div>
        <div
          style={{
            borderBottom: "thick solid black",
            borderWidth: 1,
            marginBottom: 10
          }}
        >
          <h2>Add task status</h2>
        </div>
        <Checkbox label="Active" checked={this.state.is_active} onCheck={()=>this.setState({is_active:!this.state.is_active})} />
        <TextField
          hintText=""
          floatingLabelText="Status name"
          floatingLabelFixed={true}
          fullWidth={true}
          onChange={(event,value)=>this.setState({title:value})}
          value={this.state.title}
        />
        <TextField
          hintText=""
          floatingLabelText="Status description"
          floatingLabelFixed={true}
          fullWidth={true}
          onChange={(event,value)=>this.setState({description:value})}
          value={this.state.description}
        />
        <TextField
          hintText=""
          floatingLabelText="Order"
          floatingLabelFixed={true}
          fullWidth={true}
          onChange={(event,value)=>{let result = processInteger(value);this.setState({order:(result?result:this.state.order)})}}
          value={this.state.order}
        />
        <h3 style={{backgroundColor:this.state.color?this.state.color:'black',color:'white'}}>Color</h3>
        <SketchPicker
          color={this.state.color}
          onChange={(val)=>this.setState({color:val.hex})}
        />
        <div style={{marginTop:20,}}>
          <RaisedButton
            label="Cancel"
            onClick={this.props.history.goBack}
            secondary={true}
          />
          <RaisedButton
            style={{ position: "absolute", right:10}}
            label="Save"
            onClick={this.submit.bind(this)}
            primary={true}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ taskData }) => {
  return {};
};

export default connect(mapStateToProps, {addStatus})(StatusAdd);
