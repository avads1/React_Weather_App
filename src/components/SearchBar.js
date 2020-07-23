import React, { Component } from "react";
import "../css/SearchBar.css";
import { Input, Message, Form } from "semantic-ui-react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      warning: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.sendValueToParent = this.sendValueToParent.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  sendValueToParent(event) {
    event.preventDefault();
    this.props.callBackFromParent(this.state.value);
  }

  render() {
    const errorMessage = (
      <Message error header="There was an error" content={this.props.error} />
    );

    return (
      <div className="SearchBar">
        {this.props.error && errorMessage}
        <Form onSubmit={this.sendValueToParent}>
          <Input
            className="SearchBar-input"
            placeholder="Please enter location"
            action={{ icon: "search" }}
            onChange={this.handleChange}
            value={this.state.value}
            size="medium"
            type="text"
            autoFocus
          />
        </Form>
      </div>
    );
  }
}

export default SearchBar;
