import { observable, action } from 'mobx';
import firebase, { auth } from './firebase';

class testStore {

	@action.bound testRun() {	
	const ref = firebase.database().ref()
	const userRef = ref.child('TEST')
	userRef.set({
		onthego: {
			date: "june",
			name: "june"
		}
	})
	
	
	}
}


export default new testStore()
