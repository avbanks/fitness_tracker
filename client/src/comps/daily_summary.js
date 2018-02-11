import React, { Component } from 'react';
import { Label, Message, Header, Segment, Image, Grid }  from 'semantic-ui-react';
import { inject, observer} from 'mobx-react';
import withAuthorization from './sessionAcc';
import { compose } from 'recompose';

@inject('mealTrackStore','measStore')
@observer
class DailySummary extends Component {
	render() {
		return (
			
			<Grid>
				<Grid.Row>
					<Grid.Column width={16}>
						<Message
							attached={'bottom'}
							header="Your Daily Summary"
						/>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row >
					<Segment.Group horizontal>
						<Grid.Row columns={3}>
							<Grid.Column>
								<Image src="https://randomuser.me/api/portraits/thumb/men/83.jpg" size="medium" />	
							</Grid.Column>
						</Grid.Row>
					</Segment.Group>
				</Grid.Row>
			</Grid>
		)
	}
}

const authCondition = authUser => !!authUser;

export default compose(withAuthorization(authCondition))(DailySummary)
