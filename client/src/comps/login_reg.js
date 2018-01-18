import React, { Component } from 'react';
import { Form, Message, Button } from 'semantic-ui-react';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import firebase, { auth } from '../stores/firebase.js';
import * as routes from '../constants/routes';

const LoginForm = (props) => {
	
	const SubmitButton = withRouter(({ history, ...props }) =>
		(
		<Button
			onClick={() => { props.handleSubmit(history.push('/dailysummary'))}}
		>
			Login	
		</Button>
	))
	
	return (	
		<Form>
				<Form.Input label="Email" name="email" error={props.authError} onChange={props.handleChange}/>
				<Form.Input label="Password" name="password" type="password" error={props.authError} onChange={props.handleChange}/>
				<SubmitButton handleSubmit={props.handleSubmit}/>
				<Message>
					Not a member? <div onClick={props.handleSwitch} style={{"cursor":"pointer"}}><a> Register </a></div>
				</Message>
		</Form>
	)
}

const RegisterForm = (props) => {
	return (
		<Form>
			<Form.Input label="Email" name="email" onChange={props.handleChange}/>
			<Form.Input label="Password" type="password" name="password" onChange={props.handleChange}/>
			<Form.Input label="Re-Enter Password" type="password" name="password" onChange={props.handleChange}/>
			<Form.Button onClick={props.handleRegister}>
				Register
			</Form.Button>
			<Form.Button>
				Cancel
			</Form.Button>
		</Form>
	)
}


@inject('authStore')
@withRouter
@observer
class LoginReg extends Component {
	
	handleSubmit() {
		const { email, password } = this.props.authStore
		console.log(email,password)
		auth.signInWithEmailAndPassword(email,password)
			.then((user) => { 
				this.props.authStore.setUser(user); console.log(user)
			}).then(() => {
				this.props.history.push(routes.HOME)
			}).then(() => this.props.authStore.setAuthError(false)).
			catch(()=> this.props.authStore.setAuthError(true))
	}

	handleChange(name,value) {
		if(name === 'email') {
			this.props.authStore.setEmail(value.toString().trim())
		}
		else {
			this.props.authStore.setPassword(value.toString().trim())
		}
	}
	
	handleSwitch() {
		this.props.authStore.switchMode()
	}

	handleRegister() {
		this.props.authStore.registerUser()
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
