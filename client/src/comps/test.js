import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Input } from 'semantic-ui-react';
import LoginForm from './login_form';
import moment from 'moment';

//const form = new LoginForm

@inject('testStore')
@observer
class Test extends Component {
	constructor(props) {
		super(props)
		console.log('TEST')
	}
	
	render() {
		
		const { testStore } = this.props
		const { date, setDate } = testStore
		const onChange = value => {setDate(value); console.log(date)} 
		return( 
				<h1>Test</h1>	
			/*<form>	
					<Input {...form.$('email').bind()} error={form.$('email').error}/><br/>
					<Input {...form.$('password').bind()}/><br/>
					<Input {...form.$('passwordConfirmation').bind()}/><br/>
					<p>{form.$('email').error}</p>
					<p>{form.$('password').error}</p>
					<p>{form.$('passwordConfirmation').error}</p>
					{console.log(form.$('email').error)}
					{console.log(form.$('password').hasError)}
				</form>*/
		)
	}
}

export default Test
