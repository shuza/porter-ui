import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
	state = {
	    authenticated: false,
	    email: '',
	    password: '',
	    err: '',
	  }
	  
	  renderAuthenticated = () =>{
	  	return (
	  		<h1>You are authenticated </h1>
	  	)
	  }
	  
	  renderLogin = () => {
	      return (
	        <div className="App-intro container">
	          <br />
	          <div className='Login'>
	            <div className='form-group'>
	              <input
	                type="email"
	                onChange={this.setEmail}
	                placeholder='E-Mail'
	                className='form-control' />
	            </div>
	            <div className='form-group'>
	              <input
	                type="password"
	                onChange={this.setPassword}
	                placeholder='Password'
	                className='form-control' />
	            </div>
	            <button className='btn btn-primary' onClick={this.login}>Login</button>
	            <br /><br />
	          </div>
	          <div className='Sign-up'>
	            <div className='form-group'>
	              <input
	                type='input'
	                onChange={this.setName}
	                placeholder='Name'
	                className='form-control' />
	            </div>
	            <div className='form-group'>
	              <input
	                type='email'
	                onChange={this.setEmail}
	                placeholder='E-Mail'
	                className='form-control' />
	            </div>
	            <div className='form-group'>
	              <input
	                type='password'
	                onChange={this.setPassword}
	                placeholder='Password'
	                className='form-control' />
	            </div>
	            <button className='btn btn-primary' onClick={this.signup}>Sign-up</button>
	          </div>
	        </div>
	      );
	    }
		
		getToken = () => {
		    return localStorage.getItem('token');
		  }
		  
		isAuthenticated = () => {
		    return this.state.token || this.getToken() || false;
		  }
	  
		render() {
			const authenticated = this.isAuthenticated();
		    return (
		      <div className="App">
		        <div className="App-header">
		          <h2>Porter</h2>
		        </div>
		        <div>
				{(authenticated) ? this.renderAuthenticated() : this.renderLogin()}
		        </div>
		      </div>
		    );
		  }
}

export default App;
