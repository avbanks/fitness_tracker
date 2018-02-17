import React from 'react';
import { Form, Grid } from 'semantic-ui-react';


const RegisterForm = props => (
	<Grid textAlign='center' style={{ height: '100' }} verticalAlign='middle'>
		<Grid.Column style={{ maxWidth : 450 }} >
			<Form>
				<Form.Input placeholder="Email" icon="mail" iconPosition="left" name="email" onChange={props.handleChange} />
				<Form.Input placeholder="Password" icon="lock" iconPosition="left" type="password" name="password" onChange={props.handleChange} />
				<Form.Input placeholder="Re-Enter Password" icon="lock" iconPosition="left" type="password" name="password" onChange={props.handleChange} />
				<Form.Button onClick={props.handleRegister} fluid>
						Register
				</Form.Button>
				<Form.Button fluid>
						Cancel
				</Form.Button>
			</Form>
		</Grid.Column>
	</Grid>
);

export default RegisterForm;
