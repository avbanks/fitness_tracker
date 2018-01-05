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
	
	handleLogin(email,password) {
		this.props.authStore.login(email,password)
	}

	handleLogOut() {
		this.props.authStore.logOut()	
	}
	
	componentDidMount() {
		auth.onAuthStateChanged((user) => {
			if(user) {
				this.props.authStore.setUser(user)
			}
			else{
				this.props.authStore.setUser(null)
			}
		})
	}
	
	render() {
		return (
			<Menu vertical>
				<Menu.Item name='home' onClick={() => this.handleClick('/')}>
					Home
				</Menu.Item>
				{ this.props.authStore.user ? 
				<span>
				<Menu.Item onClick={(e) =>{this.handleLogOut()}}>
					Logout
				</Menu.Item> 
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
				</span>:
				<Menu.Item name='login' onClick={() =>{this.handleClick('loginreg')}}>
					Login/Register	
				</Menu.Item> 
				}
			</Menu>
		)
	}
}

export default NavBar
