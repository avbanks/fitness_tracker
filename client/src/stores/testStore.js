import { observable, action } from 'mobx';

class testStore {

	@observable profile = undefined;
	@observable isLoadingProfile = false;
	@observable showNext = false
	@observable testValue = 'initial';
	@action changeProfile() {
		this.profile = 'test'
	}
	@action changeLoading() {
		this.isLoadingProfile = false
	}
	@action userClick(value) {
		this.showNext = value
		console.log('click value', value, !this.showNext)
		this.testValue = value;
	}
	
}


export default new testStore()
