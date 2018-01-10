import React from 'react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { compose } from 'recompose';
import firebase, { auth } from '../stores/firebase';

const withAuthorization = (condition) => (Component) => {
	class WithAuthorization extends React.Component {
		componentDidMount() {
			auth.onAuthStateChanged(authUser => {
				if (!condition(authUser)){
					console.log('cool')
					this.props.history.push('loginreg')
				}
			});
		}
		
		render() {
			console.log(this.props.authStore.user,'user')
			return this.props.authStore.user ? <Component/>: null;	
		}
	}
	
	return compose(
		withRouter,
		inject('authStore'),
		observer
	)(WithAuthorization);
}

export default withAuthorization;

