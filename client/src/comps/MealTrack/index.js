import React, { Component } from 'react';
import { Button, Form, Icon, Input, Label, Select, Header, Table } from 'semantic-ui-react';
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
	
	render() {
		const { mealTrackStore } = this.props
		const { selection, firstSection, mealType, date, setDate, changeDays } = mealTrackStore
		const onClick = () => {
					this.props.mealTrackStore.setfirstSection()
				}
		const onSubmit = () => {
			mealTrackStore.setmealSubmit()
			mealTrackStore.resetStore()
		}
		const onChange = (value) => { setDate(value) }
		
		if(firstSection === true) {
			return (
				<div>
					<FirstSection selection={selection} setfirstSection={onClick} date={date} setDate={setDate} changeDays={changeDays}/>
					<RecentMeals/>
				</div>
			)
		  }

		return (
			<div>
				<SecondSection selection={selection} setfirstSection={onClick} onSub={onSubmit}/>
			</div>
		)
			}
}

const authCondition = authUser => !!authUser;

export default compose(withAuthorization(authCondition))(MealTrack)
