import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import {Link, BrowserRouter as Router, Switch, Route} from 'react-router-dom';


class Profile extends Component {
  constructor() {
    super()
    this.state = {
      nome: '',
      email: '',
      errors: {}
    }
  }
  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
      nome: decoded.nome,
      email: decoded.email
    })
  }

  render() {
    return (
 
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">PROFILE</h1>
          </div>
          <table className="table col-md-6 mx-auto">
            <tbody>
              <tr>
                <td>Fist Name</td>
                <td>{this.state.nome}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{this.state.email}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>
                <Link to="/cadastro"><a href="#" className="list-group-item list-group-item-action but aa">Acessar Sistema</a></Link></td>
              </tr>


            </tbody>
          </table>
          
        </div>
      </div>
    );
  }
}

export default Profile
