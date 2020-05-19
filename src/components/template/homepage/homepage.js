import React, { Component } from "react";

class Homepage extends Component {
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
                <h1 className="text-dark">Homepage</h1>
            </div>
            </section>
            </div>
        </div>
    )
  }
}

  export default Homepage;
