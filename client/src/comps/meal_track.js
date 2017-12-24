import React, { Component } from 'react';
import { Button, Form, Input, Radio, Select, Header } from 'semantic-ui-react';
import { observer, inject } from 'mobx-react';

const options = [
	{ key: 'Breakfast', text: 'Breakfast', value: 'Breakfast' },
	{ key: 'Lunch', text: 'Lunch', value: 'Lunch' },
	{ key: 'Dinner', text: 'Dinner', value: 'Dinner' },
	{ key: 'Snack', text: 'Snack', value: 'Snack' },
]

const FirstSection = props => {
	return (
			<div>
				<Form>
					<Form.Group> 
						<Form.Field control={Select} label="Select Meal Type" options={options} name="setmealType" onChange={ (e, { name, value}) => {props.selection[name](value)}}/>	
						<Form.Field control={Input} label="Brand Name" placeholder="ex. Campbell's" name="setbrandName" onChange={ e => { props.selection[e.target.name](e.target.value)}}/>	
						<Form.Field control={Input} label="Description" placeholder="ex. Chicken Soup" name="setmealDesc"  onChange={ e => { props.selection[e.target.name](e.target.value)}}/>	
						<Form.Field control={Input} label="Serving Size" placeholder="ex. 1 cup" name="setservingSize"  onChange={ e => { props.selection[e.target.name](e.target.value)}}/>	
						<Form.Field control={Input} label="Servings per container" placeholder="1" name="setservingsPerContainer"  onChange={ e => { props.selection[e.target.name](e.target.value)}}/>	
					</Form.Group>
				</Form>
				<Button onClick={ () => props.setfirstSection()}>
						Next
				</Button>
			</div>
	)
}

const SecondSection = props => {
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
			<Form.Button onClick={ () => props.setfirstSection()}>
				Back
			</Form.Button>
			<Form.Button type="submit" onClick={(e) => {e.preventDefault();props.onSub()}}>
				Submit
			</Form.Button>
			</Form>
		</div> 
	)
		
}

@inject('mealTrackStore','testStore')
@observer
class MealTrack extends Component {
	

	render() {
		const { mealTrackStore } = this.props
		const { selection, firstSection, mealCalories,} = mealTrackStore
		const onClick = () => {
					mealTrackStore.setfirstSection()
				}
		const onSubmit = () => {
			mealTrackStore.setmealSubmit()
		}

		if(firstSection === true) {
			console.log(mealTrackStore.mealType)
			return <FirstSection selection={selection} setfirstSection={onClick}/>
		  }

		console.log(mealTrackStore.mealType)
		return (
			<div>
				<SecondSection selection={selection} setfirstSection={onClick} onSub={onSubmit}/>
			</div>
		)
			}
}

export default MealTrack	
