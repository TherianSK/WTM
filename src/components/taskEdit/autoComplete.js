import React from "react";
import RaisedButton from "material-ui/RaisedButton";
import Popover from "material-ui/Popover";
import Menu from "material-ui/Menu";
import MenuItem from "material-ui/MenuItem";
import SaveIcon from "material-ui/svg-icons/content/save";

export default class changeStatus extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  handleTouchTap = event => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false
    });
  };

  render() {
    return (
      <div>
        <p
          style={{
            marginLeft: 20,
            marginBottom: 0,
            fontSize: 16,
            color: "rgba(0, 0, 0, 0.3)"
          }}
        >
          Status
        </p>
        <RaisedButton
          onClick={this.handleTouchTap}
          label="NEW"
          style={{
            marginLeft: 20,
            width: "90%"
          }}
          backgroundColor="rgb(30, 144, 255)"
          labelColor="#ffffff"
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
          targetOrigin={{ horizontal: "left", vertical: "top" }}
          onRequestClose={this.handleRequestClose}
        >
          <Menu>
            <MenuItem
              style={{
                margin: 10,
                color: "#ffffff",
                backgroundColor: "rgb(65, 117, 5)"
              }}
              primaryText="OPEN"
            />
            <MenuItem
              style={{
                margin: 10,
                color: "#ffffff",
                backgroundColor: "#ffa000"
              }}
              primaryText="PENDING"
            />
            <MenuItem
              style={{
                margin: 10,
                color: "#ffffff",
                backgroundColor: "rgb(169, 169, 169)"
              }}
              primaryText="CLOSED"
            />
          </Menu>
        </Popover>
      </div>
    );
  }
}
