import React, { Component } from "react";
import { BrowserRouter as Router, Route, } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/organism/header/header';
import Footer from './components/organism/footer/footer';
import Homepage from './components/template/homepage/homepage';
import UserForm from './components/template/userform/userform';
import UserList from './components/template/userList/userList';
import Form from "./components/organism/form/form";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      
    };
    this.openModal = this.userInfo.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
    userInfo = (data) => {
         
    }
    render() {
      return (

          <Router>
            <div className="App">
              <Header />
              <Route path="/" exact component={Homepage} />
              <Route path="/userForm" render={() => <UserForm><Form/></UserForm>} />
              <Route path="/userList" component={UserList} />
              <Footer />
            </div>
        </Router>
    );
  }
  openModal(){
    this.setState({
      isModalOpen:true
    })
  }
  closeModal(){
    this.setState({
      isModalOpen:false
    })
  }
}

export default App;
