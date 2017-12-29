import { observable, action, computed } from 'mobx';

class mealTrackStore {
	
	@observable mealType = null;
	@observable brandName = null;
	@observable mealDesc = '';
	@observable servingSize = '';
	@observable servingsPerContainer = '';
	@observable mealCalories 
	@observable mealCarbs = 0;
	@observable mealProtein = 0;
	@observable mealFat = 0;
	@observable firstSection = true;
	@observable goalCalories = 0;
	@observable dailyMeals = [];
	
	@action.bound setmealType(value) {
		this.mealType = value;
			}
	@action.bound setbrandName(value) {
			this.brandName = value;
			}
	@action.bound  setmealDesc(value) {
				this.mealDesc = value;
			}
	@action.bound  setservingSize(value) {
				this.servingSize = value;
			}
	@action.bound  setservingsPerContainer(value) {
				this.servingsPerContainer = value;
			}
	@action.bound  setmealCalories(value) {
				this.mealCalories = value;
			}
	@action.bound  setmealCarbs(value) {
				this.mealCarbs = value;
			}
	@action.bound setmealProtein(value) {
				this.mealProtein = value;
			}
	@action.bound  setmealFat(value) {
				this.mealFat = value;
			}
	@action.bound  setrecentMeal(values) {
			this.recentMeal = values;
			}
	@action.bound  setfirstSection() {
		this.firstSection = !this.firstSection;
			}
	@action.bound  setGoalCalories(value) {
		this.goalCalories = value;
	}

	@action.bound  setmealSubmit() {
		this.dailyMeals = this.dailyMeals.concat(
			{	entryTime:  new Date().getTime(),
				timeofday: this.mealType,
				calories: this.mealCalories,
				brandName: this.brandName,
				mealDesc: this.mealDesc,
				servingSize: this.servingSize,
				servingsPerContainer: this.servingsPerContainer,
				totalCarbs: this.mealCarbs,
				totalProtein: this.mealProtein,
				totalFat: this.mealFat
			}
		)
	}
	
	@action.bound resetStore() {
		this.timeofday = null;
		this.calories = null;
		this.brandName = null;
		this.mealDesc = null;
		this.servingSize = null;
		this.setservingsPerContainer = null;
		this.mealCarbs = null;
		this.mealProtein = null;
		this.mealFat = null;
		this.firstSection = !this.firstSection
	}
	
	
	@computed get totalCalories(){
		if(this.dailyMeals.length == 0) {
			return 0	
		}
		let cals = 0;
		for(let i=0; i<this.dailyMeals.length; i++){
			cals += parseInt(this.dailyMeals[i].calories)
		}
		return cals
	}
	
	selection = { 
		"setmealType": this.setmealType,
		"setbrandName": this.setbrandName,
		"setmealDesc": this.setmealDesc,
		"setmealCalories": this.setmealCalories,
		"setmealCarbs": this.setmealCarbs,
		"setmealProtein": this.setmealProtein,
		"setmealFat" : this.setmealFat,
		"setservingsPerContainer": this.setservingsPerContainer,
		"setservingSize": this.setservingSize,
		"setfirstSection": this.setfirstSection,
		"mealSubmit": this.mealSubmit
	}
}

export default new mealTrackStore()
