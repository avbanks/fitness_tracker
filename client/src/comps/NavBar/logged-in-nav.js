import React from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';
import { auth } from '../../stores/firebase';

const LoggedIn = props => {
	const handleClick = path => {
		props.history.push(path)
	}
	const handleLogOut = () => {
		auth.signOut()
	}

	return(
			<div>	
				<Dropdown item text="Add Entry">
						<Dropdown.Menu>
							<Dropdown.Item icon='tint' text='Water' onClick={() => handleClick('watertrack')}/>
							<Dropdown.Item icon='food' text='Food'onClick={() => handleClick('mealtrack')}/>
							<Dropdown.Item icon='bicycle' text='Exercise' onClick={()=> handleClick('/')}/>
							<Dropdown.Item icon='area graph' text='Weight' onClick={()=> handleClick('meastrack')}/>
						</Dropdown.Menu>
					</Dropdown>
					<Menu.Item name='tdee' onClick={() => handleClick('/tdee')}>
							TDEE Calculator	
					</Menu.Item>
					<Menu.Item name='profile'>
							Profile	
					</Menu.Item>
					<Menu.Item onClick={() => { handleLogOut()}}>
							Logout
					</Menu.Item> 
		</div>
	)
}

export default LoggedIn
