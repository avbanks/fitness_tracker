import React from 'react'
import { Form, Radio, Input } from 'semantic-ui-react'



const BodyweightForm = props => {
	
	const handleInputChange = (e, { value }) => {props.setBodyweight(value)}
	const handleChange = (e, { value }) => { props.setValue(value)}
	const  totalCals = props.totalCals	
	let value = props.value
	return(
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
				<Form.Field control={Input} readOnly value={totalCals} label='Estimated Daily Calories'/>	
			</Form.Group>
		</Form>
	)
}

export default BodyweightForm
