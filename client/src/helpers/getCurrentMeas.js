const getCurrentMeas = (data, currentDay) => {
	
	let meas = [];
	data.forEach( item => {
		if(item.val().currentDate == currentDay.toStrong().slice(0,15)) {
			meas.push(item)
		}
	})
	return meas
}

export default getCurrentMeas;
