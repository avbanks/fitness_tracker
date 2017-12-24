import React, { Component } from 'react';
import { Button, Form, Input, Radio } from 'semantic-ui-react';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';

@inject('tdeeStore')
@observer
class TdeeForm extends Component {
	render() {
		const { tdeeStore } = this.props
		let value = this.props.tdeeStore.value
		let handleChange = (e, { value }) => { this.props.tdeeStore.setValue(value)}
		let handleInputChange = (e, { value }) => {this.props.tdeeStore.setBodyweight(value)}
		return (
			<div>
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
			</div>
		)
	}
}

export default TdeeForm

