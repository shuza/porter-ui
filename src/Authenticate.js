import React from 'react';

class Authenticate extends React.Component {

  constructor(props) {
    super(props);
  }

  state = {
    authenticated: false,
    email: '',
    password: '',
    err: '',
  }
  
  render(){
	  return(
	  	<div className='Authenticate'>
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
		</div>
	  );
  }
}