import { observable, action, computed } from 'mobx';

class mealTrackStore {
	
	@observable mealType 
	@observable brandName 
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

	@action setmealType(value) {
		console.log('set')
		this.mealType = value;
			}
	@action setbrandName(value) {
			this.brandName = value;
			}
	@action setmealDesc(value) {
				this.mealDesc = value;
			}
	@action setservingSize(value) {
				this.servingSize = value;
			}
	@action setservingsPerContainer(value) {
				this.servingsPerContainer = value;
			}
	@action setmealCalories(value) {
				this.mealCalories = value;
			}
	@action setmealCarbs(value) {
				this.mealCarbs = value;
			}
	@action setmealProtein(value) {
				this.mealProtein = value;
			}
	@action setmealFat(value) {
				this.mealFat = value;
			}
	@action setrecentMeal(values) {
			this.recentMeal = values;
			}
	@action setfirstSection() {
		this.firstSection = !this.firstSection;
			}
	@action setGoalCalories(value) {
		this.goalCalories = value;
	}

	@action setmealSubmit() {
		this.dailyMeals = this.dailyMeals.concat(
			{timeofday: this.mealType,
				calories: this.mealCalories
			}
		)
		console.log(this.mealType)
		console.log(this.dailyMeals[0].timeofday)
	}
	
	@computed get totalCalories(){
		if(this.dailyMeals.length == 0) {
			return 0	
		}
		let cals = 0;
		for(let i=0; i<this.dailyMeals.length; i++){
			cals += this.dailyMeals[i].calories
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
