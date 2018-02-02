import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Input } from 'semantic-ui-react';
import LoginForm from './login_form';
import moment from 'moment';
import testStore from '../stores/testStore';
import MobxWebsocketStore from 'mobx-websocket-store';
import firebase from '../stores/firebase';

//const form = new LoginForm

/*const ref = firebase.database().ref('users/'+ 'PzcsjlPzZpV7LnVubapm9XxQZqd2'+'/meals')
const refListener = (snapshot: firebase.database.DataSnapshot) => {
	this.data = snapshot.val
	this.atom.reportChanged()
}

const store = new MobxWebsocketStore(
	(store) => {
		console.log("Opening websocket")
		ref.on("value", refListener.bind(this))
	},
	(store) => {
		console.log("Closing websocket")
		ref.off("value", refListener.bind(this))
	}
);
*/

	@observer
class Test extends Component {
	
	render() {
		const data = testStore.getData() 
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

export default Test
