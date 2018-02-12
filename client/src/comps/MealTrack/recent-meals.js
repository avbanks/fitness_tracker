import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Icon, Label, Table } from 'semantic-ui-react';
import mealsFirebaseStore from '../../stores/meals-firebase-store';

@inject('mealTrackStore','authStore')
@observer
class RecentMeals extends Component {
	
	onRemove(id) {
		this.props.mealTrackStore.deleteMeal(id)	
	}

	render() {
	console.log(this.props.mealTrackStore.allMeals)
	return(
		<Table celled padded>
			<Table.Header>
				<Table.Row>
					<Table.HeaderCell>Meal</Table.HeaderCell>
					<Table.HeaderCell>Calories </Table.HeaderCell>
					<Table.HeaderCell collapsing>Delete</Table.HeaderCell>
				</Table.Row>
			</Table.Header>
				<Table.Body>
					{ !this.props.mealTrackStore.currentMeals ? null : 
						this.props.mealTrackStore.currentMeals.map((items) =>
							<Table.Row key={items['id']}>
								<Table.Cell>{items['timeofday']}</Table.Cell>
								<Table.Cell>{items['calories']}</Table.Cell>
								<Table.Cell><Label onClick={() =>this.onRemove(items['id'])}><Icon link name="remove"/></Label></Table.Cell>
							</Table.Row>
						)
					}
				</Table.Body>
		</Table>
	)
	}
}

export default RecentMeals
