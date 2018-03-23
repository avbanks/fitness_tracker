import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Icon, Input, Label, Table } from 'semantic-ui-react';
import mealsFirebaseStore from '../../stores/meals-firebase-store';
//helpers
import getCurrentMeals from '../../helpers/get-current-meals';


@inject('mealTrackStore','authStore')
@observer
class RecentMeals extends Component {
	
	render() {
	const { mealTrackStore } = this.props
	const dataStore = new mealsFirebaseStore(this.props.authStore.user)
	const data = dataStore.getData()	
	const currentMeals = getCurrentMeals(data, mealTrackStore.date) 
	const removeItem = item => mealTrackStore.deleteMeal(item)	
	
	const listItems = currentMeals.map( item => 
		<Table.Row key={item.val().id}>
			<Table.Cell>{item.val().timeofday}</Table.Cell>
			<Table.Cell>{item.val().brand}</Table.Cell>
			<Table.Cell>{item.val().description}</Table.Cell>
			<Table.Cell>{item.val().calories}</Table.Cell>
			<Table.Cell><Label onClick={() => null}><Icon link name="write"/></Label></Table.Cell>
			<Table.Cell><Label onClick={() => removeItem(item.val().id)}><Icon link name="remove"/></Label></Table.Cell>
			<Table.Cell><Input placeholder="test" defaultValue="sgo"/></Table.Cell>
		</Table.Row>
	)
	
		return(
			<Table celled padded>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell collapsing>Meal</Table.HeaderCell>
						<Table.HeaderCell collapsing>Brand</Table.HeaderCell>
						<Table.HeaderCell collapsing>Description</Table.HeaderCell>
						<Table.HeaderCell collapsing>Serving Size</Table.HeaderCell>
						<Table.HeaderCell collapsing>Servings Per</Table.HeaderCell>
						<Table.HeaderCell collapsing>Calories</Table.HeaderCell>
						<Table.HeaderCell collapsing>Carbs</Table.HeaderCell>
						<Table.HeaderCell collapsing>Protein</Table.HeaderCell>
						<Table.HeaderCell collapsing>Fat</Table.HeaderCell>
						<Table.HeaderCell collapsing>Delete</Table.HeaderCell>
					</Table.Row>
				</Table.Header>
						{ !this.props.mealTrackStore.currentMeals ? null : 
								<Table.Body>{listItems}</Table.Body>						
						}
			</Table>
	)
	}
}

export default RecentMeals
