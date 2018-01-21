import { observable, action } from 'mobx';

class testStore {

 @observable date = new Date()

 @action.bound setDate(value) {
		this.date = value
 }
	


}


export default new testStore()
