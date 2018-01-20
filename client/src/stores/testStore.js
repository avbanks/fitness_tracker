import { observable, action } from 'mobx';

class testStore {

 @observable formError = false;
 
 @action.bound setFormError(value) {
		this.formError = value
 }
	


}


export default new testStore()
