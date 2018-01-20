import React, { Component } from 'react';
import { Button, Form, Icon, Input, Label, Select, Header, Table } from 'semantic-ui-react';
import { observer, inject } from 'mobx-react';
import { compose } from 'recompose';
import withAuthorization from './sessionAcc';

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
				<Button onClick={ (e) => {e.preventDefault(); e.stopPropagation(); props.setfirstSection()}}>
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
			<Form.Button type="Submit" onClick={(e) => {e.preventDefault();props.onSub()}}>
				Submit
			</Form.Button>
			</Form>
		</div> 
	)
		
}

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
								<Table.Cell><Label onClick={() =>this.onRemove(items['id'])}><Icon name="remove"/></Label></Table.Cell>
							</Table.Row>
						)
					}
				</Table.Body>
		</Table>
	)
	}
}




const RecentMealsComp = (props) => {
	return 
	(
		<div>
			<Button label='Add Recent Meal' />
			<Select />
		</div>
	)
}


@inject('mealTrackStore')
@observer
class MealTrack extends Component {
	
	render() {
		const { mealTrackStore } = this.props
		const { selection, firstSection, mealType } = mealTrackStore
		const onClick = () => {
					this.props.mealTrackStore.setfirstSection()
				}
		const onSubmit = () => {
			mealTrackStore.setmealSubmit()
			mealTrackStore.resetStore()
		}

		if(firstSection === true) {
			console.log(mealType)
			return (
				<div>
					<FirstSection selection={selection} setfirstSection={onClick}/>
					<RecentMeals/>
				</div>
			)
		  }

		console.log(mealType)
		return (
			<div>
				<SecondSection selection={selection} setfirstSection={onClick} onSub={onSubmit}/>
			</div>
		)
			}
}

const authCondition = authUser => !!authUser;

export default compose(withAuthorization(authCondition))(MealTrack)
