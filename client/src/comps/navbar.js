import React, { Component } from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { auth } from '../stores/firebase';
import LoggedIn from './NavBar/logged-in-nav';
import LoggedOut from './NavBar/logged-out-nav';

@inject('authStore')
@withRouter
@observer
class NavBar extends Component {
	
	render() {
		return (
			<Menu vertical>
					{ this.props.authStore.user ? 
					<div>
						<LoggedIn history={this.props.history} handleLogOut={this.handleLogOut}/>
					</div>
					:
					<LoggedOut />	
					}
			</Menu>
		)
	}
}

export default NavBar
