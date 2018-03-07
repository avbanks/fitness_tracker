
const getCurrentMeals = (data, currentDay) => {

	let meals = []; 
	data.forEach( item => {
		if(item.val().currentDate == currentDay) meals.push(item)
	});

	return meals
}

export default getCurrentMeals


