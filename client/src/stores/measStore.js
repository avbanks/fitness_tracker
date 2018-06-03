import { observable, action, computed } from 'mobx';
import firebase, { auth } from './firebase.js';


class measStore {
	
	@observable weight;
	@observable neck;
	@observable waist;
	@observable hips;
	@observable chest;
	@observable measHistory = [];
	@observable dailyMeas = {};
	@observable date = new Date();
	@observable weightHistory = [];
	@observable calorieGoals = null;
	@observable targetWeight = null;
	@observable currentMeas = null;
	
	@action setCalorieGoals = (value) => {
		this.calorieGoals = value;
	}
	
	@action setTargetWeight = (value) => {
		this.targetWeight = value;
	}

	@action setTargets = () => {
		const ref = firebase.database().ref('users/'+ auth.currentUser['uid']+'/goals/')
		ref.set({
			goals : {
			targetweight: this.targetWeight,
			targetcalories: this.calorieGoals
				}
	   	})
		console.log('setTarg')
		}

	@action setWeight = value => {
		this.weight = value
	}

	@action setDate = value => {
		this.date = value
	}

	@action setNeck = value => {
		this.neck = value
	}

	@action setWaist = value => {
		this.waist = value
	}

	@action setHips = value => {
		this.hips = value
	}

	@action setChest = value => {
		this.chest = value
	}
	
	@action setDailyMeas = () => {
		this.dailyMeas = ''
	}

	@action addToWeightHistory = () => {
		const currentDate = this.date.toString().slice(0,15);
		this.weightHistory = this.weightHistory.concat(
			{'weight': this.weight,
				'date': currentDate 
			})
		}
	
	@action submitMeas = () => {
		const currentMeas = {'date': this.currentDate,
									 'weight': this.weight
		}
		const ref = firebase.database().ref('users/'+auth.currentUser['uid']+'/meas')
		ref.push(currentMeas)
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
	
	@action changeDays = (days) => {
		Date.prototype.changeDays = function(days) {
			let dat = new Date(this.valueOf());
			dat.setDate(dat.getDate() + days);
			return dat
		}
		const newDate = this.date.changeDays(days)
		this.date =	newDate
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
