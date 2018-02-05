import React, { Component } from 'react';
import { Form, Message, Button } from 'semantic-ui-react';
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
		const { email, password } = this.props.authStore
		console.log(email,password)
		auth.signInWithEmailAndPassword(email,password)
			.then((user) => { 
				this.props.authStore.setActions('user',user); console.log(user)
			}).then(() => {
				this.props.history.push(routes.HOME)
			}).then(() => this.props.authStore.setActions('authError',false))
			.catch(()=> this.props.authStore.setActions('authError',true))
	}

	handleChange(name,value) {
		if(name === 'email') {
			this.props.authStore.setActions('email',value.toString().trim())
		}
		else {
			this.props.authStore.setActions('password',value.toString().trim())
		}
	}
	
	handleSwitch() {
		this.props.authStore.setActions('switchMode')
	}

	handleRegister() {
		this.props.authStore.setActions('register')
	}
	
	render() {
		if(this.props.authStore.loginForm){
		return(
			<LoginForm authError={this.props.authStore.authError} handleSubmit={() => this.handleSubmit()} handleChange={(e, {name, value}) => this.handleChange(name,value)} handleSwitch={() => this.handleSwitch()}/>
		)}
		else {
			return(
			<RegisterForm handleChange={(e, {name,value}) => this.handleChange(name,value)} handleRegister={() => this.handleRegister()}/>
			)
		}
	}
}

export default LoginReg
