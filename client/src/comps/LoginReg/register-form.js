import React from 'react';
import { Form } from 'semantic-ui-react';


const RegisterForm = props => (
  <Form>
    <Form.Input label="Email" name="email" onChange={props.handleChange} />
    <Form.Input label="Password" type="password" name="password" onChange={props.handleChange} />
    <Form.Input label="Re-Enter Password" type="password" name="password" onChange={props.handleChange} />
    <Form.Button onClick={props.handleRegister}>
				Register
    </Form.Button>
    <Form.Button>
				Cancel
    </Form.Button>
  </Form>
);

export default RegisterForm;
