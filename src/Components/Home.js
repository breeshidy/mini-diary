import React, { Component } from "react";
import "./styles/Home.css";

class Home extends Component {
  constructor(props) {
    //for extending the table class
    super(props);
    this.state = {
      diary_entries: [
        { id: 1, title: "this is my stuff", date: "20/09/2012" },
        { id: 2, title: "this is my second stuff", date: "20/09/2012" },
        { id: 3, title: "this is my third stuff", date: "20/09/2012" },
      ],
      title: "",
      date: "",
      body: "",
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    // this.setState({ value: e.target.value });
    this.setState({
      id: this.state.id + 1,
      title: e.target.value.title,
      date: e.target.value.date,
      body: e.target.value.body,
    });
  };

  addList = () => {
    this.diary_entries.push({id:this.state.value.id, title:this.state.title, date:this.state.value.date, body:this.state.value.body})
    alert(this.state.diary_entries)

    //this re renders the window
    this.setState({});

  };
  renderTableHeader() {
    let header = Object.keys(this.state.diary_entries[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }

  renderTableData() {
    return this.state.diary_entries.map((diary_entries, index) => {
      const { id, title, date } = diary_entries; //destructuring
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{title}</td>
          <td>{date}</td>
        </tr>
      );
    });
  }
  render() {
    return (
      <div>
        <h2>Timeline</h2>

        <input
          type="text"
          id="searchbar"
          name="searchbar"
          placeholder="Search Bar"
        />
        <input type="text" id="date" name="date" placeholder="Date" />

        <table id="diary_entries">
          <tbody>
            <tr>{this.renderTableHeader()}</tr>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Home;
