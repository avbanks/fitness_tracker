import { observable, action } from 'mobx';

export class testStore {

	@observable profile = undefined;
	@observable isLoadingProfile = false;
	@observable showNext = false

	@action loadProfile() {
		this.isLoadingProfile = true;
		setTimeout(() => {
			this.changeProfile()
			this.changeLoading()
		},4000)
	}
	@action changeProfile() {
		this.profile = 'test'
	}
	@action changeLoading() {
		this.isLoadingProfile = false
	}
	@action userClick() {
		console.log('click')
		this.showNext = !this.showNext;
	}
	
}


export default new testStore()
