import React, { Component } from 'react';
import { Input, Button, Grid } from 'semantic-ui-react';
import { inject, observer } from 'mobx-react'

@inject('waterStore')
@observer
class WaterTrack extends Component {

	handleClick = (amount) => this.props.waterStore.addWater(amount)	
	render() {
		return (
					<Grid>
						<Grid.Row centered>
							<Grid.Column width={8}>
								<Grid.Row>
									<Input action={{ content: 'Cup(s)'}} value={this.props.waterStore.waterConsumed}/>
								</Grid.Row>
								<Grid.Row>
									<Button onClick={() => this.handleClick(1)}>
										+1 Cup	
									</Button>
									<Button onClick={() => this.handleClick(2)}>
										+2 Cups
									</Button>
									<Button onClick={() => this.handleClick(4)}>
										+4 Cups
									</Button>
								</Grid.Row>
							</Grid.Column>
						</Grid.Row>
					</Grid>
		)
	}
}

export default WaterTrack
