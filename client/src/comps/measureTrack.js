import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Table, Form } from 'semantic-ui-react';
import moment from 'moment'
import { compose } from 'recompose';
import withAuthorization from './sessionAcc';

@inject('measStore')
@observer
class MeasTrack extends Component{
	
	render() {
		const { measStore } = this.props
			
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
					<Form onSubmit={ () => { measStore.setDate(document.querySelector("[name='setDate']").value); measStore.addToWeightHistory()}}>
						<Form.Group >
							<Form.Input name="setWeight" label={'Enter Weight'} placeholder="lbs" onChange={ (e) =>  {measStore.setWeight(e.target.value)}}/>		
							<Form.Input name="setDate" label={'Enter Date'} defaultValue={moment().format('l')}/>
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

