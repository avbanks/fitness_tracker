import { autorun, observable, action, computed, runInAction, toJS } from 'mobx';
import shortid from 'shortid';
import firebase, { auth } from './firebase.js';

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
	@observable firstSection = true; //when user clicks back on browser this is wrong
	@observable goalCalories = 0;
	@observable dailyMeals = [];
	@observable date = new Date();
	@observable meals = [];
	@observable currentMeals = [];
	@observable loading = false;

	@action loadMeals = () => {
		this.loading = true;
		const ref = firebase.database().ref('users/'+ auth.currentUser['uid']+'/meals')
		const _this = this
		
		ref.once('value').then(snapshot => {
			snapshot.forEach(childSnapshot => {
				const childKey = childSnapshot.key
				const childData = childSnapshot.val()
				_this.meals.push(childData)
				})
			}).then(() => {this.meals = _this.meals; runInAction(()=>this.loading=false)})
		}
	
	
	
	@action setCurrentMeals = () => {
		const ref = firebase.database().ref('users/'+ auth.currentUser['uid']+'/meals')
		const day = this.date.toString().slice(0,15)
		const meals = this.meals	
		const newCurrent = []
		meals.toJS().forEach(meal => {
			if(meal.currentDate === day) {
				newCurrent.push(meal)
			}
		})
		
		this.dailyMeals = newCurrent 
	}
	
	@action setmealType = (value) => {
		this.mealType = value;
			}
	@action setbrandName = (value) => {
		this.brandName = value;
			}
	@action setmealDesc = (value) => {
		this.mealDesc = value;
			}
	@action setservingSize = (value) => {
		this.servingSize = value;
			}
	@action setservingsPerContainer = (value) => {
		this.servingsPerContainer = value;
			}
	@action setmealCalories = (value) => {
		this.mealCalories = value;
			}
	@action setmealCarbs = (value) => {
		this.mealCarbs = value;
			}
	@action setmealProtein = (value) => {
		this.mealProtein = value;
			}
	@action setmealFat = (value) => {
		this.mealFat = value;
			}
	@action setrecentMeal = (values) => {
		this.recentMeal = values;
			}
	@action setfirstSection = () => {
		this.firstSection = !this.firstSection;
			}
	@action setGoalCalories = (value) => {
		this.goalCalories = value;
	}

	@action setmealSubmit = () => {
		const currentDate = this.date.toString().slice(0,15)
		const currentMeal = 
			{	
				id: shortid.generate(),	
				currentDate: currentDate,
				entryTime:  new Date().getTime(),
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
		
		this.dailyMeals = this.dailyMeals.concat(currentMeal)	
 		
		const ref = firebase.database().ref('users/'+ auth.currentUser['uid']+'/meals')
		ref.once('value', function(snapshot) {
			snapshot.forEach(function(childSnapshot) {
				const childKey = childSnapshot.key
				const childData = childSnapshot.val()
			})
		})
	  ref.push(currentMeal) 
	}

	@action.bound deleteMeal(id) {
		let meals = this.dailyMeals	
		for(let i=0; i<meals.length; i++) {
			if(meals[i]['id'] == id) {
				meals.splice(i,1)			
				return
			}
		}
		this.dailyMeals = meals
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
	
	@action.bound setDate(value) {
		this.date = value
	}
	
	@computed get totalCalories(){
		if(this.dailyMeals.length == 0) {
			return 0	
		}
		let cals = 0;
		for(let i=0; i<this.dailyMeals.length; i++){
			cals += parseInt(this.dailyMeals[i].calories,10)
		}
		return cals
	}

	@action.bound changeDays(days) {
		Date.prototype.changeDays = function(days) {
			let dat = new Date(this.valueOf());
			dat.setDate(dat.getDate() + days);
			return dat
		}
		const newDate = this.date.changeDays(days)
		this.date =	newDate
		console.log(this.date)
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

