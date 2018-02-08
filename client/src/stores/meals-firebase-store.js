import { Atom } from 'mobx';
import firebase, { auth } from './firebase';

class mealsFirebaseStore {
	constructor(user) {
		this.data = [];
		this.ref = firebase.database.ref('users/'+user.uid+'/meals');
		this.atom = new Atom(
			'Store',
			() => this.ref.on('value', this.valueListner.bind(this)),
			() => this.ref.off('value', this.valueListner.bind(this)),
		);
	}
	
	valueListner(snap) {
		this.data = snap
		this.atom.reportChanged();
	}

	getData() {
		this.atom.reportObserved();
		return this.data;
	}
}

export default mealsFirebaseStore
