import React, { PureComponent } from "react";
import UserTile from "./../../molecule/userTile/userTile";

class UserListRightPane extends PureComponent {
    constructor(props) {
        super(props);
  
        this.state = {
          sortedArr: []
        };
    }
      
    sortArr = () => {
        const userArray = this.props.userArray;
        userArray.sort(function(a, b){
            let nameA=a.userFirstName.toLowerCase(), nameB=b.userFirstName.toLowerCase()
            if (nameA < nameB) //sort string ascending
                return -1 
            if (nameA > nameB)
                return 1
            return userArray; //default return value (no sorting)
            });
            this.setState({
                sortedArr: userArray,
            })
    }
    componentDidMount() {
        this.sortArr();
      }
    render() {
        const userArray = localStorage.getItem("userArr");
        console.log("userArray",userArray)
        console.log("sortedArr", this.state.sortedArr);
        const {sortedArr} = this.state;
    return(
        <div className="col-12">
            <h1 className="text-dark">User List</h1>
            <div className="col-12">
                {
                    sortedArr.map((userList, index) => {
                    return (<UserTile userList={userList} index={index}/>);
                    }
                    
                    )
                }

            </div>
        </div>
    )
  }
}

export default UserListRightPane;