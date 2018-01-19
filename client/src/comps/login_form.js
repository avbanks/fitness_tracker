import React from 'react';
import { Form } from 'mobx-react-form';
import validatorjs from 'validatorjs';

export default class LoginForm extends Form {

	plugins() {
		return { dvr: validatorjs }
	}

	setup() {
		return {
			fields: [{
				name: 'email',
				label: 'Email',
				placeholder: 'Input Email',
				rules: 'required|email|string'
			},{
				name: 'password',
				label: 'Password',
				placeholder: 'Input Password',
				rules: 'required|string|between:8,25'
			},{
				name: 'passwordConfirmation',
				label: 'Password Confirmation',
				placeholder: 'Confirm Password',
				rules: 'required|string|same:password'
			}]
		};
	}

	hooks() {
		return {
			onError(form) {
				console.log('error')
			}
		}
	}

}

