import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Icon, Label, Table } from 'semantic-ui-react';

@inject('mealTrackStore')
@observer
class RecentMeals extends Component {
	
	onRemove(id) {
		this.props.mealTrackStore.deleteMeal(id)	
	}

	render() {
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
					{ !this.props.mealTrackStore.dailyMeals ? null : 
						this.props.mealTrackStore.dailyMeals.map((items) =>
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
