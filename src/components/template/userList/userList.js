import React, { Component } from "react";
import UserListLeftPane from "./../../organism/userListLeftPane/userListLeftPane";
import UserListRightPane from "./../../organism/userListRightPane/userListRightPane";

class UserList extends Component {
      
    render() {
        // instyling with a constant 
        const divStyle = {
          backgroundColor: "light-grey",
          width: "100%",
          height: "800px"
        };
        const userArray = JSON.parse(localStorage.getItem("userArr"));
    return(
        <div className="container-fluid">
            <div className="row">
            <section className="d-flex align-items-center flex-wrap text-center" style={divStyle} >
                <div className="col-4">
                  <UserListLeftPane userArray={userArray}/>
                </div>
                <div className="col-7 border-left border-dark">
                  <UserListRightPane userArray={userArray}/>
                </div>
            </section>
            </div>
        </div>
    )
  }
}

  export default UserList;