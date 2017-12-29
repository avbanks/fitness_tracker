import React, { Component } from 'react';
import { Label, Button, Message, Header, Segment, Image, Grid }  from 'semantic-ui-react';
import { inject, observer} from 'mobx-react';

@inject('mealTrackStore','measStore')
@observer
class DailySummary extends Component {

	render() {
		return (
			<div>
				<Message
					attached
					header="Your Daily Summary"
				/>
				<Segment.Group horizontal>
					<Grid columns='equal'>
						<Grid.Column>
					<Image src="https://randomuser.me/api/portraits/thumb/men/83.jpg" size="medium" />	
						</Grid.Column>
						<Grid.Column>
							<Header as='h2'>
								Calories Remaining:
							</Header>
							<Label size="massive">
								{this.props.measStore.calorieGoals - this.props.mealTrackStore.totalCalories}	
							</Label>
							
						</Grid.Column>
						<Grid.Column>
							<Header as='h2'>
								slkdjfwoeijfwiejowj
							</Header>
						</Grid.Column>
					</Grid>
				</Segment.Group>

			</div>
		)
	}
}


export default DailySummary
