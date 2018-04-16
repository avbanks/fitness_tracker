import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Table, Form } from 'semantic-ui-react';
import { compose } from 'recompose';
import withAuthorization from './sessionAcc';
import DateSelection from './datepicker';

@inject('measStore','mealTrackStore')
@observer
class MeasTrack extends Component{
	
	render() {
		const { measStore } = this.props
		const { mealTrackStore } = this.props
		const { date, setDate, changeDays } = mealTrackStore 
			
		const TableContent = (measStore.sortedWeightHistory.map((items) => 
			<Table.Row>
				<Table.Cell>{items['date']}</Table.Cell>
				<Table.Cell>{items['weight']}</Table.Cell>
			</Table.Row>
		))
					
		return(
		<div>	
			<div>	
				<div>	
					<DateSelection 
						date={date}	
						changeDays={changeDays} 
						setDate={setDate} 
					/>
					<Form onSubmit={ () => { measStore.setDate(date); measStore.addToWeightHistory()}}>
						<Form.Group >
							<Form.Input 
								name="setWeight" 
								label={'Enter Weight'} 
								placeholder="lbs" 
								onChange={ (e) =>  {measStore.setWeight(e.target.value)}}
							/>		
						</Form.Group>
						<Form.Group>
							<Form.Button content="Submit" /> 
						</Form.Group>
					</Form>
				</div>	
			</div>
				
			<Table celled padded>
					<Table.Header>
						<Table.Row>
							<Table.HeaderCell> Date </Table.HeaderCell>
							<Table.HeaderCell> Weight </Table.HeaderCell>
						</Table.Row>	
					</Table.Header>

					<Table.Body>
						 {TableContent}
					</Table.Body>
				</Table>
			</div>

		)
	}
	
}

const authCondition = authUser => !!authUser;

export default compose(withAuthorization(authCondition))(MeasTrack)

