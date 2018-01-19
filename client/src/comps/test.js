import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Button } from 'semantic-ui-react';
import LoginForm from './login_form';


const form = new LoginForm


@inject('testStore') 
@observer
class Test extends Component{
	

	render() {
		return 
			<form>
				<input/>


			</form>
	}
}

export default Test
