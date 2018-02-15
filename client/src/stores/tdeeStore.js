import { observable, action, computed } from 'mobx';


export class tdeeStore {
	
	@observable value = 0;
	@observable bodyweight = 0;
	
	@action setValue = newValue => {
		this.value = newValue
	}
	@action setBodyweight = bw => {
		this.bodyweight = bw
	}

	@computed get totalCals() {
		return this.value * this.bodyweight
	}
	

}

export default new tdeeStore()


