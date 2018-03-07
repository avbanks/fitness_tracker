import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Input, Grid } from 'semantic-ui-react';
import LoginForm from './login_form';
import moment from 'moment';
import testStore from '../stores/testStore';
import firebase from '../stores/firebase';
import { compose } from 'recompose';
import withAuthorization from './sessionAcc';
import authStore from '../stores/authStore';
import getCurrentmeals from '../helpers/get-current-meals';

@observer
class Test extends Component {
	
	render() {
		const dataStore = new testStore(authStore.user) 
		const data = dataStore.getData()
		const currentMeals = getCurrentmeals(data, 'Wed Jan 31 2018')
		const listItems = currentMeals.map((item) => 
			<li>{item.val().calories}</li>
		)
		return( 
			<div> 
				<ul>{listItems}</ul>
			</div>
		)
	}	
}


const authCondition = authUser => !!authUser;
export default compose(withAuthorization(authCondition))(Test)





/*const dataStore = new testStore(authStore.user) 
		const data = dataStore.getData()
		console.log(data, 'data')
		const dataItems = data.map((item) =>
			  <li>{item.calories}</li>
		);
		return( 
			<div> 
				<ul>{dataItems}</ul>
			</div>
					)
	}
*/






/*<form>	
 *					<Input {...form.$('email').bind()} error={form.$('email').error}/><br/>
 *										<Input {...form.$('password').bind()}/><br/>
 *															<Input {...form.$('passwordConfirmation').bind()}/><br/>
 *																				<p>{form.$('email').error}</p>
 *																									<p>{form.$('password').error}</p>
 *																														<p>{form.$('passwordConfirmation').error}</p>
 *																																			{console.log(form.$('email').error)}
 *																																								{console.log(form.$('password').hasError)}
 *																																												</form>*/

