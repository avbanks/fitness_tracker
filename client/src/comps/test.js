import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Button } from 'semantic-ui-react';


const PartOne = props => {
	return (
			<Button onClick={() => {console.log('topclick'); props.handleClick()}} >
				Part One
			</Button>
	)
}

const PartTwo = props => {
	return (
			<Button onClick={props.handleClick} >
				Part Two 
			</Button>
	)
}

@inject('testStore') 
@observer
class Test extends Component{
	componentDidMount() {
	//	this.props.testStore.loadProfile()
	}
	onClick = () => {
		this.props.testStore.userClick()
	}

	render() {
		const { testStore } = this.props
		const { isLoadingProfile, profile, userClick } = testStore
		

		return(
			<div>
				{this.props.testStore.showNext ?
					<PartOne handleClick={this.onClick}/>: 
					<PartTwo handleClick={this.onClick}/>
				}
			</div>
		)

		}
}

export default Test
