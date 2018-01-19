import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Input } from 'semantic-ui-react';
import LoginForm from './login_form';


const form = new LoginForm

@observer
class Test extends Component {
	
	render() {
		return( 
			<div>
				<form>	
					<Input {...form.$('email').bind()} error={form.$('email').error}/><br/>
					<Input {...form.$('password').bind()}/><br/>
					<Input {...form.$('passwordConfirmation').bind()}/><br/>
					<p>{form.$('email').error}</p>
					<p>{form.$('password').error}</p>
					<p>{form.$('passwordConfirmation').error}</p>
					{console.log(form.$('email').error)}
					{console.log(form.$('password').hasError)}
				</form>
			</div>
		)
	}
}

export default Test
