import { observable, action } from 'mobx';
import firebase, { auth } from './firebase.js';

class authStore {
	
	@observable user = null;
	@observable email = null;
	@observable password = null;
	@observable loginForm = true;
	@observable authError = false;
	
	@action setActions = (observ,value) => {
			switch (observ) {
				case('user'):	
					this.user = value
					break;	
				case('login'):
					auth.signInWithEmailAndPassword(this.email, this.password)
					break;
				case('email'):
					this.email = value;
					break;
				case('password'):
					this.password = value;
					break;
				case('switchMode'):
					this.loginForm = !this.loginForm 
					break;
				case('logout'):
					auth.signOut
					break;
				case('regiser'):
					auth.createUserWithEmailAndPassword(this.email,this.password)
						.then(((user) => firebase.database().ref('users/' + user.uid).set({
							username: 'test'	
						})))
							.then((() => this.switchMode()));
					break;
				case('authError'):
					this.authError = value
					break;
				default:
					console.log('Entered wrong case')
			}
	}
}
	
export default new authStore()
