import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import firebase, { auth } from './stores/firebase';
//components
import TdeeForm from './comps/tdee_calc';
import MealTrack from './comps/meal_track';
import NavBar from './comps/navbar';
import Test from './comps/test';
import WaterTrack from './comps/water_track';
import DailySummary from './comps/daily_summary';
import MeasTrack from './comps/measureTrack';
import LoginReg from './comps/login_reg';
//constants
import * as routes from './constants/routes';
//devtools
import DevTools from 'mobx-react-devtools';

@inject('authStore')
@withRouter
@observer
class App extends Component {
	
	componentDidMount() {
	const { authStore } = this.props		
	auth.onAuthStateChanged(user => {
		user
		? authStore.setUser(user)
		: authStore.setUser(null);
		});	
	}

  render() {
    return (
			<Grid>	
			<DevTools/>	
					<Grid.Column width={3}>
						<NavBar/>
					</Grid.Column>
					<Grid.Column width={12} verticalAlign="middle">
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
