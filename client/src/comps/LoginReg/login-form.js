import React from 'react';
import { Button, Form, Message } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

const LoginForm = (props) => {
	
	const SubmitButton = withRouter(({ history, ...props }) =>
		(
		<Button
			onClick={() => { props.handleSubmit(history.push('/dailysummary'))}}>
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

export default LoginForm
