import { Atom } from 'mobx';
import firebase, { auth } from './firebase';
import authStore from './authStore';


class testStore {
  constructor(user)	{
		console.log(user, 'user in testStore')
    this.data = [];
    this.ref = firebase.database().ref('users/'+user.uid+'/meals');
    this.atom = new Atom(
      'Store',
      () => this.ref.on('value', this.valueListner.bind(this)),
      () => this.ref.off('value', this.valueListner.bind(this)),
    );
  }

  valueListner(snapshot) {
		console.log('USER',authStore.user);
    this.data = [];
    snapshot.forEach((childSnap) => {
      this.data.push(childSnap.val());
      this.atom.reportChanged();
    });
  }

  getData() {
    this.atom.reportObserved();
    return this.data;
  }
}

export default testStore;



