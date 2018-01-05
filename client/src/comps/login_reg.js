import React, { Component } from 'react';
import { Form, Message } from 'semantic-ui-react';
import { observer, inject } from 'mobx-react';

const LoginForm = (props) => {
	
	return (	
		<Form>
				<Form.Input label="Email" name="email" onChange={props.handleChange}/>
				<Form.Input label="Password" name="password" type="password" onChange={props.handleChange}/>
				<Form.Button onClick={props.handleSubmit}>
					Login
				</Form.Button>
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
			<Form.Button onClick={props.handleRegister}>
				Register
			</Form.Button>
		</Form>
	)
}


@inject('authStore')
@observer
class LoginReg extends Component {

	handleSubmit() {
		this.props.authStore.login()
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
			<LoginForm handleSubmit={() => this.handleSubmit()} handleChange={(e, {name, value}) => this.handleChange(name,value)} handleSwitch={() => this.handleSwitch()}/>
		)}
		else {
			return(
			<RegisterForm handleChange={(e, {name,value}) => this.handleChange(name,value)} handleRegister={() => this.handleRegister()}/>
			)
		}
	}
}

export default LoginReg
