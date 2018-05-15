import React, { Component } from 'react';
import { autorun } from 'mobx';
import { observer, inject } from 'mobx-react';
import { compose } from 'recompose';
//Components
import FirstSection from './first-section';
import RecentMeals from './recent-meals';
import LoadingComp from '../loading-comp';
//Auth Component
import withAuthorization from '../sessionAcc';

@inject('mealTrackStore')
@observer
class MealTrack extends Component {
	
	constructor(props) {
		super(props)
		autorun(() => {
			this.props.mealTrackStore.setCurrentMeals()
		})
	}
	
	componentDidMount() {
		this.props.mealTrackStore.loadMeals()
	}
	
	render() {
		const { mealTrackStore } = this.props
		const { resetStore, loading, date, setDate, setActions, changeDays, setmealSubmit, getDailyMeals } = mealTrackStore
		
		if(loading) {
			return ( 
				<LoadingComp/>
			)
		}

			return (
				<div>
					<FirstSection 
						setmealSubmit={setmealSubmit} 
						setActions={setActions} 
						date={date} 
						setDate={setDate} 
						changeDays={changeDays} 
						getDailyMeals={getDailyMeals}
						resetStore={resetStore}
					/>
					<RecentMeals/>
				</div>
			)
	}
}


const authCondition = authUser => !!authUser;

export default compose(withAuthorization(authCondition))(MealTrack)
