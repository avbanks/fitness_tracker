import { observable, action, computed } from 'mobx';
import firebase, { auth, provider } from './firebase.js';

class authStore {
	
	@observable user = null;
	@observable email = null;
	@observable password = null;
	@observable loginForm = true;
	
	@action.bound setUser(user) {
		this.user = user
	}
	
	@action.bound login() {
		auth.signInWithEmailAndPassword(this.email, this.password)
	}

	@action.bound logOut() {
		auth.signOut()
	}
	
	@action.bound setEmail(email) {
		this.email = email;

	}
	
	@action.bound setPassword(password) {
		this.password = password;
	}
	
	@action.bound switchMode() {
		this.loginForm = !this.loginForm
	}
	
	@action.bound registerUser(){
		auth.createUserWithEmailAndPassword(this.email,this.password)
			.then(((user) => firebase.database().ref('users/' + user.uid).set({
				username: 'test'	
			})))
			.then((() => this.switchMode()))
	}
}

export default new authStore()
