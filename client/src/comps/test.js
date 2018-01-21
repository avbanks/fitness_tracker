import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Input } from 'semantic-ui-react';
import LoginForm from './login_form';
import moment from 'moment';
import DatePicker from 'react-date-picker'

//const form = new LoginForm

@inject('testStore')
@observer
class Test extends Component {
	
	render() {
		const { testStore } = this.props
		const { date, setDate } = testStore
		const onChange = value => {setDate(value); console.log(date)} 
		return( 
				<DatePicker value={date} onChange={onChange}/>
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
