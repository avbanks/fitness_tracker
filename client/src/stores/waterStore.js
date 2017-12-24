import { observable, action } from 'mobx';

export class waterStore {
	
	@observable waterConsumed = 0;

	@action addWater(value) {
		this.waterConsumed = this.waterConsumed + value
	}

}

export default new waterStore()

