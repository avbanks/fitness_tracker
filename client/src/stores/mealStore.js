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
			}).then(() => {this.meals = _this.meals; runInAction(()=>this.loading=false)}).then(() => this.setCurrentMeals())
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
		console.log(newCurrent, 'new current')
		this.currentMeals = newCurrent 
		console.log(this.currentMeals,'current meals')
	}

	@action setActions = (observ, value) => {
		switch (observ) {
			case('setmealType'):
				this.mealType = value;
				break;
			case('setbrandName'):
				this.brandName = value;
				break;
			case('setmealDesc'):
				this.mealDesc = value;
				break;
			case('setservingSize'):
				this.servingSize = value;
				break;
			case('setmealCalories'):
				this.mealCalories = value;
				break;
			case('setmealCarbs'):
				this.mealCarbs = value;
				break;
			case('setmealProtein'):
				this.mealProtein = value;
				break;
			case('setmealFat'):
				this.mealFat = value;
				break;
			case('setrecentMeal'):
				this.recentMeal = value;
				break;
			case('setFirstSection'):
				this.firstSection = !this.firstSection
				break;
			case('setGoalCalories'):
				this.goalCalories = value;
				break;
			case('mealSubmit'):
				return this.mealSubmit
			default:
				console.log('Entered wrong case')
		}
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
		
		//this.dailyMeals = this.dailyMeals.concat(currentMeal)	
 		
		const ref = firebase.database().ref('users/'+ auth.currentUser['uid']+'/meals')
		ref.once('value', function(snapshot) {
			snapshot.forEach(function(childSnapshot) {
				const childKey = childSnapshot.key
				const childData = childSnapshot.val()
			})
		}).then(ref.push(currentMeal)).then(() => this.setCurrentMeals())
	}

	@action deleteMeal = id => {
		const ref = firebase.database().ref('users/'+ auth.currentUser['uid']+'/meals')
		ref.once('value').then(snapshot => {
		snapshot.forEach(childSnapshot => {
				if(childSnapshot.val().id === id) {
					ref.child(childSnapshot.key).remove()
					return
				}
			})
		}).then(() => this.loadMeals())
	}
	
	@action resetStore = () => {
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
	
	@action setDate = (value) => {
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

	@action changeDays = (days) => {
		Date.prototype.changeDays = function(days) {
			let dat = new Date(this.valueOf());
			dat.setDate(dat.getDate() + days);
			return dat
		}
		const newDate = this.date.changeDays(days)
		this.date =	newDate
		console.log(this.date)
	}


}

export default new mealTrackStore()

