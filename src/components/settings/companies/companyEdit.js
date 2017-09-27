import React, { Component } from "react";
import { connect } from "react-redux";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import Checkbox from "material-ui/Checkbox";
import {editCompany,openEditingOfCompany} from '../../../redux/actions';
import {processInteger} from '../../helperFunctions';

class CompanyEdit extends Component {
  constructor(props) {
    super(props);
    if(this.props.company){
      this.state = {
        title:this.props.company.title,
        subscription_time:this.props.company.subscription_time,
        ico:this.props.company.ico,
        dic:this.props.company.dic,
        ic_dph:this.props.company.ic_dph,
        street:this.props.company.street,
        city:this.props.company.city,
        zip:this.props.company.zip,
        country:this.props.company.country,
        is_active:true,
        phone:this.props.company.phone
      };
    }
    else{
      this.state = {
        title:'',
        subscription_time:'',
        ico:'',
        dic:'',
        ic_dph:'',
        street:'',
        city:'',
        zip:'',
        country:'',
        is_active:true,
        phone:''
      };
    }
  }

  componentWillMount(){
    if(!this.props.company){
      this.props.history.goBack();
      this.props.openEditingOfCompany(parseInt(this.props.match.params.id),this.props.history);
    }
  }

  submit(){
    let company=Object.assign({},this.state,{subscription_time:parseInt(this.state.subscription_time)});
    this.props.editCompany(company,this.props.company.id);
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
          <h2>Company Edit</h2>
        </div>
        <Checkbox label="Active" checked={this.state.is_active} onCheck={()=>this.setState({is_active:!this.state.is_active})} />
        <TextField
          hintText=""
          floatingLabelText="Company name"
          floatingLabelFixed={true}
          fullWidth={true}
          onChange={(event,value)=>this.setState({title:value})}
          value={this.state.title}
        />
        <TextField
          hintText=""
          floatingLabelText="Subscription time"
          floatingLabelFixed={true}
          fullWidth={true}
          onChange={(event,value)=>{let result = processInteger(value);this.setState({subscription_time:(result?result:this.state.subscription_time)})}}
          value={this.state.subscription_time}
        />

        <TextField
          hintText=""
          floatingLabelText="ICO"
          floatingLabelFixed={true}
          fullWidth={true}
          onChange={(event,value)=>this.setState({ico:value})}
          value={this.state.ico}
        />
        <TextField
          hintText=""
          floatingLabelText="DIC"
          floatingLabelFixed={true}
          fullWidth={true}
          onChange={(event,value)=>this.setState({dic:value})}
          value={this.state.dic}
        />
        <TextField
          hintText=""
          floatingLabelText="IC DPH"
          floatingLabelFixed={true}
          fullWidth={true}
          onChange={(event,value)=>this.setState({ic_dph:value})}
          value={this.state.ic_dph}
        />
        <TextField
          hintText=""
          floatingLabelText="Phone"
          floatingLabelFixed={true}
          fullWidth={true}
          onChange={(event,value)=>this.setState({phone:value})}
          value={this.state.phone}
        />
        <TextField
          hintText=""
          floatingLabelText="Street"
          floatingLabelFixed={true}
          fullWidth={true}
          onChange={(event,value)=>this.setState({street:value})}
          value={this.state.street}
        />
        <TextField
          hintText=""
          floatingLabelText="City"
          floatingLabelFixed={true}
          fullWidth={true}
          onChange={(event,value)=>this.setState({city:value})}
          value={this.state.city}
        />
        <TextField
          hintText=""
          floatingLabelText="ZIP"
          floatingLabelFixed={true}
          fullWidth={true}
          onChange={(event,value)=>this.setState({zip:value})}
          value={this.state.zip}
        />
        <TextField
          hintText=""
          floatingLabelText="Country"
          floatingLabelFixed={true}
          fullWidth={true}
          onChange={(event,value)=>this.setState({country:value})}
          value={this.state.country}
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
  const {company} = taskData;
  return {company};
};

export default connect(mapStateToProps, {editCompany,openEditingOfCompany})(CompanyEdit);
