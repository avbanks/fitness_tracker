import React from 'react';
import { Form, Header, Input } from 'semantic-ui-react';

const SecondSection = props => {
	
	const setfirstSection = () => props.setfirstSection()
	const onSubmit = () => { props.setmealSubmit(); props.resetStore() } 

	return (
		<div>
			<Header as='h3' dividing>
				Nutrition Facts
			</Header>
			<Form>
				<Form.Input onChange={e => {
					props.selection[e.target.name](e.target.value)
				}} 
					label="Calories" placeholder="Required" name='setmealCalories' />
				<Form.Input label="Total Carbohydrates (g)" placeholder="Opional" name="setmealCarbs" onChange={e => {
					props.selection[e.target.name](e.target.value)
				}}/>
				<Form.Field control={Input} label="Protein" placeholder="Optional" name="setmealProtein" onChange={e => {
						props.selection[e.target.name](e.target.value)}} />
				<Form.Field control={Input} label="Total Fats (g)" placeholder="Optional" name="setmealFat" onChange={e => {
					props.selection[e.target.name](e.target.value)}} />
			<Form.Button onClick={ () => setfirstSection()}>
				Back
			</Form.Button>
			<Form.Button type="Submit" onClick={(e) => {e.preventDefault();onSubmit()}}>
				Submit
			</Form.Button>
			</Form>
		</div> 
	)
}

export default SecondSection
