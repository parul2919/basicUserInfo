import React, {  PureComponent } from "react";

class UserList extends PureComponent {
    componentDidMount() {
        const userArray = localStorage.getItem('formArr') ;
        console.log('array', userArray);
      }
    render() {
        const {userList, index} = this.props;
    return(
        <div className="container-fluid" key={index}>
            <div className="row">
            <section className="d-flex align-items-center flex-wrap text-center col-6" style={{margin:"auto"}}>
                <div className="border border-dark col-12 mt-3">
                    <div>Name: {userList.userFirstName} {userList.userLastName}</div>
                    <div>Email: {userList.userEmail}</div>
                    <div>Gender: {userList.userGender}</div>
                    <div>Department: {userList.userDesignation}</div>
                </div>
            </section>
            </div>
        </div>
    )
  }
}

  export default UserList;