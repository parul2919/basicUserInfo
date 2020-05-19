import React, { Component } from "react";
import Form from "./../../organism/form/form";

class UserForm extends Component {
    render() {
    // instyling with a constant 
    const divStyle = {
        backgroundColor: "light-grey",
        width: "100%",
        height: "800px"
      };
    return(
        <div className="container-fluid">
            <div className="row">
            <section className="d-flex align-items-center flex-wrap text-center" style={divStyle}>
            <div className="col-12">
                {this.props.children}
            </div>
            </section>
            </div>
        </div>
    )
  }
}

  export default UserForm;
