import React, { Component } from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { auth } from '../stores/firebase';
import LoggedIn from './NavBar/logged-in-nav';

@inject('authStore')
@withRouter
@observer
class NavBar extends Component {
	
	handleClick(path) {
		this.props.history.push(path)
	}
	
	handleLogOut() {
		auth.signOut()
	}
	
	render() {
		return (
			<Menu vertical>
					{ this.props.authStore.user ? 
					<div>
						<LoggedIn history={this.props.history} handleLogOut={this.handleLogOut}/>	
					</div>
					:
				<div>
					<Menu.Item>
						Fitr
					</Menu.Item>
					<Menu.Item>
						Register
					</Menu.Item>		
				</div>
					}
			</Menu>
		)
	}
}

export default NavBar
