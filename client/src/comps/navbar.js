import React, { Component } from 'react';
import { Menu, Dropdown, Icon } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

@withRouter
class NavBar extends Component {
	
	handleClick = (path) => this.props.history.push(path)

	render() {
		return (
			<Menu vertical>
				<Menu.Item name='home'>
					Home
				</Menu.Item>
				<Dropdown item text="Add Entry">
					<Dropdown.Menu>
						<Dropdown.Item icon='tint' text='Water' onClick={() => this.handleClick('watertrack')}/>
						<Dropdown.Item icon='food' text='Food'onClick={() => this.handleClick('mealtrack')}/>
						<Dropdown.Item icon='bicycle' text='Exercise' onClick={()=> this.handleClick('/')}/>
						<Dropdown.Item icon='area graph' text='Weight' onClick={()=> this.handleClick('/')}/>
			
					</Dropdown.Menu>
				</Dropdown>
				<Menu.Item name='tdee' onClick={() => this.handleClick('/')}>
					TDEE Calculator	
				</Menu.Item>

				<Menu.Item name='profile'>
					Profile	
				</Menu.Item>
				
			</Menu>
		)
	}
}

export default NavBar
