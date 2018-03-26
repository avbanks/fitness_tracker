import React from 'react';
import { Icon } from 'semantic-ui-react';
import DatePicker from 'react-date-picker';

const DateSelection = props => {
	const onClick = value => props.changeDays(value);
	const onChange = value => props.setDate(value);
	
	return (
		<div>
			<Icon link name="chevron left" size="large" onClick={() => onClick(-1)} />
			<DatePicker value={props.date} onChange={value => onChange(value)} />
			<Icon link name="chevron right" size="large" onClick={() => onClick(1)} />
		</div>
	)
}

export default DateSelection

