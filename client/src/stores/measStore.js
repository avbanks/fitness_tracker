import { observable, action, computed } from 'mobx';
import firebase, { auth } from './firebase.js';


class measStore {
	
	@observable weight;
	@observable neck;
	@observable waist;
	@observable hips;
	@observable chest;
	@observable measHistory = []	
	@observable dailyMeas = {}
	@observable date = '';
	@observable weightHistory = [] 
	@observable calorieGoals;
	@observable targetWeight;
	
	@action.bound setCalorieGoals(value) {
		this.calorieGoals = value;
		console.log(this.calorieGoals)
	}
	@action.bound setTargetWeight(value) {
		this.targetWeight = value;
		console.log(this.targetWeight)
	}
	@action.bound setWeight(value) {
		this.weight = value
	}
	@action.bound setDate(value) {
		this.date = value
	}
	@action.bound setNeck(value) {
		this.neck = value
	}
	@action.bound setWaist(value) {
		this.waist = value
	}
	@action.bound setHips(value) {
		this.hips = value
	}
	@action.bound setChest(value) {
		this.chest = value
	}
	
	@action.bound setDailyMeas(){
		this.dailyMeas = ''
	}
	@action.bound addToWeightHistory(){
		this.weightHistory = this.weightHistory.concat(
			{'weight': this.weight,
				'date': this.date
			})
		}
	@computed get sortedWeightHistory(){
		function sortFunction(a,b) {
			const dateA = new Date(a.date).getTime();
			const dateB = new Date(b.date).getTime();
				return dateA < dateB ? 1 : -1;
		}
		const array = this.weightHistory;
		return array.sort(sortFunction);
	}
	
	

	selection = {
		"setWeight": this.setWeight,
		"setDate": this.setDate,
		"addToWeightHistory": this.addToWeightHistory,
		"setCalorieGoals": this.setCalorieGoals,
		"setTargetWeight": this.setTargetWeight
	}
}

export default new measStore()
