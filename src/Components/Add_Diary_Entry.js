import React, { Component } from "react";
import "./styles/Add_Diary_Entry.css";

class Add_Diary_Entry extends Component {
  render() {
    return (
      <div>
        <h2>Add Dairy Entry</h2>
        <form id="container" onSubmit={this.props.addList}>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={this.props.title}
              id="add_entry_title"
              onChange={this.props.handleChange}
            />
          </label>
          <label>
            Date:
            <input
              type="date"
              name="date"
              value={this.props.date}
              id="add_entry_date"
              onChange={this.props.handleChange}
            />
          </label>
          <label>
            How are you feeling today?:
            <input
              id="add_entry_body"
              name="body"
              value={this.props.body}
              type="text"
              onChange={this.props.handleChange}
            />
          </label>
          <input
            type="submit"
            value="Add Dairy Entry"
            onClick={this.props.addList}
          />
        </form>
      </div>
    );
  }
}

export default Add_Diary_Entry;
