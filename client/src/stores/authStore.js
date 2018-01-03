import { observable, action, computed } from 'mobx';
import firebase, { auth, provider } from './firebase.js';

class authStore {
	
	@observable user = null;
	
	@action.bound setUser(user) {
		this.user = user
	}
	
	@action.bound login(email, password) {
		auth.signInWithEmailAndPassword(email,password).then((result) =>
			{ this.setUser(result) }
		)
	}

	@action.bound logOut() {
		auth.signOut().then(() =>
			{
				this.setUser(null)	
			})
	}

}

export default new authStore()
