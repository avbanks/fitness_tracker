import React, { Component } from 'react';
import { inject } from 'mobx-react';
import firebase, { auth } from '../stores/firebase';

const withAuthentication = (Component) => {
	@inject('authStore')
	class WithAuthentication extends Component {
		componentDidMount() {
			const { authStore } = this.props 		
			console.log('yoooo')
			auth.onAuthStateChanged(user => {
				user
					? authStore.setUser(user)
					: authStore.setUser(null);
				console.log('here')
			});	
		}
		render() {
			return(
				<Component/>
			)
		}
	}
}
export default withAuthentication;


