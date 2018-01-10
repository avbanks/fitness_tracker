import React, { Component } from 'react';
import { Menu, Dropdown, Icon } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import firebase, { auth, provider } from '../stores/firebase';

@inject('authStore')
@withRouter
@observer
class NavBar extends Component {
	/*constructor(props) {
		super(props)
		this.handleClick.bind(this);
		this.handleLogin.bind(this);
	}*/
	
	handleClick(path) {
		this.props.history.push(path)
	}
	

	handleLogOut() {
		console.log(this.props.authStore.user)
		console.log('handleLogOut')
		auth.signOut()
		console.log(this.props.authStore.user)
	}
	
	render() {
		return (
			<Menu vertical>
				<Menu.Header name='home' onClick={() => this.handleClick('/')}>
					Home
				</Menu.Header>
				{ this.props.authStore.user ? 
					<div>
					<Dropdown item text="Add Entry">
					<Dropdown.Menu>
						<Dropdown.Item icon='tint' text='Water' onClick={() => this.handleClick('watertrack')}/>
						<Dropdown.Item icon='food' text='Food'onClick={() => this.handleClick('mealtrack')}/>
						<Dropdown.Item icon='bicycle' text='Exercise' onClick={()=> this.handleClick('/')}/>
						<Dropdown.Item icon='area graph' text='Weight' onClick={()=> this.handleClick('meastrack')}/>
					</Dropdown.Menu>
					</Dropdown>
					<Menu.Item name='tdee' onClick={() => this.handleClick('/tdee')}>
							TDEE Calculator	
					</Menu.Item>
					<Menu.Item name='profile'>
							Profile	
					</Menu.Item>
					<Menu.Item onClick={() => { console.log('click'); this.handleLogOut()}}>
						Logout
					</Menu.Item> 
				</div>
					:null }
			</Menu>
		)
	}
}

export default NavBar
