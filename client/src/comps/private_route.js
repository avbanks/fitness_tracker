import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

@inject('authStore')
@observer
class PrivateRoute extends Component {
	render() {
		const { authStore, ...restProps } = this.props
		if(authStore.user) return <Route {...restProps}/>
		return <Redirect to="/loginreg"/>;
	}
}

export default PrivateRoute 
