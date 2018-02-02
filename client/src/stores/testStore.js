import { Atom } from 'mobx';
import firebase, { auth } from './firebase';
import MobxWebsocketStore from 'mobx-websocket-store';


class testStore {
	constructor()	{
		this.data = []
		
		this.ref = firebase.database().ref('users/'+ 'PzcsjlPzZpV7LnVubapm9XxQZqd2'+'/meals')
		this.atom = new Atom("Store", 
			() => this.ref.on("value", this.valueListner.bind(this)),
			() => this.ref.off("value", this.valueListner.bind(this))
		)
	}

	valueListner(snapshot) {
		this.data = []
		snapshot.forEach(childSnap => {
			this.data.push(childSnap.val())
			this.atom.reportChanged()
			}
		)
	}

	getData() {
		this.atom.reportObserved();
		console.log(this.data, 'daata')
		console.log(typeof(this.data.calories))
		return this.data
	}
}

export default new testStore()

/*const ref = firebase.database().ref('users/'+ 'PzcsjlPzZpV7LnVubapm9XxQZqd2'+'/meals')

const store new MobxWebsocketStore(
	(store) => {
		console.log("Opening websocket")
		ref.on("value", refListener.bind(store))
	},
	(store) => {
		console.log("Closing websocket")
		ref.off("value", refListener.bind(store))
	}
);

*/
