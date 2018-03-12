import React from 'react';
import { Button, Form, Grid, Message } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

const LoginForm = (props) => {
  const SubmitButton = withRouter(({ history, ...props }) =>
    (
      <Button
				fluid
        onClick={() => { props.handleSubmit(history.push('/dailysummary')); }}
      >
			Login
      </Button>
    ));

  return (
	<Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
		<Grid.Column style={{ maxWidth : 450 }} >
			<Form>
				<Form.Input icon="user" iconPosition="left" placeholder="E-mail address" name="email" error={props.authError} onChange={props.handleChange} />
				<Form.Input icon="lock" iconPosition="left" placeholder="Password" name="password" type="password" error={props.authError} onChange={props.handleChange} />
				<SubmitButton handleSubmit={props.handleSubmit} />
				<Message>
						Not a member? <div onClick={props.handleSwitch} style={{ cursor: 'pointer' }}><a> Register </a></div>
				</Message>
			</Form>
		</Grid.Column>	
	</Grid>
  );
};

export default LoginForm;
