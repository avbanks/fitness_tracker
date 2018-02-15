import React, { Component } from 'react';
import { Form, Input, Grid, Radio } from 'semantic-ui-react';
import { observer, inject } from 'mobx-react';
import withAuthorization from '../sessionAcc';
import { compose } from 'recompose';
import BodyweightForm from './bodyweight-form';

@inject('measStore', 'tdeeStore')
@observer
class TdeeForm extends Component {
	render() {
		const { measStore, tdeeStore } = this.props
		const { setValue, setBodyweight, value, totalCals } = tdeeStore
		const setTargetsClick = measStore.setTargets()
		
			return (
			<Grid>
				<Grid.Row>
					<Grid.Column width={4}>
						<BodyweightForm setBodyweight={setBodyweight} setValue={setValue} totalCals={totalCals} value={value} />
					</Grid.Column>
					<Grid.Column width={4}>
						<Form onSubmit={() => { measStore.setCalorieGoals(document.querySelector("[name='setCalorieGoals']").value);measStore.setTargetWeight(document.querySelector("[name='setTargetWeight']").value)}}>
							<Form.Input label={'Target Daily Calories'} name={'setCalorieGoals'} />
							<Form.Input label={'Target Weight'} name={'setTargetWeight'} />
							<Form.Button onClick={() => this.props.measStore.setTargets()}> 
								Set Targets	
							</Form.Button>
						</Form>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		)
	}
}

const authCondition = authUser => !!authUser;

export default compose(withAuthorization(authCondition))(TdeeForm)

