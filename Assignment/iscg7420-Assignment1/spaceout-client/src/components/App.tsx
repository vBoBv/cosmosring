import React from 'react';
import Home from './Home/Home';
import Authentication from './Authentication/Authentication';
import CssBaseline from '@material-ui/core/CssBaseline';

const App = () => {
	return (
		<div>
			<CssBaseline />
			<Home />
			<Authentication />
		</div>
	);
};

export default App;
