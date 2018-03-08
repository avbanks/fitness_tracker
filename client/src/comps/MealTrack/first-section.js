import React from 'react';
import { Button, Form, Icon, Input, Select } from 'semantic-ui-react';
import DatePicker from 'react-date-picker';
import PropTypes from 'prop-types';
import SecondSection from './second-section';


// Components shows the first section of the form to add meals

const FirstSection = (props) => {
  const options = [
    { key: 'Breakfast', text: 'Breakfast', value: 'Breakfast' },
    { key: 'Lunch', text: 'Lunch', value: 'Lunch' },
    { key: 'Dinner', text: 'Dinner', value: 'Dinner' },
    { key: 'Snack', text: 'Snack', value: 'Snack' },
  ];
  const onChange = value => props.setDate(value);
  const onClick = (value) => { props.changeDays(value); };

  return (
    <div>
      <Icon link name="chevron left" size="large" onClick={() => onClick(-1)} />
      <DatePicker value={props.date} onChange={value => onChange(value)} />
      <Icon link name="chevron right" size="large" onClick={() => onClick(1)} />
      <Form>
        <Form.Group>
          <Form.Field control={Select} label="Select Meal Type" options={options} name="setmealType" onChange={(e, { name, value }) => { props.setActions(name,value); }} />
          <Form.Field control={Input} label="Brand Name" placeholder="ex. Campbell's" name="setbrandName" onChange={(e) => { props.setActions(e.target.name,e.target.value); }} />
          <Form.Field control={Input} label="Description" placeholder="ex. Chicken Soup" name="setmealDesc" onChange={(e) => { props.setActions(e.target.name,e.target.value); }} />
          <Form.Field control={Input} label="Serving Size" placeholder="ex. 1 cup" name="setservingSize" onChange={(e) => { props.setActions(e.target.name,e.target.value); }} />
          <Form.Field control={Input} label="Servings per container" placeholder="1" name="setservingsPerContainer" onChange={(e) => { props.setActions(e.target.name,e.target.value); }} />
        </Form.Group>
      </Form>
			<SecondSection/>  
		</div>
  );
};

export default FirstSection;

