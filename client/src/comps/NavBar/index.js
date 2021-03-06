import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import LoggedIn from './logged-in-nav';
import LoggedOut from './logged-out-nav';

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
