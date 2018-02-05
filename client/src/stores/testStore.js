import { Atom } from 'mobx';
import firebase, { auth } from './firebase';
import MobxWebsocketStore from 'mobx-websocket-store';


console.log(auth.currentUser);

class testStore {
  constructor()	{
    console.log(auth.currentUser, 'constructor');
    this.data = [];

    this.ref = firebase.database().ref('users/' + 'PzcsjlPzZpV7LnVubapm9XxQZqd2' + '/meals');
    this.atom = new Atom(
      'Store',
      () => this.ref.on('value', this.valueListner.bind(this)),
      () => this.ref.off('value', this.valueListner.bind(this)),
    );
  }

  valueListner(snapshot) {
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

export default new testStore();

