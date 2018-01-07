import React, { Component } from 'react';
import logo from './logo.svg';
import { observer, inject } from 'mobx-react';
import { Switch, Redirect, Route, withRouter } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
//components
import TdeeForm from './comps/tdee_calc';
import MealTrack from './comps/meal_track';
import NavBar from './comps/navbar';
import Test from './comps/test';
import WaterTrack from './comps/water_track';
import DailySummary from './comps/daily_summary';
import MeasTrack from './comps/measureTrack';
import LoginReg from './comps/login_reg';
import PrivateRoute from './comps/private_route';
//devtools
import DevTools from 'mobx-react-devtools';

@inject('authStore')
@withRouter
@observer
class App extends Component {
  render() {
    return (
			<Grid>	
			<DevTools/>	
					<Grid.Column width={3}>
						<NavBar/>
					</Grid.Column>
					<Grid.Column width={12} verticalAlign="middle">
						<Switch>
							<Route path="/tdee" component={TdeeForm}/>
							<Route path="/mealtrack" component={MealTrack}/>
							<Route path="/meastrack" component={MeasTrack}/>
							<Route path="/watertrack" component={WaterTrack}/>
							<Route path="/test" component={Test}/>
							<PrivateRoute path="/dailysummary" component={DailySummary}/>
							<Route path="/" component={LoginReg}/>
						</Switch>
					</Grid.Column>
			</Grid>
          );
  }
}

export default App;
