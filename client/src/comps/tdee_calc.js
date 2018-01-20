import React, { Component } from 'react';
import { Form, Input, Grid, Radio } from 'semantic-ui-react';
import { observer, inject } from 'mobx-react';
import withAuthorization from './sessionAcc';
import { compose } from 'recompose';

@inject('measStore')
@observer
class TdeeForm extends Component {
	render() {
		const {  measStore } = this.props
		const value = this.props.tdeeStore.value
		const handleChange = (e, { value }) => { this.props.tdeeStore.setValue(value)}
		const handleInputChange = (e, { value }) => {this.props.tdeeStore.setBodyweight(value)}

		return (
			<Grid>
				<Grid.Row>
					<Grid.Column width={4}>
				<Form>
					<Form.Group>
						<Form.Field control={Input} onChange={handleInputChange} label='Enter Bodyweight' placeholder='lbs'/>			
					</Form.Group>
					<Form.Group grouped>
						<label>Check Desired Goal</label>
						<Form.Field control={Radio} value='10.5' checked={ value === '10.5' } label='Extreme Fat Loss' onChange={handleChange} />
						<Form.Field control={Radio} value='12.5' checked={ value === '12.5' } label='Moderate Diet' onChange={handleChange} />
						<Form.Field control={Radio} value='14.5' checked={ value === '14.5' } label='Maintenance' onChange={handleChange} />
						<Form.Field control={Radio} value='16.5' checked={ value === '16.5'}
							label='Slow Bulk' onChange={handleChange} />
						<Form.Field control={Radio} value='19' checked={ value === '19' } label='Heavy Bulk' onChange={handleChange} />
					</Form.Group>
					<Form.Group>
						<Form.Field control={Input} readOnly value={this.props.tdeeStore.totalCals} label='Estimated Daily Calories'/>	
					</Form.Group>
				</Form>
					</Grid.Column>
					<Grid.Column width={4}>
						<Form onSubmit={() => { measStore.setCalorieGoals(document.querySelector("[name='setCalorieGoals']").value);measStore.setTargetWeight(document.querySelector("[name='setTargetWeight']").value)}}>
							<Form.Input label={'Target Daily Calories'} name={'setCalorieGoals'} />
							<Form.Input label={'Target Weight'} name={'setTargetWeight'} />
							<Form.Button> 
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

