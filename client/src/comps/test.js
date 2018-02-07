import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Input } from 'semantic-ui-react';
import LoginForm from './login_form';
import moment from 'moment';
import testStore from '../stores/testStore';
import firebase from '../stores/firebase';
import { compose } from 'recompose';
import withAuthorization from './sessionAcc';
import authStore from '../stores/authStore';

@observer
class Test extends Component {
	
	render() {
		const dataStore = new testStore(authStore.user) 
		const data = dataStore.getData()
		console.log(data, 'data')
		const dataItems = data.map((item) =>
			  <li>{item.calories}</li>
		);
		return( 
			<div> 
				<ul>{dataItems}</ul>
			</div>
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


const authCondition = authUser => !!authUser;
export default compose(withAuthorization(authCondition))(Test)
