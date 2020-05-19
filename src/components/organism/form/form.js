import React, { Component } from "react";

const form = {
  flex1: {
    flex: 1
  }
};



class Form extends Component {
  static defaultProps = {
    onClose: () => {},
    isOpen: false
  };
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      selectedoption: "",
      selectbox: "",
      userArr : []
    };
  }
  handleOptionChange = (changeEvent) => {
    this.setState({
      selectedoption: changeEvent.target.value
    });
  }

  
  handleSubmit = (evt) => {
    evt.preventDefault();
    //const elements = evt.target.elements
    const { firstname, lastname, email, selectedoption, selectbox } = this.state;
    const userInput = {
      userFirstName : firstname,
      userLastName  : lastname,
      userEmail     : email,
      userGender    : selectedoption,
      userDesignation: selectbox
    }
    const userArr = [...this.state.userArr, userInput];
    this.setState({ 
      userArr
    })
    localStorage.setItem('userArr', JSON.stringify(userArr));

  }

  render() {
    return (
      <section className="p-5 d-flex col-6" style={{margin:"auto"}}>
        <form className="border border-dark p-4"  onSubmit={this.handleSubmit} >
        <div className="form-group " >
            <label htmlFor="userFN" className="mr-2">
              FirstName:{" "}
            </label>
            <input
              id="userFN"
              type="text"
              className="p-half"
              style={form.flex1}
              value={this.state.firstName}
              onChange={e => this.setState({firstname: e.target.value})}
            />
          </div>
          <div className="form-group d-flex">
            <label htmlFor="userLN" className="mr-2">
              LastName:{" "}
            </label>
            <input
              id="userLN"
              type= "text"
              className="p-half"
              style={form.flex1}
              value={this.state.lastName}
              onChange={e => this.setState({lastname: e.target.value})}
            />
          </div>
          
          <div className="form-group d-flex">
            <label htmlFor="userid" className="mr-2">
              Email:{" "}
            </label>
            <input
              id="userid"
              type="email"
              className="p-half"
              style={form.flex1}
              value={this.state.email}
              onChange={e => this.setState({email: e.target.value})}
            />
          </div>
          <div className="form-group d-flex">
            <label>Gender</label>
            <input type="radio" name="male" 
                                   value="male"
                                   checked={this.state.male === 'male'} 
                                   onChange={this.handleOptionChange} />Male<br/>
            <input type="radio" name="female" 
                                   value="female"
                                   checked={this.state.male === 'female'} 
                                   onChange={this.handleOptionChange} />Female<br/>
          </div>
          <div className="form-group d-flex">
            <label>Department</label>
            <select id="cars" onChange={e => this.setState({selectbox: e.target.value})} value={this.state.selectbox}>
              <option value="engg">Engg</option>
              <option value="marketing">Marketing</option>
              <option value="finance">Finance</option>
              <option value="hr">HR</option>
            </select>
          </div>
          <button
            type="submit"
            value="Log In"
            data-test="submit"
            className="btn btn-primary mt-4"

            >
              Log In
          </button>
        </form>
      </section>
    );
  }
}

export default Form;
