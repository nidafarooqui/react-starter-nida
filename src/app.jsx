import React from "react";
import ReactDOM from "react-dom";
import { DatePicker, message } from "antd";
import "antd/dist/antd.css";
import styled from "styled-components";

const DateBox = styled.div`
  width: 400;
  margin: "100px auto";
`;

const Label = styled.div`
  margin-top: 20;
`;

class App extends React.Component {
  state = {
    date: null
  };

  handleChange = date => {
    message.info(`Selected Date: ${date ? date.format("YYYY-MM-DD") : "None"}`);
    this.setState({ date });
  };

  render() {
    const { date } = this.state;
    return (
      <DateBox>
        <DatePicker onChange={this.handleChange} />
        <Label>
          Selected Date: {date ? date.format("YYYY-MM-DD") : "None"}
        </Label>
      </DateBox>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
