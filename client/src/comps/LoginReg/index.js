import React, { Component } from 'react';
import { Grid, Form, Message, Button } from 'semantic-ui-react';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { auth } from '../../stores/firebase.js';
import * as routes from '../../constants/routes';
//Components
import LoginForm from './login-form';
import RegisterForm from './register-form';


@inject('authStore')
@withRouter
@observer
class LoginReg extends Component {
		
	handleSubmit() {
		const { email, password, setActions } = this.props.authStore
		const { history } = this.props
		console.log(email,password)
		auth.signInWithEmailAndPassword(email,password)
			.then((user) => { 
				setActions('user',user); console.log(user)
			}).then(() => {
				history.push(routes.HOME)
			}).then(() => setActions('authError',false))
			.catch(()=> setActions('authError',true))
	}

	handleChange(name,value) {
		const { setActions } = this.props.authStore
		if(name === 'email') {
			setActions('email',value.toString().trim())
		}
		else {
			setActions('password',value.toString().trim())
		}
	}
	handleSwitch() {
		this.props.authStore.setActions('switchMode')
	}

	handleRegister() {
		this.props.authStore.setActions('register')
	}
	render() {
		const { loginForm } = this.props.authStore;
		if(loginForm){
		return(
		<div className="login-form">
		<style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
		<Grid textAlign='center' style={{ height: '100' }} verticalAlign='middle'>
			<Grid.Column style={{ maxWidth : 450 }} >
				<LoginForm authError={this.props.authStore.authError} handleSubmit={() => this.handleSubmit()} handleChange={(e, {name, value}) => this.handleChange(name,value)} handleSwitch={() => this.handleSwitch()}/>
			</Grid.Column>	
		</Grid>
		</div>
		)}
		else {
			return(
			<RegisterForm handleChange={(e, {name,value}) => this.handleChange(name,value)} handleRegister={() => this.handleRegister()}/>
			)
		}
	}
}

export default LoginReg
