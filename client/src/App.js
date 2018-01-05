import React, { Component } from 'react';
import logo from './logo.svg';
import { observer } from 'mobx-react';
import { Switch, Route, withRouter } from 'react-router-dom';
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
//devtools
import DevTools from 'mobx-react-devtools';

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
							<Route path="/loginreg" component={LoginReg}/>
							<Route path="/tdee" component={TdeeForm}/>
							<Route path="/mealtrack" component={MealTrack}/>
							<Route path="/meastrack" component={MeasTrack}/>
							<Route path="/watertrack" component={WaterTrack}/>
							<Route path="/test" component={Test}/>
							<Route path="/" component={DailySummary}/>
						</Switch>
					</Grid.Column>
			</Grid>
          );
  }
}

export default App;
