import React from 'react';
import Responsive from 'react-responsive';


const Desktop = props => <Responsive {...props} minWidth={992}/>
const Tablet = props => <Responsive {...props} minWidtth={768} maxWidth={992}/>	
const Mobile = props => <Responsive {...props} maxWidth={767}/>

export default Desktop
export default Tablet
export default Mobile 

