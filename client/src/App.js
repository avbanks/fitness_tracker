import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import firebase, { auth } from './stores/firebase';
import Loadable from 'react-loadable';
//components
import TdeeForm from './comps/TdeeForm';
import MealTrack from './comps/MealTrack';
import NavBar from './comps/NavBar/index';
import Test from './comps/test';
import WaterTrack from './comps/water_track';
import DailySummary from './comps/daily_summary';
import MeasTrack from './comps/measureTrack';
import LoginReg from './comps/LoginReg';
import LoadingComp from './comps/loading-comp';
//constants
import * as routes from './constants/routes';
//devtools

const AsyncTest = Loadable({
	loader: () => import('./comps/test'),
	loading: LoadingComp
})

const AsyncMealTrack = Loadable({
	loader: () => import('./comps/MealTrack'),
	loading: LoadingComp
})

const AsyncMeasTrack = Loadable({
	loader: () => import('./comps/measureTrack'),
	loading: LoadingComp
})

const AsyncLoginReg = Loadable({
	loader: () => import('./comps/LoginReg'),
	loading: LoadingComp
})

const AsyncWaterTrack = Loadable({
	loader: () => import('./comps/water_track'),
	loading: LoadingComp
})


@inject('authStore')
@withRouter
@observer
class App extends Component {
	
	componentDidMount() {
	const { authStore } = this.props		
	auth.onAuthStateChanged(user => {
		user
		? authStore.setActions('user', user)
		: authStore.setActions('user',null);
		});	
	}

  render() {
    return (
			<Grid style={{ height: '100%' }}>	
					<Grid.Column width={3}>
						<NavBar/>
					</Grid.Column>
					<Grid.Column width={12} >
						<Switch>
							<Route path={routes.TDEE} component={TdeeForm}/>
							<Route path={routes.MEALTRACK} component={MealTrack}/>
							<Route path={routes.MEASTRACK} component={MeasTrack}/>
							<Route path={routes.WATERTRACK} component={WaterTrack}/>
							<Route path={routes.TEST} component={Test}/>
							<Route path={routes.LOGINREG} component={LoginReg}/>
							<Route path={routes.HOME} component={DailySummary}/>
						</Switch>
					</Grid.Column>
			</Grid>
          );
  }
}

export default App;
