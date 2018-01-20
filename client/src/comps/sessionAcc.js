import React from 'react';
import { inject, observer } from 'mobx-react';
import firebase, { auth } from '../stores/firebase';
import * as routes from '../constants/routes';
import { compose } from 'recompose';

const withAuthorization = (condition) => (Component) => {
	class WithAuthorization extends React.Component {
		componentDidMount() {
			auth.onAuthStateChanged(user => {
				if(!condition(user)) {
					this.props.history.push(routes.LOGINREG)
				}
			})
		}
					
		render(){
			return this.props.authStore.user ? <Component/> : null;
		}
	}

	return compose(inject('authStore'),observer)(WithAuthorization)
}

export default withAuthorization;


