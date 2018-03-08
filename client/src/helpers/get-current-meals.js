const getCurrentMeals = (data, currentDay) => {
	
	let meals = []; 
	data.forEach( item => {
		if(item.val().currentDate == currentDay.toString().slice(0,15)) {
			meals.push(item)
		}
	});

	return meals
}

export default getCurrentMeals


