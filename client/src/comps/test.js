import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Button } from 'semantic-ui-react';



const PartOne = props => {
	return (
			<Button onClick={() => props.handleClick('lwlwl')}>
				Part One
			</Button>
	)
}

const PartTwo = props => {
	return (
			<Button onClick={() => props.handleClick(false)} >
				Part Two 
			</Button>
	)
}
//onclick funtion outside outside react component and outside fsc
@inject('testStore') 
@observer
class Test extends Component{
	constructor(props){
		super(props);
		this.onClick = this.onClick.bind(this)
	}
	
	onClick(val){
		this.props.testStore.userClick(val)
	}

	render() {
		const { testStore } = this.props
		const { isLoadingProfile, profile, userClick, showNext, testValue } = testStore  
		console.log('render first value', testValue)
				
		if(!showNext) {
			console.log(testValue)
			console.log(showNext)
			return <PartOne handleClick={this.onClick}/>
		}
		else {
			console.log(testValue)
			return <PartTwo handleClick={this.onClick}/>
		}
	}
}

export default Test
