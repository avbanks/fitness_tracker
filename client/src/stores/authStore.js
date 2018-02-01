import { observable, action } from 'mobx';
import firebase, { auth } from './firebase.js';

class authStore {
	
	@observable user = null;
	@observable email = null;
	@observable password = null;
	@observable loginForm = true;
	@observable authError = false;
	
	@action setUser = user => {
		this.user = user
	}
	
	@action login = () => {
		auth.signInWithEmailAndPassword(this.email, this.password)
	}

	@action logOut = () => {
		auth.signOut()
	}
	
	@action setEmail = email => {
		this.email = email;
	}
	
	@action setPassword = password => {
		this.password = password;
	}
	
	@action switchMode = () => {
		this.loginForm = !this.loginForm
	}
	
	@action registerUser = () => {
		auth.createUserWithEmailAndPassword(this.email,this.password)
			.then(((user) => firebase.database().ref('users/' + user.uid).set({
				username: 'test'	
			})))
			.then((() => this.switchMode()))
	}
	
	@action setAuthError = value => {
		this.authError = value
	}
}

export default new authStore()
