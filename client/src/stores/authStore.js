import { observable, action, computed } from 'mobx';
import firebase, { auth, provider } from './firebase.js';

class authStore {
	
	@observable user = null;
	@observable email = null;
	@observable password = null;
	@observable loginForm = true;
	
	@action.bound setUser(user) {
		this.user = user
		console.log('2')
	}
	
	@action.bound login() {
		console.log('login')
		auth.signInWithEmailAndPassword(this.email, this.password)
	}

	@action.bound logOut() {
		auth.signOut().then(() =>
			{
				console.log('Out')
			})
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
		console.log(this.email)
		auth.createUserWithEmailAndPassword(this.email,this.password).then((() =>
			this.switchMode()))
	}

}

export default new authStore()
