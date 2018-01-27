import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { compose } from 'recompose';
//Components
import FirstSection from './first-section';
import SecondSection from './second-section';
import RecentMeals from './recent-meals';
//Auth Component
import withAuthorization from '../sessionAcc';


@inject('mealTrackStore')
@observer
class MealTrack extends Component {
	
	componentDidMount() {
		this.props.mealTrackStore.loadMeals()
	}
	
	render() {
		const { mealTrackStore } = this.props
		const { selection, firstSection, date, setDate, setfirstSection, changeDays, resetStore, setmealSubmit, getDailyMeals } = mealTrackStore
		
		if(firstSection === true) {
			return (
				<div>
					<FirstSection selection={selection} setfirstSection={setfirstSection} date={date} setDate={setDate} changeDays={changeDays} getDailyMeals={getDailyMeals}/>
					<RecentMeals/>
				</div>
			)}

		return (
			<div>
				<SecondSection selection={selection} setfirstSection={setfirstSection} resetStore={resetStore} setmealSubmit={setmealSubmit}/>
			</div>
		)}
}

const authCondition = authUser => !!authUser;

export default compose(withAuthorization(authCondition))(MealTrack)
