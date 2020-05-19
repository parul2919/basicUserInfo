import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class UserListLeftPane extends Component {
    constructor(props) {
        super(props);
  
        this.state = {
          department: []
        };
    }
    render() {

    return(
        <div className="col-12">
            <h1 className="text-dark">Department Filter</h1>
            <div className="col-12">
            <div className="radio-buttons">
                <span className="pl-3 pr-2">Engg</span>
                <input
                id="engg"
                value="engg"
                name="department"
                type="radio"
                onChange={this.handleChange}
                />

                <span className="pl-3 pr-2">Marketing</span>
                <input
                id="marketing"
                value="marketing"
                name="department"
                type="radio"
                onChange={this.handleChange}
                />

                <span className="pl-3 pr-2">Finance</span>  
                <input
                id="finance"
                value="finance"
                name="department"
                type="radio"
                onChange={this.handleChange}
                />
                
                <span className="pl-3 pr-2">HR</span>
                <input
                id="hr"
                value="hr"
                name="department"
                type="radio"
                onChange={this.handleChange}
                />
            </div>
            </div>
        </div>
    )
  }
}

  export default UserListLeftPane;
